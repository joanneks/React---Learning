import React from 'react'
import axios from 'axios'

export default class AddRecipe extends React.Component{
    url = "https://8888-kunxinchor-dwadrecipeap-tbn807v1lrg.ws-us47.gitpod.io/"

    state = {
        newTitle:'',
        newIngredients:''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNew = ()=>{
        axios.post(this.url + 'recipes',{
            title:this.state.newTitle,
            inrgredients: this.state.newIngredients.split(',')
        })
        this.props.changePage('listing')
    }

    render() {
        return <React.Fragment>
            <h1>Add New Recipe</h1>
            <div>
                <label>Title</label>
                <input name="newTitle" type="text" value={this.state.newTitle} 
                       onChange={this.updateFormField} 
                       className="form-control"/>
            </div>
            <div>
                <label>Ingredients</label>
                <input name="newIngredients" type="text" value={this.state.newIngredients}
                       onChange={this.updateFormField}
                       className="form-control"/>
            </div>
            <button className="btn btn-primary"
                onClick={this.addNew}>Add New Recipe</button>
            </React.Fragment>
    }
}