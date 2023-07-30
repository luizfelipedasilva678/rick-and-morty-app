import MUIAppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import Link from 'next/link';

const Header = () => {
  return (
    <MUIAppBar position="static" className="bg-primary ">
      <Toolbar className="p-6 x1sm:flex-col x1sm:gap-3">
        <Link href="/" className="block w-full">
          <Typography variant="h1" sx={{ flexGrow: 1, fontSize: '30px' }}>
            Rick and Morty App
          </Typography>
        </Link>
        <SearchBar />
      </Toolbar>
    </MUIAppBar>
  );
};

export default Header;
