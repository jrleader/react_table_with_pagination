'use strict';

// const { Component } = require("react");

import React, { Component } from 'react';

export default class TopMenu extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            menuItems: []
        }
    }

    render() {
        const spacing = 5
        const divStyle = {
            marginBottom: 5 + "px"
        }
        return (
            <header>
                <div style={divStyle}>
                    <div class="ui inverted menu">
                    <img id="logo" src="https://img.icons8.com/doodle/48/000000/retro-car.png"/>
                    <a class="red active item">Home</a>
                    <a class="orange item">About</a>
                    </div>
                </div>
            </header>
        )
    }
}