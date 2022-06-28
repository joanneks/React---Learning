import React from 'react';
import AlertBox from './AlertBox';
import TickleBox from './TickleBox';


function App() {
  return (
    <div>
      <AlertBox initialMessage="Aloha" initialValue={5} number={13}/>
      <AlertBox initialMessage="Bonjour" initialValue={0} number={-5}/>
      <AlertBox initialMessage="Konichiwa" initialValue={10} number={10}/>
      <TickleBox showMessage="Lalalala"/>
    </div>
  );
}

export default App;
