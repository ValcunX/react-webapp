import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ProjectCard from './ProjectsGridView/ProjectCard';

import './styles/ProjectsGridView.scss';

function ProjectsGridView({ width, userProjects }) {
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) return 5;
    if (isWidthUp('lg', width)) return 4;
    if (isWidthUp('md', width)) return 3;
    if (isWidthUp('sm', width)) return 2;
    return 1;
  }

  return (
    <div className="projects-gridview">
      <GridList cellHeight='auto' className='projects-gridlist' cols={getGridListCols()}>
        {userProjects.map((project) => (
            <GridListTile key={project._id} cols={1}>
              <ProjectCard project={project} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}

export default withWidth()(ProjectsGridView);
