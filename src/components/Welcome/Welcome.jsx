import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };
  return (
    <div className='Welcome'>
      <p className='Welcome-title title'>Hoy es tu Oportunidad</p>
      <p className='Welcome-description description'> Compra tus Tickets</p>
      <button onClick={startBooking} className='Welcome-cancel button'>
        Comenzar
      </button>
    </div>
  );
};
