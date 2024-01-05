import { useState, useEffect, useMemo } from "react"
import { Box, Card, Grid, Select, TextField, MenuItem, FormControl, InputLabel, IconButton } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useQuery } from "react-query";
import { getCurrencies, getRate } from "../utils/api";

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
  const [currencyOneValue, setCurrencyOneValue] = useState(1);
  const [currencyTwoValue, setCurrencyTwoValue] = useState();

  const {
    data: rate,
    refetch: refetchRate,
    isFetching: isFetchingRate,
    isError,
    error
  } = useQuery('rate', () => getRate(currencyOne.code, currencyTwo.code), {
    refetchOnWindowFocus: false,
    throwOnError: true,
    onSuccess: (newRate) => {
      if (currencyOne.code === currencyTwo.code) {
        setCurrencyTwoValue(currencyOneValue)
      } else {
        setCurrencyTwoValue(currencyOneValue * Object.values(newRate.data)[0])
      }
    }
  })


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
    refetchRate()
  }, [currencyOne, currencyTwo, refetchRate])

  if(isError){
    return(<div>{error.message}</div>)
  }
  return (
    <Card variant="outlined" sx={{
      padding: "30px",
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
            <TextField
              id="outlined-basic"
              label={currencyOne.code}
              variant="outlined"
              type="number"
              onChange={(e) => {
                setCurrencyOneValue(e.target.value)
                setCurrencyTwoValue(e.target.value * Object.values(rate.data)[0])
              }}
              value={currencyOneValue || ""}
              disabled={isFetchingRate}
            />
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
            <TextField
              id="outlined-basic"
              label={currencyTwo.code}
              variant="outlined"
              type="number"
              onChange={(e) => {
                setCurrencyTwoValue(e.target.value)
                setCurrencyOneValue(e.target.value / Object.values(rate.data)[0])
              }}
              value={currencyTwoValue || ""}
              disabled={isFetchingRate}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CurrencyConverterSection