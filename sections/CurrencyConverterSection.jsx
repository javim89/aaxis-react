import { useState } from "react"
import { Box, Card, Grid, Select, TextField, MenuItem, FormControl, InputLabel } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import axios from "axios";
import { useQuery } from "react-query";
import { useMemo } from "react";
import currenciesData from "./currencies.json"

const getCurrencies = async () => {
  const currencies = new Promise((resolve) => {
    setTimeout(() => {
      resolve(currenciesData)
    }, 2000)
  });
  const res = await currencies;
  return res
  // const res = await axios.get(`https://api.freecurrencyapi.com/v1/currencies?apikey=${import.meta.env.VITE_FREE_CURRENCY_API_KEY}&currencies=EUR,USD`)
  // return res.data
}
const CurrencyConverterSection = () => {
  const { data: currencies } = useQuery('currencies', getCurrencies, {
    refetchOnWindowFocus: false,
  })

  const [currency, setCurrency] = useState("");
  const handleOnChange = (e) => {
    setCurrency(e.target.value)
    console.log(e.target.value)
  }

  const currenciesArray = useMemo(() => {
    console.log(currencies)
    return Object.entries(currencies.data).map(([code, details]) => ({
      code,
      ...details
    }));
  }, [currencies])

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
              {currenciesArray.map((currencie) => (
                <MenuItem key={currencie.code} value={currencie.code}>{currencie.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} order={{
          xs: 2,
          sm: 4
        }}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Usd" variant="outlined" type="number" />
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
              {currenciesArray.map((currencie) => (
                <MenuItem key={currencie.code} value={currencie.code}>{currencie.name}</MenuItem>
              ))}
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