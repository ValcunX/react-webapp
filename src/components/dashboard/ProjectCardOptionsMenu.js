import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import '../../styles/Dashboard.scss';

function ProjectCardOptionsMenu({ anchorEl, handleClose }) {
  return (
    <Menu 
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <IconButton color="secondary" size="small">
          <OpenInNewOutlinedIcon />
        </IconButton>
        <Typography variant="body1" color="secondary">Open</Typography>
      </MenuItem>

      <Divider />
      
      <MenuItem onClick={handleClose}>
        <IconButton color="default" size="small">
          <FileCopyOutlinedIcon />
        </IconButton>
        <Typography variant="body1">Duplicate</Typography>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <IconButton color="default" size="small">
          <EditAttributesOutlinedIcon />
        </IconButton>
        <Typography variant="body1">Rename</Typography>
      </MenuItem>

      <Divider />

      {/* TODO: show if the project is closed */}
      <MenuItem onClick={handleClose}>
        <IconButton color="error" size="small">
          <DeleteOutlineOutlinedIcon color="error" />
        </IconButton>
        <Typography variant="body1" color="error">Delete</Typography>
      </MenuItem>

      {/* TODO: show if the project is open */}
      <MenuItem onClick={handleClose}>
        <IconButton color="error" size="small">
          <CancelOutlinedIcon color="error" />
        </IconButton>
        <Typography variant="body1" color="error">Close</Typography>
      </MenuItem>
    </Menu>
  );
}

export default ProjectCardOptionsMenu;
