import React, { useState } from 'react';
import NavBar from '../components/dashboard/NavBar';
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProjectCard from '../components/dashboard/ProjectCard';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import '../styles/Dashboard.scss'
import fixtures from '../static/fixtures/dashboard.json'

function Dashboard({ width }) {
  const [searchFilter, setSearchFilter] = useState("");
  let location = useLocation();
  const queryParams = Object.fromEntries(location.search.slice(1).split('&').map((item) => item.split('=')));
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) return 5;
    if (isWidthUp('lg', width)) return 4;
    if (isWidthUp('md', width)) return 3;
    if (isWidthUp('sm', width)) return 2;
    return 1;
  }
  
  // TODO: Connect backend
  const userProjects = (queryParams['fixtures']) ? fixtures : [];

  return (
    <div class="dashboard-root">
      <div className="navbar--root"><NavBar onSearch={setSearchFilter}/></div>
      <div className="dashboard-projects-root">
        <div className="projects-header">
          <Typography className="projects-header-title" variant="h5">
            Your Projects
          </Typography>
          <div className="dashboard-grow"></div>
          <Button variant="outlined"
            color="secondary"
            disableElevation
            startIcon={<AddCircleOutlinedIcon />}
            classes={{ root: "new-project-button" }}
          >
            <Typography variant="button">New</Typography>
          </Button>
        </div>

        <div className="projects-gridview">
          {/* TODO: Responsive cols */}
          <GridList cellHeight='auto' className='projects-gridlist' cols={getGridListCols()}>
            {userProjects.filter((item) => (searchFilter == "" || item.name.toLowerCase().startsWith(searchFilter)))
              .map((project) => (
                <GridListTile key={project._id} cols={1}>
                  <ProjectCard project={project}/>
                </GridListTile>
              ))}
          </GridList> 
        </div>
      </div>
      {/* <div className="dashboard-footer">#Todo: Footer</div> */}
    </div>
  );
}

export default withWidth()(Dashboard);
