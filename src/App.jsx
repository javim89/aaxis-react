import Layout from '../components/Layout.jsx';
import { Typography } from '@mui/material';
import CurrencyConverterSection from '../sections/CurrencyConverterSection.jsx';
function App() {
  return (
    <Layout>
      <Typography variant="h1" fontWeight={400} gutterBottom sx={{
        fontSize: "4rem",
        my: 2
      }}>
        Conversor de monedas Aaxis
      </Typography>
      <CurrencyConverterSection />
    </Layout>
  )
}

export default App
