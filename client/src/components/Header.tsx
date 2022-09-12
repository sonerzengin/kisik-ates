import Logo from './Logo';
import { SearchIcon } from '@chakra-ui/icons';
import SignUP from './SignUP';

function Header() {
  return (
    <div className="container header">
      <Logo />

      <form>
        <input placeholder="Arama Yap..." className="searchbar" />
        <SearchIcon className="searchIcon" />
      </form>

      <SignUP />
    </div>
  );
}

export default Header;
