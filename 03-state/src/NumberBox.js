import React from 'react'

// A class is a template for an object
// extends means inherit -- the NumberBox class has all the methods and variables from the React.Component class
export default class NumberBox extends React.Component{
 // render() --> must have!
 // whatever JSX is returned from render() function is its output
 //state is an object
 // that contains key/value pairs
 //intended for data that is accessible by the component itself.
 // it is private data ,so no other components can access it or change it
 state ={
    "count":this.props.initialValue
 }

 render(){
    return(
        <div style={{
            "border": "1px solid black",
            "padding":"10px",
            "width":"20px"
        }}>{this.state.count}</div>
        //count refers to the state's key/value pair
        //whenever react detects a change in state, it will only re-render the component NumberBox
    )
 }
}

//alternative method of exporting:
//export default NumberBox