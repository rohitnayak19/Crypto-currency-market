import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../components/CoinContext';
import LineChart from '../components/LineChart';

const Coin = () => {
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-K2ktUiPTxBu19bkVwdjtYmnN' },
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching coin data:', err);
      setError('Failed to fetch coin data.');
      setIsLoading(false);
    }
  };

  const fetchHistoricalData = async () => {
    if (!coinData || !coinData.id) return;

    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-K2ktUiPTxBu19bkVwdjtYmnN' },
    };

    const url = `https://api.coingecko.com/api/v3/coins/${coinData.id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error('Error fetching historical data:', err);
      setError('Failed to fetch historical data.');
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinId]);

  useEffect(() => {
    if (coinData) {
      fetchHistoricalData();
    }
  }, [coinData, currency]);


  return (
    <>

    {isLoading ?  <div className="relative h-36">

        <div className="overlay1"></div>
        <div class="overlay1" id="overlay1"></div>
        <div class="loader1 text-center">
          <div class="loader-cube1">
            <div class="face1"></div>
            <div class="face1"></div>
            <div class="face1"></div>
            <div class="face1"></div>
            <div class="face1"></div>
            <div class="face1"></div>
          </div>
        </div>
      </div> : 
<<<<<<< HEAD
      <div className="flex flex-col items-center md:flex-row md:justify-center mt-20 gap-10">
      <div className="text-left">
        <img src={coinData.image.large} alt={coinData.name} className="w-24 h-24 object-contain mb-4" />
=======
      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-10 mt-20 px-4 md:px-0">
      <div className="text-center md:text-left">
        <img src={coinData.image.large} alt={coinData.name} className="w-24 h-24 object-contain mb-4 mx-auto md:mx-0" />
>>>>>>> 80e2e18 (first commit)
        <p className="text-2xl text-white font-bold mb-2">
          {coinData.name} - {coinData.symbol.toUpperCase()}
        </p>
        <div>
          <ul className="text-lg text-gray-300">
            <li className="mb-1">Crypto Market Rank: <span className='font-semibold'>{coinData.market_cap_rank}</span></li>
            <li className="mb-1">Current Price: <span className='font-semibold'>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</span></li>
            <li className="mb-1">Market Cap: <span className='font-semibold'>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</span></li>
            <li className="mb-1">24 Hour High: <span className="font-semibold">{currency.symbol} {coinData.market_data.high_24h[currency.name]}</span></li>
            <li className="mb-1">24 Hour Low:  <span className="font-semibold">{currency.symbol} {coinData.market_data.low_24h[currency.name]}</span></li>
          </ul>
        </div>
      </div>
<<<<<<< HEAD
      <div className="md:w-1/2">
=======
      <div className="w-full md:w-1/2">
>>>>>>> 80e2e18 (first commit)
        <LineChart historicalData={historicalData} />
      </div>
    </div>}
    
    </>
  );
};

export default Coin;
