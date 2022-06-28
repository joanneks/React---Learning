import React from 'react';

export default class ContactForm extends React.Component {
    //only class based component can have state
    //React component (chilc class) inherits from parent class(ContactForm)
    //state variable is the data that the component has responsibility for
    //make sure that there are no derived values (e.g keep DOB in state and not a derived value like age)
    state = {
        firstName:'',
        lastName:'',
        enquiry:''
    }

    //make sure event handlesi.e functions that are called in response to an event happening are ARROW FUNCTIONS
    updateFirstName = (event) =>{
        //the first argument is the event object. It represents the event that has happened
        //event.target => element that the event happens on
        //event.target.value => the content of the element
        this.setState({
            firstName:event.target.value
        })
    }
    updateLastName = (event) => {
        this.setState({
            lastName:event.target.value
        })
    }
    updateEnquiry = (event) =>{
        this.setState({
            enquiry:event.target.value
        })
    }

    render(){
        //1. make sure do not call setState in the render function under any circumstances --> will end up in infinite loop
        // 2. derived values should go into render()
        return(
            <div>
                <div>
                <label>First Name:</label>
                {/* 1 way binding, the value should referto the state value */}
                <input type="text" 
                    value ={this.state.firstName}
                    // on change is equivalent to add.event.listener.
                    //Do not put () after function. the expression must evaluate to the function
                    onChange={this.updateFirstName}
                />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                    value={this.state.lastName}
                    onChange={this.updateLastName}/>
                </div>
                <div>
                    <label>Type of Enquiry:</label>
                    <input type="radio"
                        name="enquiry"
                        value="support"
                        onChange={this.updateEnquiry}
                        checked={this.state.enquiry === "support"}
                        />
                    <label>Support</label>
                    <input type="radio"
                        name="enquiry"
                        value="sales"
                        onChange={this.updateEnquiry}
                        checked={this.state.enquiry === "sales"}
                    />
                    <label>Sales</label>
                    <input type="radio"
                        name="enquiry"
                        value="marketing"
                        onChange={this.updateEnquiry}
                        checked = {this.state.enquiry === "marketing"}
                    />
                    <label>Marketing</label>
                </div>
            </div>
        )
    }
}