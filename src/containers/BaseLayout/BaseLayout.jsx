import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from '../../Machines/bookingMachine';
import './BaseLayout.css';
import { Nav } from '../../components/Nav/Nav';
import { StepsLayout } from '../StepsLayout/StepsLayout';
export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 9 ~ BaseLayout ~ state', state);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
};
