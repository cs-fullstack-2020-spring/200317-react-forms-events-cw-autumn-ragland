import React, {Component} from 'react';

class AvailableDogs extends Component{

    render(){
        return(
            <div>
                <h1>Dogs Up for Adoption</h1>
                {
                    this.props.dogArray.map((dog, index) => {
                        return(
                            <div key = {index}>
                                <p>Dog Name : {dog.dogName}</p>
                                <p>Dog Age : {dog.dogAge}</p>
                                <p>Dog Breed : {dog.dogBreed}</p>
                                <p>Dog Training : {dog.dogTraining}</p>
                                <p>Dog Color : {dog.dogColor}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AvailableDogs;