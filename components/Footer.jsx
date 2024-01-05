import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component={"footer"} sx={{
    py: 2,
  }}>
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Something here to give the footer a purpose!
    </Typography>
  </Box>
)

export default Footer