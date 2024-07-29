import React, { useContext, useEffect, useState } from 'react'
import {CoinContext} from '../components/CoinContext'
import { Link } from 'react-router-dom';

const Home = () => {
const {allCoin , currency} = useContext(CoinContext);
const [displayCoin, setDisplayCoin] = useState([]) ;
const [input, setInput] = useState('');
const [isLoading, setIsLoading] = useState(true);

const inputHandler = (event) =>{
  setInput(event.target.value)
  if(event.target.value===""){
    setDisplayCoin(allCoin)
  }
}

const searchHandler = async (event) =>{
 event.preventDefault()
 const coins = await allCoin.filter((item) => {
  return item.name.toLowerCase().includes(input.toLowerCase())
 });

 setDisplayCoin(coins)
}

useEffect(() => {
  if(allCoin.length > 0){
    setDisplayCoin(allCoin);
    setIsLoading(false)
  }
}, [allCoin])




  return (
    <>
    <div className="home relative">
      <div className="hero h-96 flex flex-col items-center justify-center mt-10 md:px-0">
        <h1 className='text-4xl md:text-7xl text-center  font-semibold'>Largest <br/> Crypto Marketplace</h1>
        <p className='font-mono mt-7 text-base md:text-lg w-full md:w-8/12 text-center '>Welcome to the world's larget cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

<<<<<<< HEAD
<<<<<<< HEAD
        <form onSubmit={searchHandler} className='mt-10 w-7/12 flex flex-col md:flex-row'>
=======
        <form onSubmit={searchHandler} className='mt-10 w-7/12 flex gap-1'>


>>>>>>> 80e2e18 (first commit)
=======
        <form onSubmit={searchHandler} className='mt-10 w-7/12 flex flex-col md:flex-row'>
>>>>>>> 2e4c855 (changes)
          <input value={input} onChange={inputHandler} list="coinlist" type="text" placeholder='Search crypto..' className='outline-none text-black py-3 px-3 rounded-md w-full border-2 border-solid border-blue-600'/>

          <datalist id='coinlist'>
            {allCoin.map((item, index) => (
              <option key={index} value={item.name.toLowerCase()}/>
            ))}
          </datalist>
<<<<<<< HEAD
<<<<<<< HEAD
          <button type='submit' className='bg-blue-600 font-mono mt-2 py-2 px-5 rounded-md transition-all ease-in duration-100  delay-100 hover:bg-blue-700 hover:scale-105 md:mt-0 md:ml-2 w-fit'>Search</button>
=======
          <button type='submit' className='bg-blue-600 font-mono py-1 px-5 rounded-md transition-all ease-in duration-100  delay-100 hover:bg-blue-700 hover:scale-105 md:mt-0'>Search</button>
>>>>>>> 80e2e18 (first commit)
=======
          <button type='submit' className='bg-blue-600 font-mono mt-2 py-2 px-5 rounded-md transition-all ease-in duration-100  delay-100 hover:bg-blue-700 hover:scale-105 md:mt-0 md:ml-2 w-fit'>Search</button>
>>>>>>> 2e4c855 (changes)
        </form>
      </div>

      {isLoading ? <div>
        <div class="overlay" id="overlay"></div>
        <div class="loader text-center">
          <div class="loader-cube">
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
          </div>
        </div>
      </div> : <div className="crypto-table">
      <div className="table-layout">
        <p>#</p>
        <p>Coins</p>
<<<<<<< HEAD
<<<<<<< HEAD
        <p className='hidden md:block'>Price</p>
        <p className='text-center'>24h Change</p>
        <p className='text-right hidden md:block'>Market cap.</p>
=======
        <p>Price</p>
        <p className='text-center'>24h Change</p>
        <p className='text-right'>Market cap.</p>
>>>>>>> 80e2e18 (first commit)
=======
        <p className='hidden md:block'>Price</p>
        <p className='text-center'>24h Change</p>
        <p className='text-right hidden md:block'>Market cap.</p>
>>>>>>> 2e4c855 (changes)
      </div>

      {
        displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout cursor-pointer" key={index}>
            <p>{item.market_cap_rank}</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e47e6f (initial update)
            <div className='flex items-center gap-1 md:gap-2'>
              <img src={item.image} alt="" className='w-10'/>
              <p>{`${item.name} - ${item.symbol}`}</p>
            </div>
            <p className='hidden md:block'>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h > 0 ? "text-green-500 text-center" : "text-red-600 text-center"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p className='text-right hidden md:block'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
=======
            <div className='flex items-center  gap-1'>
              <img src={item.image} alt="" className='w-10'/>
              <p>{`${item.name} - ${item.symbol}`}</p>
            </div>
            <p className='hidden md:block'>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h > 0 ? "text-green-500 text-center" : "text-red-600 text-center"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
<<<<<<< HEAD
            <p className='text-right'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
>>>>>>> 80e2e18 (first commit)
=======
            <p className='text-right hidden md:block'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
>>>>>>> 2e4c855 (changes)
          </Link>
        ))
      }
    </div>}
    </div>
    </>
  )
}

export default Home