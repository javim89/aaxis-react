import { Grid, Skeleton, Card } from '@mui/material';

function CurrencyConverterLoading() {
  return (
    <Card variant="outlined" sx={{
      padding: "30px"
    }}>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" width={"100%"} height={80} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" width={"100%"} height={80} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" width={"100%"} height={80} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" width={"100%"} height={80} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default CurrencyConverterLoading;