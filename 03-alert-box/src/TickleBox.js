import React from 'react';

export default class TickleBox extends React.Component{
    state={
        'showMessage':'false'
    }
    tickles = () => {
        this.setState({
            'showMessage':'true'
        })
    }
    untickles = () => {
        this.setState({
            'showMessage':'false'
        })
    }
    render(){
        return(
            <div style={{"backgroundColor":"yellow", "width":"100px"}} 
            onMouseEnter={this.tickles} onMouseLeave={this.untickles}>
            {this.state.showMessage}</div>
        )
    }
}
