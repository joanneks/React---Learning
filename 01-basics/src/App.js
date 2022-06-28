import React from 'react';
import './style.css';

function App(){
  return(
 
    <React.Fragment>
      <nav>
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Menu</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <section id="hero">
        <div id="cta">
          <a href="#">
            Make a Booking
          </a>
        </div>
      </section>
      <section id="about-us">
        <div className="content">
          <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
        </div>
      </section>
    </React.Fragment>
  )
}

export default App;


// import React from 'react'; //eqv const React = require('react')
// import logo from './logo.svg';
// import './style.css';

// //create a React component
// //App.js is the entry point to all React application by default
// function App(){
//   // a React component must always return JSX
//   //only one parent is allowed (use React.Fragment for an invisible div)
//   return(
//     <React.Fragment>
//       <h1 style={
//         {
//           color:"green",
//           backgroundColor:"yellow"
//         }
//       }>Hello World</h1>
//       <p>Let there be light!</p>
//       <img src={logo}/>
//       <img src={require('./penguin.jpeg')}/>
//     </React.Fragment>
//   )
// }

// //we must export out the compoenent
// export default App; // eqv:module.exports = App;

