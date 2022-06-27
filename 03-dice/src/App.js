import React from 'react';

class App extends React.Component {
  state = {
    "diceNumber":this.props.diceNumber,
    "bgColor":this.props.bgColor,
  }
  
  roll = ()=>{
    return Math.floor(Math.random()*6+1)
  }

  RollDice = ()=>{
    this.setState({
      // fxName (). put parenthesis ONLY if you want the result of the function
      diceNumber: this.roll()
    })
  }

  ColorDice = () =>{
    if (this.state.diceNumber===1){
        return "red"
    }if (this.state.diceNumber===6){
      return "green"
    }
  }

  render(){
    return (
      <div onClick={this.RollDice} style={{"background-color":this.state.bgColor, "font-size":"x-large","text-align":"center", "height":"100px", "width":"100px", "color":this.ColorDice(this.state.diceNumber)}}>
        {this.state.diceNumber}
      </div>
    );
  }
}

export default App;
