import React from 'react';
import offer from "../assets/discount.png";
import wallet from "../assets/wallet.png";
import "./Banner.css";

const Banner = () => {

  return (
    <section className='banner'>
        <div>
            <img src={offer} alt="offers" className='offer'/>
            <h2 className='text'>Offers</h2>
        </div>
        <div>
            <img src={wallet} alt="wallet" className='wallet'/>
            <h2 className='text'>Wallet</h2>
        </div>
    </section>
  )
}

export default Banner