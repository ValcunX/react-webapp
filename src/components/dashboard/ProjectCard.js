import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import '../../styles/Dashboard.scss';


function ProjectCard() {
  return (
    <Card className='project-card'>
      <CardActionArea>
        <CardMedia
          className='project-card-media'
          image="https://wp.technologyreview.com/wp-content/uploads/2021/04/for_press_release-2.jpg"
          title="Project"
        />
        <CardContent className='project-card-content'>
          <div className='project-card-title-col'>
            <div className='project-card-title-row'>
              <img className='project-card-icon' src="https://wp.technologyreview.com/wp-content/uploads/2021/04/for_press_release-2.jpg" />
              <Typography variant="subtitle1" className='project-card-title'>Project Name</Typography>
            </div>
            <div className='project-card-subtitle-row'>
              <Typography variant="subtitle2" className='project-card-last-mdate'>Last Modified Time</Typography>
            </div>
          </div>
          <div className='project-card-option-col' color='primary'>
            <IconButton aria-label="more"
              onMouseDown={event => event.stopPropagation()}
              onClick={event => {
                event.stopPropagation();
                event.preventDefault();
              }}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
