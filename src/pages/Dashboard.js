import React, { useState } from 'react';
import NavBar from '../components/dashboard/NavBar';
import { useLocation } from "react-router-dom";
import ProjectsGridViewHeader from '../components/dashboard/ProjectsGridViewHeader';
import ProjectsGridView from '../components/dashboard/ProjectsGridView';

import '../styles/Dashboard.scss'
import fixtures from '../static/fixtures/dashboard.json'

function Dashboard() {
  const [searchFilter, setSearchFilter] = useState("");
  let location = useLocation();
  const queryParams = Object.fromEntries(location.search.slice(1).split('&').map((item) => item.split('=')));
  
  // TODO: Connect backend
  const userProjects = (queryParams['fixtures']) ? fixtures : [];

  return (
    <div class="dashboard-root">
      <div className="navbar--root"><NavBar onSearch={setSearchFilter}/></div>
      <div className="dashboard-projects-root">
        <ProjectsGridViewHeader />
        <ProjectsGridView 
          userProjects={userProjects.filter((item) => (searchFilter == "" || item.name.toLowerCase().startsWith(searchFilter)))} 
        />
      </div>
      {/* <div className="dashboard-footer">#Todo: Footer</div> */}
    </div>
  );
}

export default Dashboard;
