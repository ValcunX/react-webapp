import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/NavBar.scss';

function ToolbarMenu({ id, anchorEl, open, onClose}) {
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
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
    </Menu>
  );
}

export default ToolbarMenu;