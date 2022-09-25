import Logo from './Logo';
import { SearchIcon } from '@chakra-ui/icons';
import SignUP from './SignUP';

function Header() {
  return (
    <div className="container header">
      <Logo />

      <form className='d-sm-none'>
        <input placeholder="Arama Yap..." className="searchbar" />
        <SearchIcon className="searchIcon" />
      </form>

      <SignUP />
    
      <form className='d-none d-sm-block' >
        <input placeholder="Arama Yap..." className="searchbar" />
        <SearchIcon className="searchIcon" />
      </form>
    </div>
  );
}

export default Header;
