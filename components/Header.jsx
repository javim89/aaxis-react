import { Typography, AppBar, Toolbar } from '@mui/material';
import aaxisLogo from "/aaxis-logo.webp";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        <img src={aaxisLogo} alt="Aaxis logo" />
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header