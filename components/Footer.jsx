import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => (
  <Box 
    component={"footer"} 
    sx={{
      py: 2,
      backgroundColor: (theme) => theme.palette.primary.main
    }}
  >
    <Typography variant="h6" align="center" gutterBottom>
      Conversor de monedas Aaxis
    </Typography>
    <Box textAlign={"center"}>
    <IconButton component="a" href='https://www.linkedin.com/in/javiermarengo/' target="_blank" rel="noreferrer">
      <LinkedInIcon />
    </IconButton>
    <IconButton href='https://github.com/javim89' target="_blank" rel="noreferrer">
      <GitHubIcon />
    </IconButton>
    </Box>
    {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Something here to give the footer a purpose!
    </Typography> */}
  </Box>
)

export default Footer