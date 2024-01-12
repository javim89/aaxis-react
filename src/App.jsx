import Layout from '../components/Layout.jsx';
import { Typography, Box } from '@mui/material';
import CurrencyConverterSection from '../sections/CurrencyConverterSection.jsx';
import CurrencyConverterLoading from '../sections/CurrencyConverterLoading.jsx';
import { Suspense, useLayoutEffect, useState } from 'react';
function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  useLayoutEffect(() => {
    setAppBarHeight(document?.getElementById("appBar")?.clientHeight);
    setFooterHeight(document?.getElementById("footer")?.clientHeight);
  }, []);

  return (
    <Layout>
      <Box display="flex" sx={{
        height: `calc(100dvh - ${appBarHeight}px - ${footerHeight}px)`,
        overflow: "scroll"
      }} >
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
            Conversor Aaxis
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
