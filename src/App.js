import Table from "./table.js"
import React, { Component } from "react"
import TopMenu from "./topmenu.js"
import AboutPage from "./aboutPage"
import {HashRouter as HashRouter, BrowserRouter as Router, Route,Link, Redirect} from "react-router-dom"

const config = require("./config")

const USERS_URL = config.MODE == 'local' ? config.USERS_URL : config.SERVICE_URL

class App extends Component {

    constructor(props) {
        super(props)
        this.handleclick = this.handleclick.bind(this)
    }

    // Need to update the function to resolve any syntax errors
    handleclick(event) {
        let childMenuItems = document.querySelector("nav")
        console.log(childMenuItems)
        // Remove any existing active item first
        for(let child of childMenuItems.children) {
            if(child.className.indexOf("active",0) !== -1) {
                let newClassName = child.className
                newClassName = newClassName.replace("active","")
                child.className = newClassName
            }
        }
        let selectedElem = event.target
        console.log(selectedElem)
        // Mark the item clicked as "active"
        if(selectedElem.className.indexOf("active",0) === -1) {
            selectedElem.className = selectedElem.className.trim() + " active"
        }
    }

    render() {
        const divStyle = {
            marginBottom: 5 + "px"
        }

        return (
            <div>
                <HashRouter basename="/" hashType="noslash">
                <nav style={divStyle} className="ui inverted menu">
                    <Link className="red active item" to="/home" onClick={(ev) => this.handleclick(ev)}>Home</Link>
                    <Link className="green item" to="/table" onClick={(ev) => this.handleclick(ev)}>Table</Link>
                    <Link className="teal item" to="/about" onClick={(ev) => this.handleclick(ev)}>About</Link>
                </nav>
                <div className="box">
                    <Route path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route path="/home" component={() => {return <p>Welcome to the home page!</p>}}/>
                    <Route path="/table" component={() => {
                        return (
                            <div>
                                <h1>List of gym members</h1>
                                <Table data-url={USERS_URL} items-per-page={5}/>
                            </div>
                        )
                    }} />
                    {/* <Route path="/table" render={(USERS_URL) => (<Table data-url={USERS_URL}/)}/> */}

                    <Route path="/about" component={AboutPage}/>
                </div>
                </HashRouter>
                <Footer/>
            </div>
        );
    }
}

function Footer(props) {
    let content = "Copyright 2020 Xiaoming Li, All Rights Reserved."
    let style = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div style={style}>
            <footer>{content}</footer>
        </div>
    )
}

export default App;