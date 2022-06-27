import React from 'react';
// alternatively
// import {Component} from 'react'; // only import React.Component

export default class AlertBox extends React.Component{
    //do not mutate, because react react cannot detect
    state ={
        "message":this.props.initialMessage,
        "count":this.props.initialValue,
        "showBox":"",
        "noShowBox":"",
    }

    TickleBox = () => {this.setState({
        showBox: document.querySelector("#showBox").innerHTML= "that tickles!"
        })
    }

    NoTickleBox = () => {this.setState({
        showBox: document.querySelector("#showBox").innerHTML= ""
        })
    }
    
    click = () => {
        alert('clicked')
        this.setState({
            count: this.state.count + 1
        })
    }

    // event handlers should always be arrow functions
    // in an arrow function, the "this" will always be fixed


    render (){
        return(
            <div>
                <div style={{
                    "border":"solid black 4px",
                    "margin":"10px",
                    "width":"200px"
                }} onMouseEnter={this.TickleBox} onMouseLeave={this.NoTickleBox}> 
                {this.state.message} 
                </div>
                <div id="showBox"></div>
                <div style={{
                    "border": "solid black 4px",
                    "margin":"10px",
                    "width":"100px"
                }} onClick={this.click}> 
                    {this.state.count}
                </div>
            </div>
        )
    }
}