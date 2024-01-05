import Layout from '../components/Layout.jsx';
import { Typography } from '@mui/material';
import CurrencyConverterSection from '../sections/CurrencyConverterSection.jsx';
import CurrencyConverterLoading from '../sections/CurrencyConverterLoading.jsx';
import { Suspense } from 'react';
function App() {
  return (
    <Layout>
      <Typography variant="h1" textAlign={"center"} fontWeight={400} gutterBottom sx={{
        fontSize: "4rem",
        my: 2
      }}>
        Conversor de monedas Aaxis
      </Typography>
      <Suspense fallback={<CurrencyConverterLoading />}>
        <CurrencyConverterSection />
      </Suspense>
    </Layout>
  )
}

export default App
