import axios from "axios";

export const getCurrencies = async () => {
  const res = await axios.get(`https://api.freecurrencyapi.com/v1/currencies?apikey=${import.meta.env.VITE_FREE_CURRENCY_API_KEY}`)
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