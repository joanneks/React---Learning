import React from 'react';

export default class BudgetTracker extends React.Component {
    state = {
        expenses: [
            {
                _id: 'exp1',
                date: '20/6/22',
                description: 'Dinner at Sarnies',
                categories: 'Food',
                amount: '30'
            },
            {
                _id: 'exp2',
                date: '18/6/22',
                description: 'Bowling',
                categories: 'Entertainment',
                amount: '45'
            },
            {
                _id: 'exp3',
                date: '17/6/22',
                description: 'MRT Fare to Stadium',
                categories: 'Transport',
                amount: '45'
            }
        ],
        date:'',
        description:'',
        categories:'Transport',
        amount:'',
        expenseBeingEdited:null
    }
    updateFormField =(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    beginEdit=(each)=>{
        this.setState({
            expenseBeingEdited:each

        })
    }
    
    renderExpenseList =(each)=>{
        
        return(
            this.state.expenseBeingEdited === null || this.state.expenseBeingEdited._id !== each._id ?
                <div className="container mt-3">
                    <div className="border border-1 border-dark">
                        <h4 className="mt-2 ms-3">Expense Id: {each._id}</h4>
                        <ul>
                            <li className="mt-3 ms-3">Date: {each.date}</li>
                            <li className="mt-3 ms-3">Expense Description: {each.description}</li>
                            <li className="mt-3 ms-3">Category: {each.categories}</li>
                            <li className="mt-3 ms-3">Amount:{each.amount}</li>
                        </ul>
                        <div className='ms-3 mb-3'>
                            <button className='btn btn-primary' onClick={ ()=>{this.beginEdit(each)} }>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
                :
                <div className="container mt-3">
                    <div className="border border-1 border-dark">
                        <p>expense is being edited</p>
                    </div>
                </div>
        )
    }
    renderAddExpense(){
        return(
            <div className="container mt-3">
                <h2>Add New Expense</h2>
                <div className="mt-3 ms-3">
                    <label>Date: </label>
                    <input type="text" className="ms-3" name="date" value={this.state.date} onChange={this.updateFormField}/>
                </div>
                <div className="mt-3 ms-3">
                    <label>Expense Description: </label>
                    <input type="text" className="ms-3" name="description" value={this.state.description} onChange={this.updateFormField}/>
                </div>
                <div className="mt-3 ms-3">
                    <label>Category: </label>
                    <select className="form-select ms-3" name="categories" value={this.state.categories} onChange={this.updateFormField}>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                        <option value="Loans">Loans</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mt-3 ms-3">
                    <label>Amount: </label>
                    <input type="text" className="ms-3" name="amount" value={this.state.amount} onChange={this.updateFormField}/>
                </div>
                <button className="btn btn-primary mt-3 ms-3" onClick={this.addExpense}>Add Expense</button>
            </div>
        )
    }
    addExpense=()=>{
        let newExpense = 
        {
            _id:"exp"+Math.floor(Math.random()*100),
            date: this.state.date,
            description: this.state.description,
            categories: this.state.categories,
            amount: this.state.amount

        }
        let cloned = this.state.expenses.slice()
        cloned.push(newExpense)
        this.setState({
            expenses: cloned
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        this.state.expenses.map((each)=>
                        <React.Fragment key={each._id}>
                            {this.renderExpenseList(each)}
                        </React.Fragment>
                        )
                    }
                </div>
                <div>
                    {this.renderAddExpense()}
                </div>
                
            </React.Fragment>
        )
    }
}



