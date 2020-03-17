import React, { Component } from 'react';

class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            dogName : "",
            dogAge : 0,
            dogBreed : "",
            dogTraining : false,
            dogColor : "",
        }
    }

    // one event handler to conditionally update state
    handleChange = (event) => {
        if(event.target.name === "dogName"){
            this.setState({dogName : event.target.value})
        } else if(event.target.name === "dogAge") {
            this.setState({dogAge : event.target.value})
        } else if(event.target.name === "dogBreed") {
            this.setState({dogBreed : event.target.value})
        } else if(event.target.name === "dogTraining") {
            this.setState({dogTraining : !this.state.dogTraining}) // toggle check setting opposite of current value in state
            console.log(event.target)
        } else if(event.target.name === "dogColor") {
            this.setState({dogColor : event.target.value})
        }
    }

    handleSubmission = (event) => {
        event.preventDefault(); // keep page from reloading
        // set state to initial values
        this.setState({
            dogName : "",
            dogAge : 0,
            dogBreed : "",
            dogTraining : false,
            dogColor : "",
        })
        // pass state to callback function
        this.props.updateDogArray(this.state);
    }

    // render form
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Find Your Dog a Home</legend>

                        <div className="formGroup">
                            <label htmlFor="dogName">Dog Name : </label>
                            <input type="text" name="dogName" id="dogName" value = {this.state.dogName} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogAge">Dog Age : </label>
                            <input type="number" name="dogAge" id="dogAge" value = {this.state.dogAge} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogBreed">Dog Breed : </label>
                            <input type="text" name="dogBreed" id="dogBreed" value = {this.state.dogBreed} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <p>Is your dog potty trained?</p>
                            <label htmlFor="dogTraining">Yes : </label>
                            <input type="checkbox" id="dogTraining" name="dogTraining" checked = {this.state.dogTraining} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogColor">Dog Color : </label>
                            <select id="dogColor" name = "dogColor" value = {this.state.dogColor} onChange = {this.handleChange}>
                                <option value=" ">--</option>
                                <option value="white">white</option>
                                <option value="black">black</option>
                                <option value="brown">brown</option>
                                <option value="spotted">spotted</option>
                                <option value="other">other</option>
                            </select>
                        </div>

                        <button onClick = {this.handleSubmission}>Find Them a Home</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddAdoptionForm;