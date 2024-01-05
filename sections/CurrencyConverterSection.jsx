import { useState } from "react"
import { Box, Card, Grid, Select, TextField, MenuItem, FormControl, InputLabel, IconButton } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import axios from "axios";
import { useQuery } from "react-query";
import { useMemo } from "react";
import currenciesData from "./currencies.json"
import { useEffect } from "react";

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

  const currenciesArray = useMemo(() => {
    return Object.entries(currencies.data).map(([code, details]) => ({
      code,
      ...details
    }));
  }, [currencies])

  const [currencyOne, setCurrencyOne] = useState(currenciesArray[0]);
  const [currencyTwo, setCurrencyTwo] = useState(currenciesArray[1]);
  
  const handleOnChangeCurrencyOne = (e) => {
    const currency = currenciesArray.find((c) => c.code == e.target.value)
    setCurrencyOne(currency)
  }

  const handleOnChangeCurrencyTwo = (e) => {
    const currency = currenciesArray.find((c) => c.code == e.target.value)
    setCurrencyTwo(currency);
  }

  const handleSwitchCurrency = () => {
    setCurrencyOne(currencyTwo)
    setCurrencyTwo(currencyOne)
  }

  useEffect(() => {
    console.log({currencyOne})
    console.log({currencyTwo})
  }, [currencyOne, currencyTwo])
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
            <InputLabel id="demo-simple-select-label">{currencyOne.code}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currencyOne.code}
              label="Currency"
              onChange={handleOnChangeCurrencyOne}
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
            <TextField id="outlined-basic" label={currencyOne.code} variant="outlined" type="number" />
          </FormControl>
        </Grid>
        <Grid item xs={12} component={Box} order={{ xs: 5, sm: 3 }} display={"flex"} justifyContent={{
          xs: "flex-end",
          sm: "center"
        }}>
          <IconButton onClick={handleSwitchCurrency}>
            <ImportExportIcon sx={{
              transform: "rotate(90deg)"
            }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{currencyTwo.code}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currencyTwo.code}
              label="Currency"
              onChange={handleOnChangeCurrencyTwo}
            >
              {currenciesArray.map((currencie) => (
                <MenuItem key={currencie.code} value={currencie.code}>{currencie.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 4, sm: 5 }}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label={currencyTwo.code} variant="outlined" type="number" />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CurrencyConverterSection