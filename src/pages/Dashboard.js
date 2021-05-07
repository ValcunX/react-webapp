import NavBar from '../components/dashboard/NavBar';
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProjectCard from '../components/dashboard/ProjectCard';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import '../styles/Dashboard.scss'
import fixtures from '../static/fixtures/dashboard.json'

function Dashboard() {
  let location = useLocation();
  const queryParams = Object.fromEntries(location.search.slice(1).split('&').map((item) => item.split('=')));
  
  // TODO: Connect backend
  const userProjects = (queryParams['fixtures']) ? fixtures : {};
  console.log({ userProjects })

  return (
    <div class="dashboard-root">
      <div className="navbar--root"><NavBar /></div>
      <div className="dashboard-projects-root">
        <div className="projects-header">
          <Typography variant="h5">
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
          <GridList cellHeight='auto' className='projects-gridlist' cols={5}>
            {userProjects.map((project) => (
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

export default Dashboard;
