function SumOfTwo (props){
    return <div style={{'border':props.border, 'background-color':props.bgColor}}>{parseInt(props.x)+parseInt(props.y)}</div>;
  }
  
  function SumOfTwo1 (props){
    return <div style={{'border':props.border, 'background-color':props.bgColor}}>{props.x+props.y}</div>;
  }
  
export {SumOfTwo,SumOfTwo1};