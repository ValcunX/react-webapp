import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import '../styles/NavBar.scss';


function ToolbarMobileMenu({id, anchorEl, open, onClose, onProfileMenuOpen}) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
      <MenuItem>
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <p>Why ValcunX?</p>
      </MenuItem>

      <MenuItem>
        <IconButton>
          <GroupOutlinedIcon />
        </IconButton>
        <p>Team</p>
      </MenuItem>

      <MenuItem>
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
        <p>About</p>
      </MenuItem>

      <Divider />

      <MenuItem>
        <IconButton color="secondary">
          <PersonAddOutlinedIcon />
        </IconButton>
        <Typography variant="subtitle1" color="secondary"> Sign Up</Typography>
      </MenuItem>
      
      <MenuItem onClick={onProfileMenuOpen}>
        <IconButton color="secondary">
          <AccountCircleOutlined />
        </IconButton>
        <Typography variant="subtitle1" color="secondary"> Sign In</Typography>
      </MenuItem>
    </Menu>
  );
}

export default ToolbarMobileMenu;
