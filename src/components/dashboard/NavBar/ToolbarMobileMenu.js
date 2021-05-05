import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import NotificationsIconOutlined from '@material-ui/icons/NotificationsOutlined';

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
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIconOutlined />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      
      <MenuItem onClick={onProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}

export default ToolbarMobileMenu;