import { useState } from "react"
import { Box, Card, Grid, Select, TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';

const CurrencyConverterSection = () => {
  const [currency, setCurrency] = useState("");
  const handleOnChange = (e) => {
    setCurrency(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Card variant="outlined" sx={{
      padding: "30px"
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} order={{
          xs: 1,
          sm: 1
        }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">USD</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={handleOnChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} order={{
          xs: 2,
          sm: 4
        }}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Usd" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={12} component={Box} order={{ xs: 5, sm: 3 }} display={"flex"} justifyContent={{
          xs: "flex-end",
          sm: "center"
        }}>
          <ImportExportIcon sx={{
            transform: "rotate(90deg)"
          }} />
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">EUR</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={handleOnChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 4, sm: 5 }}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Eur" variant="outlined" type="number" />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CurrencyConverterSection