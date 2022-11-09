import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from '../Machines/bookingMachine';
export const BaseLayout = () => {
  //   ropiedades de las estados
  // Value: Indica el nombre del estado actual (padre, hija, etc)
  // Context: Da el contexto al estado actual, es una pedazo del estado, aqui almacenamos info que va pasando por transiciones
  // Event: El evento por el cual se llego al estado actual
  // Action: Un array de acciones a ejecutar en ese estado, son funciones de execute de una sola vez, aqui podemos ver cuales va a ejecutar ese estado
  // Activities: Listado de actividades indicando si están en progreso o no
  // History: Indica el estado anterior
  // Meta: Los metadatos asociados al estado
  // NextEvents: Los posibles eventos a ejecutar partiendo del estado que nos encontremos
  const [state, send] = useMachine(bookingMachine);
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 15 ~ BaseLayout ~ send', send);
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 15 ~ BaseLayout ~ state', state);
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 15 ~ BaseLayout ~ state', state.matches('initial'));
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 16 ~ BaseLayout ~ state', state.matches('tickets'));
  console.log('🚀 ~ file: BaseLayout.jsx ~ line 17 ~ BaseLayout ~ state', state.can('FINISH'));

  return <div>BaseLayout</div>;
};
