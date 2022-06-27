import AlertBox from './AlertBox';

function App() {
  return (
    <div>
      <AlertBox initialMessage="Aloha" initialValue={5}/>
      <AlertBox initialMessage="Bonjour" initialValue={0}/>
      <AlertBox initialMessage="Konichiwa" initialValue={10}/>
    </div>
  );
}

export default App;
