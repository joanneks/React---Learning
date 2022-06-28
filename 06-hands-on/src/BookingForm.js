import React from 'react';

export default class BookingForm extends React.Component{
    state={
        firstName:'',
        lastName:'',
        seating:[],
        smoking:'',
        appetiser:[]
    }

    updateFirstName= (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    updateLastName = (event)=>{
        this.setState({
            lastName: event.target.value
        })
    }
    updateSeating= (event)=>{
        this.setState({
            seating:event.target.value
        })
    }
    updateSmoking=(event)=>{
        this.setState({
            smoking:event.target.value
        })
    }
    updateAppetiser=(event)=>{
        this.setState({
            appetiser:event.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={this.state.firstName} onChange={this.updateFirstName}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={this.state.lastName} onChange={this.updateLastName}/>
                </div>
                <div>
                    <label className='form-check-label'>Seating: </label>
                    <input type="radio" className='form-check-input' name="seating" value="outdoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>Outdoors</label>
                    <input type="radio" className='form-check-input' name="seating" value="indoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>Indoors</label>
                    <input type="radio" className='form-check-input' name="seating" value="vip-indoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>VIP Indoors</label>
                </div>
                <div>
                    <select className="form-control" value={this.state.smoking} onChange={this.updateSmoking}>
                        <option value="smoking">Smoking</option>
                        <option value="non-smoking">Non-Smoking</option>
                    </select>
                </div>
                <div>
                    <label>Select an Appertiser</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="raw-fishes" onChange={this.updateAppetiser}/>
                    <label>Raw Fishes</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="salad" onChange={this.updateAppetiser}/>
                    <label>Salad</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="fried-cuttlefish" onChange={this.updateAppetiser}/>
                    <label>Fried Cuttlefish</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="peanuts" onChange={this.updateAppetiser}/>
                    <label>Peanuts</label>
                </div>
                <button>Submit</button>
            </div>
        )
    }
}