import React from 'react';
import './BorderedImage.css';

function sayHello(){
  return "Hello";
};

function sayGoodbye(){
  //under JSX, they are just JS objects, therfore can be assigned to variables
  let g = <p>Goodbye World</p>;
  return g;
};

function foobar(){
  return <h3>Foobar!</h3>
}

// A component is 
// 1. a function2. returns JSX
// 3. its first alphabet is uppercasbe
// 4. can be used in JSX as if it is a HTML element
// The first argument of a Component function
// is all its props in an object

function Alert(props){
  return <div style={{'backgroundColor':props.bgColor}}>{props.message}</div>
}

function PenguinImage(){
  return <img src = {require('./penguin.jpeg')}/>;
}

function BorderedImageFrame(props){
  return <img src = {require('./cart.png')} style={{'border':props.border, 'border-color':props.borderColor}}/>;
}

function BorderedImageFrame1(){
  return <img src = {require('./mall.png')} id="mall"/>;
}

function BorderedImageFrame2(props){
  return <img src = {props.image} style={{'border':props.border, 'border-color':props.borderColor}}/>;
}

function SumOfTwo (props){
  return <div style={{'border':props.border, 'background-color':props.bgColor}}>{parseInt(props.x)+parseInt(props.y)}</div>;
}

function SumOfTwo1 (props){
  return <div style={{'border':props.border, 'background-color':props.bgColor}}>{props.x}+{props.y}</div>;
}

export default function App() {
  return (
    <React.Fragment>
      {/* we can call a function betwee the{} */}
      {/* the result of the function can be rendered out */}
      <h1>Helloe World</h1>
      {sayHello()}
      {sayGoodbye()}
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
      <SumOfTwo x="3" y="117" border="4px black solid" bgColor="pink"/>
    </React.Fragment>

  )
}