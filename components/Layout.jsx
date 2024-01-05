import { Box, Container, CssBaseline } from '@mui/material';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100dvh"
    }}>
      <CssBaseline />
      <Header />
      <Box sx={{
        flexGrow: 1
      }}>
        <main>
          <Container>
            {children}
          </Container>
        </main>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout