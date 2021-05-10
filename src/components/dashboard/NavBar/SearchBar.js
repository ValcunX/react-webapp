import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import '../styles/NavBar.scss';

function SearchBar({ onSearch }) {
  return (
    <div className='navbar--search' >
      <div className='navbar--search-icon'>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search or jump to..."
        classes={{
          root: 'navbar--search-input-root',
          input: 'navbar--search-input-input',
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
