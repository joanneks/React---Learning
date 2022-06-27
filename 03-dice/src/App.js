import React from 'react';

class App extends React.Component {
  state = {
    "diceNumber":this.props.diceNumber,
    "bgColor":this.props.bgColor,
    "height":"20px",
    "width":"20px"
  }
  RollDice = ()=>{
    this.setState({
      diceNumber: Math.floor(Math.random()*7)
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
      <div onClick={this.RollDice} style={{"background-color":this.state.bgColor, "color":this.ColorDice(this.state.diceNumber)}}>
        {this.state.diceNumber}
      </div>
    );
  }
}

export default App;
