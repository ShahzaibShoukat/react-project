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
    </div>
  )
};

export default About;