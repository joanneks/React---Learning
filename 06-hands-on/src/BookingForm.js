import React from 'react';

export default class BookingForm extends React.Component{
    state={
        firstName:'',
        lastName:'',
        seating:"",
        smoking:'',
        appetiser:[]
    }

    // updateFirstName= (event) =>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // updateLastName = (event)=>{
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // updateSeating= (event)=>{
    //     this.setState({
    //         seating:event.target.value
    //     })
    // }
    // updateSmoking=(event)=>{
    //     this.setState({
    //         smoking:event.target.value
    //     })
    // }

    //UPDATE CHECKBOX METHOD 1
    // updateAppetiser=(event)=>{
    //     if(this.state.appetiser.includes(event.target.value)){
    //         let indexToRemove = this.state.appetiser.indexOf(event.target.value)
    //         let cloned = [
    //             ...this.state.appetiser.slice(0,indexToRemove),
    //             ...this.state.appetiser.slice(indexToRemove+1)
    //         ]
    //         this.setState({
    //             appetiser:cloned
    //         })
    //     } else{
    //         this.setState({
    //             appetiser: [...this.state.appetiser,event.target.value]
    //         })
    //     }
    // }

    //UPDATE CHECKBOX METHOD 2
    updateAppetiser=(event)=>{
        if(this.state.appetiser.includes(event.target.value)){
            let indexToRemove = this.state.appetiser.indexOf(event.target.value)
            let cloned = this.state.appetiser.slice();
            cloned.splice(indexToRemove,1);
            this.setState({
                appetiser:cloned
            })
        } else{
            let cloned = this.state.appetiser.slice();
            cloned.push(event.target.value)
            this.setState({
                appetiser:cloned
            })
        }
    }
    updateFormField=(event)=>{
        let stateVariable = event.target.name;
        this.setState({
            [stateVariable]:event.target.value
        })
    }

    // non-state variables
    seating = [
        {
            display:'Outdoors',
            value:'outdoors'
        },
        {
            display:'Indoors',
            value:'indoors'
        },
        {
            display:'VIP Indoors',
            value:'vip-indoors'
        }
    ]
    appetiser =[
        {
            display:'Raw Fishes',
            value: 'raw-fishes'
        },
        {
            display:'Salad',
            value: 'salad'
        },
        {
            display:'Fried Cuttlefish',
            value: 'fried-cuttlefish'
        },
        {
            display:'Peanuts',
            value: 'peanuts'
        }
    ]
    smoking = [
        {
            display:'Smoking',
            value:'smoking'
        },
        {
            display:'Non-Smoking',
            value:'non-smoking'
        }
    ]


    // how to render list of options
    // create non-state variable as an object, with each object as a nested object
    // create function --> functionName (){}
    // create empty array to hold JSX object for each option
    // create for loop --> to loop through non-state variable objects (aka options)
    // create variableName and assign it the JSX object for each option
    // push the variableName for each JSX object (aka option) into the empty array
    // return the created array in the function
    // call the function {functionName()}, in the JSX in render()

    // USING FOR LOOP TO RENDER LIST OPTIONS
    // renderSeating (){
    //     {/* when jsx objects are in an array, react will render in sequential order for you */}
    //     let options = [];
    //     for(let each of this.seating){
    //         let radioSeating =
    //             <React.Fragment>
    //                 <input type="radio" className='form-check-input' name="seating" key={each.value} value={each.value} onChange={this.updateFormField} checked={this.state.seating===each.value}/>
    //                 <label className='form-check-label'>{each.display}</label>
    //             </React.Fragment>
    //         options.push(radioSeating);
    //     }
    //     return options;
    // }

    // USING MAP FUNCTION TO RENDER LIST OPTIONS
    renderSeating (){
        {/* when jsx objects are in an array, react will render in sequential order for you */}
        let options = [];
        this.seating.map( (each)=>{
            let radioSeating = 
                <React.Fragment>
                    <input type="radio" className='form-check-input' name="seating" key={each.value} value={each.value} onChange={this.updateFormField} checked={this.state.seating===each.value}/>
                    <label className='form-check-label'>{each.display}</label>
                </React.Fragment>
            options.push(radioSeating)
            })
        return options;
    }
    
    // renderAppetiser (){
    //     let options = [];
    //     for (let each of this.appetiser){
    //         let checkboxAppetiser = 
    //             <React.Fragment>
    //                 <input type="checkbox" className="form-check-input" name="appetiser" key={each.value}value={each.value} onChange={this.updateAppetiser}/>
    //                 <label>{each.display}</label>
    //             </React.Fragment>
    //         options.push(checkboxAppetiser);
    //     }
    //     return options
    // }

    renderAppetiser (){
        let options = [];
        this.appetiser.map( (each)=>{
            let checkboxAppetiser = 
                <React.Fragment>
                    <input type="checkbox" className="form-check-input" name="appetiser" key={each.value}value={each.value} onChange={this.updateAppetiser}/>
                    <label>{each.display}</label>
                </React.Fragment>
            options.push(checkboxAppetiser);
        })
        return options;
    }

    renderSmoking (){
        let options = [];
        for (let each of this.smoking){
            let checkboxSmoking =
                <React.Fragment>
                    <option key={each.value} value={each.value}>{each.display}</option>
                </React.Fragment>
                options.push(checkboxSmoking);
        }
        return options;
    }

    render(){
        return(
            <div className="container">
                <div>
                    <label>First Name: </label>
                    <input type="text" key='firstName' name='firstName' value={this.state.firstName} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" key='lastName' name='lastName' value={this.state.lastName} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label className='form-check-label'>Seating: </label>
                    {/* <input type="radio" className='form-check-input' name="seating" value="outdoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>Outdoors</label>
                    <input type="radio" className='form-check-input' name="seating" value="indoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>Indoors</label>
                    <input type="radio" className='form-check-input' name="seating" value="vip-indoors" onChange={this.updateSeating}/>
                    <label className='form-check-label'>VIP Indoors</label> */}
                    {this.renderSeating()}
                </div>
                <div>
                    <select className="form-control" key='smoking' name='smoking' value={this.state.smoking} onChange={this.updateFormField}>
                        {/* <option value="smoking">Smoking</option>
                        <option value="non-smoking">Non-Smoking</option> */}
                        {this.renderSmoking()}
                    </select>
                </div>
                <div>
                    <label>Select an Appetiser</label>
                    {/* <input type="checkbox" className="form-check-input" name="appetiser" value="raw-fishes" onChange={this.updateAppetiser}/>
                    <label>Raw Fishes</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="salad" onChange={this.updateAppetiser}/>
                    <label>Salad</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="fried-cuttlefish" onChange={this.updateAppetiser}/>
                    <label>Fried Cuttlefish</label>
                    <input type="checkbox" className="form-check-input" name="appetiser" value="peanuts" onChange={this.updateAppetiser}/>
                    <label>Peanuts</label> */}
                    {this.renderAppetiser()}
                </div>
                <button>Submit</button>
            </div>
        )
    }
}