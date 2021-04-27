import React from 'react';
import {Component} from 'react'
// Code Keypad Component Here

class Keypad extends Component {
    render() {
        return(
        <input type = 'password' onKeyUp = {() => console.log('Entering password...')}>
        </input>
        )
    }
}

export default Keypad