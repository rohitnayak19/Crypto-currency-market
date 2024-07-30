import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cryptoImage from '../assets/download.png';
import { CoinContext } from '../components/CoinContext';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='sticky top-0 left-0 right-0 z-20 navbar-bg'>
        <div className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-12">
          <div className="flex items-center">
            <NavLink to={'/'}>
              <img src={cryptoImage} alt="Crypto Logo" className="w-40"/>
            </NavLink>
            <div className="hidden md:flex gap-5 font-semibold ml-8">
              <NavLink className={({ isActive }) => `${isActive ? "text-sky-400 text-lg" : "text-lg transition duration-75 ease-in-out delay-75 hover:text-sky-400 block"}`} to={'/'}>Home</NavLink>
              <NavLink className={({ isActive }) => `${isActive ? "text-sky-400 text-lg" : "text-lg transition duration-75 ease-in-out delay-75 hover:text-sky-400 block"}`} to={'/features'}>Features</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select onChange={currencyHandler} className='text-sm md:text-base  p-1 md:p-2 rounded-sm bg-transparent border border-gray-300 outline-none cursor-pointer'>
              <option value="usd" className='bg-zinc-800'>USD</option>
              <option value="eur" className='bg-zinc-800'>EURO</option>
              <option value="inr" className='bg-zinc-800'>INR</option>
            </select>
            <button className='bg-white text-zinc-700 font-semibold text-sm md:text-base p-1 md:p-2 rounded-sm transition duration-75 ease-in-out delay-75 hover:text-sky-600'>
              Sign in
            </button>
            <button className="md:hidden p-2" onClick={toggleMenu}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 navbar-bg">
            <NavLink className={({ isActive }) => `${isActive ? "text-sky-400 text-lg" : "text-lg transition duration-75 ease-in-out delay-75 hover:text-sky-400 block"}`} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? "text-sky-400 text-lg" : "text-lg transition duration-75 ease-in-out delay-75 hover:text-sky-400 block"}`} to={'/features'}>Features</NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
