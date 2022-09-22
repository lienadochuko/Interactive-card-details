import React from 'react';
import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';
import cardf from '../images/card-logo.svg';
import cardgood from '../images/icon-complete.svg'
import './Addcard.css';

const Successcard = () => {
  
  const location = useLocation();
  console.log(location);

  const myf1 = JSON.stringify(location.state.cardname).toUpperCase();

  return (
  <div className='a'>
  <div className="bar"></div>
  <div className="wrapper">
      <div className="left">
          <div className="cf">
              <img src={cardf} alt="" className="logo" />
              <p className="putt5">{location.state.cardnumber}</p>
              <div className='wrapper1'>
              <p className="putt1">{JSON.parse(myf1)}</p>
              <p className="putt2">{location.state.month}</p>
              <p className='slash1'>/</p>
              <p className="putt3">{location.state.y1}</p>
              </div>
          </div>
          <div className="cb">
          <p className="putt4">{location.state.cv}</p> 
          </div>    
      </div>
      <div className="right1">
         <div className="wrapper3">
         <img src={cardgood} alt="success" className='logo2' />
         <p className='tank'>THANK YOU!</p>
         <p className='tank2'>We've added your card details</p>
         <button className='butt1'> Continue</button>
         </div>
      </div>
  </div>
  </div>
);
}

export default Successcard