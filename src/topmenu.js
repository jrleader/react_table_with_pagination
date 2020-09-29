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
            if(this.props.highlightedTab.toLowerCase() === "home") {
                return (
                    <header>
                        <div style={divStyle}>
                            <div class="ui inverted menu">
                            <img id="logo" src="https://img.icons8.com/doodle/48/000000/retro-car.png"/>
                            <a class="red active item" href="#Home">Home</a>
                            <a class="orange item" href="#About">About</a>
                            </div>
                        </div>
                    </header>
                )
            }
            if(this.props.highlightedTab.toLowerCase() === "about") {
                return (
                    <header>
                <div style={divStyle}>
                    <div class="ui inverted menu">
                    <img id="logo" src="https://img.icons8.com/doodle/48/000000/retro-car.png"/>
                    <a class="red item" href="#Home">Home</a>
                    <a class="orange active item" href="#About">About</a>
                    </div>
                </div>
            </header>
                )
            }
    }
}