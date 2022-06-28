import logo from './logo.svg';
import './App.css';

function foobar(){
  return (
    <img alt="penguin" src= {require('./penguin.jpeg')}/>
  )
}

function Foobar1(props){
  return (
    <img alt="penguin" src= {require('./penguin.jpeg')} style={{
      "borderColor":props.borderColor,
      "borderStyle":"solid",
      "borderWidth":"10px"
    }}/>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>2+2={2+2}</p>
        <p>{foobar()}</p>
        <Foobar1 borderColor="pink"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
