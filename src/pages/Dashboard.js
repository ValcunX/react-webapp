import NavBar from '../components/dashboard/NavBar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProjectCard from '../components/dashboard/ProjectCard';

import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import '../styles/Dashboard.scss'

const tileData = [];
for(let i = 0; i < 1; i++) {
  tileData.push({
    img: 'https://wp.technologyreview.com/wp-content/uploads/2021/04/for_press_release-2.jpg',
    title: 'Image',
    author: 'author',
  },)
}

function Dashboard() {
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
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <ProjectCard />
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
