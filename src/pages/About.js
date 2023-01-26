import { useEffect, useState } from "react";

const About = () => {
  const [btcData, setBtcData] = useState({}); 
  useEffect(() => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }, []);
  return(
    <div className="text-center page-height">
      <h1>About Page</h1>
      <p>Testing fetching data from an API through json file</p>
      <h1>Current BTC/USD data</h1> 
      <p>Code: {btcData.code}</p> 
      <p>Symbol: {btcData.symbol}</p> 
      <p>Rate: {btcData.rate}</p> 
      <p>Description: {btcData.description}</p> 
      <p>Rate Float: {btcData.rate_float}</p>
    </div>
  )
};

export default About;