import React from 'react'

export default class SurveyForm extends React.Component {
    // SEIPO
    // state: what are the state variables of the component (i.e what are the data that component is in charge of)
    state = {
        'name':'',
        'email':'',
        'color':'',
        'country':'Singapore',
        'fruits':[]
    }

// SOLUTION 1
    updateName = (event) =>{
        console.log(event.target.value); // =>  `event` will always refer event that happened
                                         //=>  event.target will refer to the element that the event happened on
                                         // => event.target.value will be what the new value for the element should be
        this.setState({
            'name': event.target.value
        })                            
    }
    updateEmail = (event) => {
        this.setState({
            'email': event.target.value
        })
    }

    updateColor = (event) => {
        this.setState({
            'color': event.target.value
        })
    }
    updateCountry = (event) =>
    this.setState({
        'country':event.target.value
    })
    updateFruits = (event) => {
        //React community believes in values should be immutable
        //this only applies to arrays

        //NOT PROPER WAY but it works
        //  this.state.fruits.push(event.target.value);
        //  this.setState({
        //  'fruits': this.state.fruits

        //PROPER WAY --> to prevent side effects by not changing the original array. for purposes of FX Programming
        // 1.clone the original Array
        // let cloned = this.state.fruits.slice()
        // // 2.update the clones array
        // cloned.push(event.target.value)
        // // 3.set the clones array back into the state
        // this.setState({
        //     'fruits':cloned
        // })

        // //check if value is already in array
        // //i.e check if checkbox has been checked
        // if(this.state.fruits.includes(event.target.value)){
        //     //how to remove from an array
        //     //1.clone the original array
        //     let cloned = this.state.fruits.slice();
        //     //2. remove from the clone
        //     let indexToRemove = -1;
        //     for (let i=0;i<this.state.fruits.length;i++){
        //         if(this.state.fruits[i] === event.target.value){
        //             indexToRemove = i;
        //             break;
        //         }
        //     }
        //     cloned.splice(indexToRemove,1);
        //     //3. replace the cloned array into the state
        //     this.setState({
        //         'fruits':cloned
        //     })
        // } else{
        // //PROPER WAY - MORE COMPLEX VERSION
        // // 1.clone the original Array
        // // 2.update the clones array
        //     //... this is a spread operator, works on array and object. it copies out everything within the array/object
        //     // let primes =[1,3,5,7] console.log(...primes) returns 1,3,5,7
        //     // let x = object let p = {...x} console.log(p) returns the key/value pairs in x.
        //     let cloned = [...this.state.fruits,event.target.value]
        //     // 3.set the clones array back into the state
        //     this.setState({
        //         'fruits':cloned
        //     })
        // }

        if(this.state.fruits.includes(event.target.value)){
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            //create array --> exclusion method
            let cloned = [
                //slice from index 0 to the indexed item before the value to remove
                ...this.state.fruits.slice(0,indexToRemove),
                //slice from after value to remove to end of array
                ...this.state.fruits.slice(indexToRemove+1)
            ]
            this.setState({
                'fruits':cloned
            })
        }else{
            // 1. clone the original array
            // 2. update the cloned array
            // let cloned = [...this.state.fruits, event.target.value];
            // this.setState({
            //     'fruits': cloned
            // })
            this.setState({
                'fruits':[...this.state.fruits,event.target.value]
            })
        }

    }

    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" 
                           className="form-control"
                           value={this.state.name}
                           onChange={this.updateName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.updateEmail}/>
                </div>
                <div>
                    <label>Favourite Color:</label>
                    <input type="radio" 
                        name="colors" 
                        value="red" 
                        className="form-check-input" 
                        onChange={this.updateColor}
                        checked={this.state.color==='red'}
                    />
                    <label className="form-check-label">Red</label>

                    <input type="radio" 
                        name="colors" 
                        value="green" 
                        className="form-check-input" 
                        onChange={this.updateColor}
                        checked={this.state.color === 'green'}
                    />
                    <label className="form-check-label">Green</label>

                    <input type="radio" 
                        name="colors" 
                        value="blue" 
                        className="form-check-input" 
                        onChange={this.updateColor}
                        checked={this.state.color === "blue"}
                    />
                    <label className="form-check-label">Blue</label>
                </div>
                <div>
                    <label>Country</label>
                    <select className="form-control" value={this.state.country} onChange={this.updateCountry}>   
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value ="indonesia">Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits: </label>
                    <input type="checkbox" className="form-check-input" name="fruits" value="apple" onChange={this.updateFruits}/>
                    <label className="form-check-label">Apple</label>
                    <input type="checkbox" className="form-check-input" name="fruits" value="orange" onChange={this.updateFruits}/>
                    <label>Orange</label>
                    <input type="checkbox" className="form-check-input" name="fruits" value="pineapple" onChange={this.updateFruits}/>
                    <label>Pineapple</label>
                    <input type="checkbox" className="form-check-input" name="fruits" value="durian" onChange={this.updateFruits}/>
                    <label>Durian</label>

                </div>
            </div>
        )
    }

}