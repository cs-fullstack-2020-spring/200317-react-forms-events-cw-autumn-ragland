import React, { Component } from 'react';
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogArray: []
        }
    }

    updateDogArray = (newDog) => {
        this.state.dogArray.push(newDog);
        this.setState({ dogArray: this.state.dogArray });
    }

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