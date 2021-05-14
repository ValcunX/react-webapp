import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NewProjectDialog from './ProjectsGridViewHeader/NewProjectDialog';

import './styles/ProjectsGridViewHeader.scss';

function ProjectsGridViewHeader({ handleNew }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="projects-header">
      <Typography className="projects-header-title" variant="h5">
        Your Projects
      </Typography>
      <div className="projects-header-grow"></div>
      <Button variant="outlined"
        color="secondary"
        disableElevation
        startIcon={<AddCircleOutlinedIcon />}
        classes={{ root: "new-project-button" }}
        onClick={handleClickOpen}
      >
        <Typography variant="button">New</Typography>
      </Button>
      <NewProjectDialog
        open={open}
        handleClose={() => {
          handleClose()
          handleNew()
        }}
      />
    </div>
  );
}

export default ProjectsGridViewHeader;
