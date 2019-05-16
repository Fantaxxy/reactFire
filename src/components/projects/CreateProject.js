import React, { Component } from 'react'

// Import Materialize
import M from "materialize-css";


class CreateProject extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-texta" onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="input-area">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
//  [e.target.id]: e.target.value 
// e is the parameter in the function
// target is the from the DOM
// id in the html is being capture
// value is the out put of the code

//  e.preventDefault(); keep the page from loading
//  this.state loads whatever the content and title is inside of state at that moment in time
