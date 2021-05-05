import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIconOutlined from '@material-ui/icons/NotificationsOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

import '../styles/NavBar.scss';

function Toolbar({menuId, onProfileMenuOpen, mobileMenuId, onMobileMenuOpen}) {
  return (
    <>
      <div className='navbar--section-desktop'>
        <IconButton aria-label="show 0 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIconOutlined />
          </Badge>
        </IconButton>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={onProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleOutlined />
        </IconButton>
      </div>

      <div className='.navbar--section-mobile'>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={onMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </>
  )
}

export default Toolbar;