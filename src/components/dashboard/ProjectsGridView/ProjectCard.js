import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ProjectCardOptionsMenu from './ProjectCardOptionsMenu';

import { getIconForLanguage } from '../../../helpers/LanguageIcons';
import '../../../styles/Dashboard.scss';

function ProjectCard({ project }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const last_mdate = new Date(Date.parse(project.last_mdate));

  return (
    <Card className='project-card' elevation="2">
      <CardActionArea>
        <CardMedia
          className='project-card-media'
          title={project.name}
          src={getIconForLanguage(project.language.name)}
          component="img"
        />
        <CardContent className='project-card-content'>
          <div className='project-card-title-col'>
            <div className='project-card-title-row'>
              <img className='project-card-icon' src={getIconForLanguage(project.language.name)} />
              <Typography variant="subtitle1" className='project-card-title'>{project.name}</Typography>
            </div>
            <div className='project-card-subtitle-row'>
              <Typography variant="subtitle2" className='project-card-last-mdate'>{last_mdate.toLocaleString('en-US')}</Typography>
            </div>
          </div>
          <div className='project-card-option-col' color='primary'>
            <IconButton aria-label="more"
              classes= {{ root: 'project-card-options' }}
              onMouseDown={event => event.stopPropagation()}
              onClick={event => {
                handleClick(event);
                event.stopPropagation();
                event.preventDefault();
              }}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
      <ProjectCardOptionsMenu 
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </Card>
  );
}

export default ProjectCard;
