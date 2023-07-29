import MUIAppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <MUIAppBar position="static" className="bg-primary">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Rick and Morty App
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};

export default Header;
