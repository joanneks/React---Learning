
function BorderedImageFrame(props){
    return <img src = {require('./cart.png')} style={{'border':props.border, 'border-color':props.borderColor}}/>;
  }

function BorderedImageFrame1(){
return <img src = {require('./mall.png')} id="mall"/>;
}

function BorderedImageFrame2(props){
return <img src = {props.image} style={{'border':props.border, 'border-color':props.borderColor}}/>;
}

  export {BorderedImageFrame, BorderedImageFrame1, BorderedImageFrame2};