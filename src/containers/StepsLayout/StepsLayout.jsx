import React, { useMemo } from 'react';
import { Passengers } from '../../components/Passengers/Passengers';
import { Search } from '../../components/Search/Search';
import { Tickets } from '../../components/Tickets/Tickets';
import { Welcome } from '../../components/Welcome/Welcome';
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
  const RenderContent = useMemo(() => {
    if (state.matches('initial')) return <Welcome send={send} />;
    if (state.matches('search')) return <Search state={state} send={send} />;
    if (state.matches('tickets')) return <Tickets context={state.context} send={send} />;
    if (state.matches('passengers')) return <Passengers state={state} send={send} />;
    return null;
  }, [state.matches]);
  return <div className='StepsLayout'>{RenderContent}</div>;
};
