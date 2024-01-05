import Layout from '../components/Layout.jsx';
import { Typography, Box } from '@mui/material';
import CurrencyConverterSection from '../sections/CurrencyConverterSection.jsx';
import CurrencyConverterLoading from '../sections/CurrencyConverterLoading.jsx';
import { Suspense } from 'react';
function App() {
  return (
    <Layout>
      <Box display="flex" height={600} >
        <Box margin={"auto"}>
          <Typography variant="h1" textAlign={{
            xs: "left",
            sm: "center"
          }} fontWeight={400} gutterBottom fontSize={{
            xs: "3rem",
            sm: "4rem"
          }} sx={{
            my: 2
          }}>
            Conversor de monedas Aaxis
          </Typography>
          <Suspense fallback={<CurrencyConverterLoading />}>
            <CurrencyConverterSection />
          </Suspense>
        </Box>
      </Box>
    </Layout>
  )
}

export default App
