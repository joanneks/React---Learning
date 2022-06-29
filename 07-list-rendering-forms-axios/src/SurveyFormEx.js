

// SOLUTION 2
// there is alternative to put name as 2nd argument BUT not effective
// the onChange Function can only call on a function without ()
// Hence to use that updateFormField that has 2 arguments, you need to create another function to wrap the updateFormField function
// i.e onChange = { (event) => { updateFormField (event,name) } }
// OR you can create the function with the argument name and then create a return for another function
    // updateFormField = (event) =>{
    //     let stateVariable = event.target.name;
    //     this.setState({
    //         [stateVariable]:event.target.value
    //     })
    // }



    // render() {
    //     return (
    //         <div>
    //             <div>
    //                 <label>Name:</label>
                    // <input type="text" 
    //                     name="name"
    //                     className="form-control"
    //                     value={this.state.name}
    //                     onChange={this.updateFormField}
    //                 />
    //             </div>
    //             <div>
    //                 <label>Email:</label>
    //                 <input type="text" 
    //                     name="email"
    //                     className="form-control"
    //                     value={this.state.email}
    //                     onChange={this.updateFormField}
    //                     />
    //             </div>
    //             <div>
    //                 <label>Favourite Color:</label>
    //                 <input type="radio" 
    //                     name="color" 
    //                     value="red" 
    //                     className="form-check-input" 
    //                     onChange={this.updateFormField}
    //                     checked={this.state.color==='red'}
    //                 />
    //                 <label className="form-check-label">Red</label>

    //                 <input type="radio" 
    //                     name="color" 
    //                     value="green" 
    //                     className="form-check-input" 
    //                     onChange={this.updateFormField}
    //                     checked={this.state.color === 'green'}
    //                 />
    //                 <label className="form-check-label">Green</label>

    //                 <input type="radio" 
    //                     name="color" 
    //                     value="blue" 
    //                     className="form-check-input" 
    //                     onChange={this.updateFormField}
    //                     checked={this.state.color === "blue"}
    //                 />
    //                 <label className="form-check-label">Blue</label>
    //             </div>
    //             <div>
    //                 <label>Country</label>
    //                 <select className="form-control" name="country" value={this.state.country} onChange={this.updateFormField}>   
    //                     <option value="singapore">Singapore</option>
    //                     <option value="malaysia">Malaysia</option>
    //                     <option value ="indonesia">Indonesia</option>
                        
    //                 </select>

    //             </div>
    //         </div>
    //     )
    // }