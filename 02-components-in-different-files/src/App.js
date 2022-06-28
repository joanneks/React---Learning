import React from 'react';
import './BorderedImage.css';
import {BorderedImageFrame, BorderedImageFrame1, BorderedImageFrame2} from './BorderedImage';
import Alert from './Alert';
import PenguinImage from './PenguinImage';
import {SumOfTwo,SumOfTwo1} from './SumOfTwo';
import SayHello from './SayHello';
import SayGoodbye from './SayGoodbye';
import foobar from './foobar';
import ClickCount from './ClickCount';

// A component is 
// 1. a function2. returns JSX
// 3. its first alphabet is uppercasbe
// 4. can be used in JSX as if it is a HTML element
// The first argument of a Component function
// is all its props in an object

export default function App() {
  return (
    <React.Fragment>
      {/* we can call a function betwee the{} */}
      {/* the result of the function can be rendered out */}
      <h1>Helloe World</h1>
      {SayHello()}
      {SayGoodbye()}
      {foobar()}
      {/* Create and render an instance of the component */}
      <Alert bgColor="red" message="Hello Penguin"/>
      <Alert bgColor="yellow" message="Bye Penguin"/>
      <PenguinImage/>
      <BorderedImageFrame border="4px solid" borderColor="blue"/>
      <BorderedImageFrame1/>
      <BorderedImageFrame2 image={require("./cart.png")}/>
      <BorderedImageFrame2 image={require("./mall.png")}/>
      <SumOfTwo x="5" y="10" border="4px black solid" bgColor="pink"/>
      <SumOfTwo x="1000" y="350" border="4px black solid" bgColor="peach"/>
      <SumOfTwo1 x={3} y={117} border="4px black solid" bgColor="pink"/>
      <ClickCount/>
      <ClickCount/>
    </React.Fragment>

  )
}