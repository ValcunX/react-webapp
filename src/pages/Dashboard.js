import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import NavBar from '../components/dashboard/NavBar';
import ProjectsGridViewHeader from '../components/dashboard/ProjectsGridViewHeader';
import ProjectsGridView from '../components/dashboard/ProjectsGridView';

import '../styles/Dashboard.scss'
import fixtures from '../static/fixtures/dashboard.json'

function Dashboard() {
  const users = useSelector(state => state.users);
  let location = useLocation();
  const queryParams = Object.fromEntries(location.search.slice(1).split('&').map((item) => item.split('=')));
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setLoading] = useState(!queryParams['fixtures']);
  const [userProjects, setUserProjects] = useState((queryParams['fixtures']) ? fixtures : []);
  
  useEffect(() => {
    async function loadData() {
      if(queryParams['fixtures']) return;

      // # TODO: 1 should be replaced with user id with Redu
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${users.USER_ID}/projects/`)
      setUserProjects(response.data);
      setLoading(false);
      console.log(response)
    }
    loadData();
  }, []);

  return (
    <div class="dashboard-root">
      <div className="navbar--root"><NavBar onSearch={setSearchFilter}/></div>
      <div className="dashboard-projects-root">
        <ProjectsGridViewHeader />
        <ProjectsGridView 
          userProjects={userProjects.filter((item) => (searchFilter === "" || item.name.toLowerCase().startsWith(searchFilter)))} 
          isLoading={isLoading}
        />
      </div>
      {/* <div className="dashboard-footer">#Todo: Footer</div> */}
    </div>
  );
}

export default Dashboard;
