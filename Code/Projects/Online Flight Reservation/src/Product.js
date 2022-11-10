import { Component } from "react";
import React from "react";
import { ReactDOM } from "react";

class Product extends Component {
    state = { 
        quantity : 50
     } 

    increaseHandler = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    decreaseHandler = () => {
        this.setState({
            quantity: this.state.quantity - 1
        });
    }

    render() { 
        return (
            <div>
                <h1>Received from Product Functional Component
                    {this.props.classq}
                </h1>
                <button onClick={this.increaseHandler}>+</button>
                <p>{this.state.quantity}</p>
                <button onClick={this.decreaseHandler}>-</button>
            </div>
        );
    }
}
 
export default Product;