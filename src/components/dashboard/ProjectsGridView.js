import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectCard from './ProjectsGridView/ProjectCard';

import './styles/ProjectsGridView.scss';

function ProjectsGridView({ width, userProjects, isLoading, onChange }) {
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) return 5;
    if (isWidthUp('lg', width)) return 4;
    if (isWidthUp('md', width)) return 3;
    if (isWidthUp('sm', width)) return 2;
    return 1;
  }

  return (
    <div className="projects-gridview">
      {isLoading ?
        <div className="projects-spinner-container">
          <CircularProgress size="4rem" /> 
        </div>
      : 
        <GridList cellHeight='auto' className='projects-gridlist' cols={getGridListCols()}>
          {userProjects.map((project) => (
              <GridListTile key={project.id} cols={1}>
                <ProjectCard project={project} onChange={onChange} />
              </GridListTile>
            ))}
        </GridList>
      }
    </div>
  );
}

export default withWidth()(ProjectsGridView);
