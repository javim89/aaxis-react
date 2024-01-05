import axios from "axios";
import currenciesData from "../sections/currencies.json";

export const getCurrencies = async () => {
  // const currencies = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(currenciesData)
  //   }, 2000)
  // });
  // const res = await currencies;
  // return res
  const res = await axios.get(`https://api.freecurrencyapi.com/v1/currencies?apikey=${import.meta.env.VITE_FREE_CURRENCY_API_KEY}&currencies=EUR,USD`)
  return res.data
}

export const getRate = async (base, target) => {
  try{
    const res = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_FREE_CURRENCY_API_KEY}&base_currency=${base}&currencies=${target}`);
    return res.data
  } catch (e){
    throw new Error(e.message)
  }
}