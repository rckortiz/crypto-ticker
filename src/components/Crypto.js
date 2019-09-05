import React, { useState, useEffect } from 'react'
import axios from 'axios'

// API_KEY = "02a74060-39be-4af3-8dd3-f09e23bc075e"

const Crypto = () => {
  const [currency, setCurrency] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.coinmarketcap.com/v2/ticker/?limit=20'
    )
    console.log(resp.data)
    setCurrency(resp.data)
    console.log(currency)
  }

  useEffect(() => {
    setInterval(() => {
      fetchData()
    }, 10000)
    fetchData()
  }, [])

  return (
    <>
      <div>
        <h1>Crypto Ticker</h1>
        <table>
          <thead>
            <td>Currency</td>
            <td>Price</td>
          </thead>
          <tbody>
            {currency.map((curr, i) => {
              return (
                <tr key={i}>
                  <td> {curr.name}</td>
                  <td>{curr.quotes.USD.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Crypto
