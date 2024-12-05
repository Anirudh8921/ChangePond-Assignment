import React, { Component } from 'react';
import Car from '../assets/images/Car.jpg';
import Bike from '../assets/images/Bike.jpg';

class ToggleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkVehicle: true
        };
    }

  
    toggleImage = () => {
        this.setState((prevState) => ({
            checkVehicle: !prevState.checkVehicle
        }));
    };

    render() {
        const { checkVehicle } = this.state;

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkVehicle ? Car : Bike} alt={checkVehicle ? 'Car' : 'Bike'} height='200px' width='300px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default ToggleImageComp;

