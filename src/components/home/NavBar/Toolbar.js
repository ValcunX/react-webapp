import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import '../styles/NavBar.scss';

function Toolbar({ menuId, onProfileMenuOpen, mobileMenuId, onMobileMenuOpen }) {
  return (
    <>
      <div className='navbar--section-desktop'>
        {/* <IconButton aria-label="show 0 new notifications" color="inherit">
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
        </IconButton> */}
        {/* <Button color="primary">
          <Typography variant="button">Primary</Typography>
        </Button> */}
        <Button classes={{ root: 'navbar--button' }}>
          <Typography variant="button">Sign Up</Typography>
        </Button>

        <Button classes={{ root: 'navbar--button' }} variant="outlined">
          <Typography variant="button">Sign In</Typography>
        </Button>

      </div>

      <div className='navbar--section-mobile'>
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
