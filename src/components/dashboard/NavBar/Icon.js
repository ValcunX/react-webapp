import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import '../styles/NavBar.scss';

function Icon() {
  return (
    <IconButton edge="start" className='navbar--menu-button' aria-label="open drawer">
      <MenuIcon />
    </IconButton>
  );
}

export default Icon