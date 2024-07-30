import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../components/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    if (allCoin.length > 0) {
      setDisplayCoin(allCoin);
      setIsLoading(false);
    }
  }, [allCoin]);

  return (
    <>
      <div className="home relative">
        <div className="hero h-96 flex flex-col items-center justify-center mt-10 md:px-0">
          <h1 className='text-4xl md:text-7xl text-center font-semibold'>
            Largest <br /> Crypto Marketplace
          </h1>
          <p className='font-mono mt-7 text-base md:text-lg w-full md:w-8/12 text-center'>
            Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
          </p>
          <form onSubmit={searchHandler} className='mt-10 w-full md:w-7/12 flex flex-col md:flex-row gap-1'>
            <input
              value={input}
              onChange={inputHandler}
              list="coinlist"
              type="text"
              placeholder='Search crypto..'
              className='outline-none text-black py-3 px-3 rounded-md w-full border-2 border-solid border-blue-600'
            />
            <datalist id='coinlist'>
              {allCoin.map((item, index) => (
                <option key={index} value={item.name.toLowerCase()} />
              ))}
            </datalist>
            <button
              type='submit'
              className='bg-blue-600 font-mono py-2 px-5 rounded-md transition-all ease-in duration-100 delay-100 hover:bg-blue-700 hover:scale-105 w-fit'
            >
              Search
            </button>
          </form>
        </div>

        {isLoading ? (
          <div className="relative h-36 flex items-center justify-center">
            <div className="overlay"></div>
            <div className="loader text-center">
              <div className="loader-cube">
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="crypto-table">
            <div className="table-layout">
              <p className='text-sm md:text-base'>#</p>
              <p className='text-center md:text-left md:ml-3 text-sm md:text-base'>Coins</p>
              <p className='hidden md:block'>Price</p>
              <p className='text-center text-sm md:text-base'>24h Change</p>
              <p className='text-right hidden md:block'>Market cap.</p>
            </div>

            {displayCoin.slice(0, 10).map((item, index) => (
              <Link to={`/coin/${item.id}`} className="table-layout cursor-pointer" key={index}>
                <p>{item.market_cap_rank}</p>
                <div className='flex items-center gap-1 md:gap-2'>
                  <img src={item.image} alt={item.name} className='w-7' />
                  <p className='text-sm md:text-base'>{`${item.name} - ${item.symbol}`}</p>
                </div>
                <p className='hidden md:block'>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "text-green-500 text-center" : "text-red-600 text-center"}>
                  {Math.floor(item.price_change_percentage_24h * 100) / 100}%
                </p>
                <p className='text-right hidden md:block'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
