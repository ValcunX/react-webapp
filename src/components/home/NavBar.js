import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {default as NavBarToolbar} from './NavBar/Toolbar'

import './styles/NavBar.scss';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'dashboard-search-account-menu';
  const mobileMenuId = 'dashboard-search-account-menu-mobile';
  
  return (
    <div className='navbar--grow'>
      <AppBar position="static" elevation="8">
        <Toolbar>
          <Typography className='navbar--title' variant="h6" noWrap>ValcunX</Typography>
          
          <div className='navbar--grow' />

          <div className="navbar--center">
            <div><Typography variant="subtitle1" noWrap>Why ValcunX?</Typography></div>
            <div><Typography variant="subtitle1" noWrap>Team</Typography></div>
            <div><Typography variant="subtitle1" noWrap>About</Typography></div>
          </div>

          <div className='navbar--grow' />
          
          <NavBarToolbar 
            menuId={menuId}
            onProfileMenuOpen={handleProfileMenuOpen}
            mobileMenuId={mobileMenuId}
            onMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
