import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import '../styles/NavBar.scss';

function Toolbar({ menuId, onProfileMenuOpen, mobileMenuId, onMobileMenuOpen }) {
  return (
    <>
      <div className='home-navbar--section-desktop'>
        <Button classes={{ root: 'home-navbar--button' }}>
          <Typography variant="button">Sign Up</Typography>
        </Button>

        <Button classes={{ root: 'home-navbar--button' }} variant="outlined">
          <Typography variant="button">Sign In</Typography>
        </Button>
      </div>

      <div className='home-navbar--section-mobile'>
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
