import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import NavBar from '../components/dashboard/NavBar';
import ProjectsGridViewHeader from '../components/dashboard/ProjectsGridViewHeader';
import ProjectsGridView from '../components/dashboard/ProjectsGridView';

import '../styles/Dashboard.scss'
import fixtures from '../static/fixtures/dashboard.json'

function Dashboard({ isAuthenticated, user_id, history, logout }) {
  let location = useLocation();
  const queryParams = Object.fromEntries(location.search.slice(1).split('&').map((item) => item.split('=')));
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setLoading] = useState(!queryParams['fixtures']);
  const [userProjects, setUserProjects] = useState((queryParams['fixtures']) ? fixtures : []);
  
  useEffect(() => {
    if(queryParams['fixtures']) return;
    if(!isAuthenticated) history.push('/signin')

    async function loadData() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${user_id}/projects/`)
      setUserProjects(response.data);
      setLoading(false);
      console.log(response)
    }
    loadData();
  }, [isAuthenticated]);

  return (
    <div class="dashboard-root">
      <div className="navbar--root">
        <NavBar 
          onSearch={setSearchFilter}
          onLogout={logout}
        />
      </div>
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    user_id: state.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

