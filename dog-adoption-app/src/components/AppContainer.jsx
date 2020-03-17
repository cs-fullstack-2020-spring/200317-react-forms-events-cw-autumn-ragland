import React, { Component } from 'react';
// import required components
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';

// define class (class name === file name)
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogArray: [] // define an empty array as a property of state
        }
    }

    // method to update array - called in child component
    updateDogArray = (newDog) => {
        this.state.dogArray.push(newDog); // add passed item to array
        this.setState({ dogArray: this.state.dogArray }); // update state globally
    }

    // render child components passing in properties
    // display child components side by side using grid
    // pass dog array (updated via callback function) to available dogs component
    // pass call back function to add adoption form component
    render() {
        return (
            <div>
                <h1>Dog Adoption</h1>
                <div className = "dogGrid">
                    <AvailableDogs className = "availableDogs" dogArray={this.state.dogArray} />
                    <AddAdoptionForm className = "dogForm" updateDogArray={this.updateDogArray} />
                </div>
            </div>
        )
    }
}

export default AppContainer;