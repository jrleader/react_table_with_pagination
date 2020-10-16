import Table from "./table.js"
import React, { Component } from "react"
import TopMenu from "./topmenu.js"
// import ReactRouter from "react-router"
import CommonContent from "./commonLayout"
import AboutPage from "./aboutPage"
import {HashRouter as HashRouter, BrowserRouter as Router, Route,Link} from "react-router-dom"

// let ReactRouter = require('react-router-dom')
// let {Route, Link, BrowserRouter} = ReactRouter
// let Router = BrowserRouter
// const {hashHistory} = ReactRouter

// let ReactRouter = require('react-router')
// let {Router, Route} = ReactRouter

// const history = require('history')

// let hashHistory = ReactRouter.useHistory(history.createHashHistory) (
//     {
//         queryKey: false
//     }
// )

// let hashHistory = history.createHashHistory()

const USERS_URL = "../mocked_data/gym_members.json"
// const USERS_URL = "D:\\lixia\\GitHubProjects\\react_table_with_pagination\\public\\mocked_data\\gym_members.json"

class App extends Component {

    constructor(props) {
        super(props)
        this.handleclick = this.handleclick.bind(this)
    }

    // Need to update the function to resolve any syntax errors
    handleclick(element) {
        let childMenuItems = document.querySelector("nav")
        // Remove any existing active item first
        for(child of childMenuItems.children) {
            if(child.className.contains("active")) {
                let newClassName = child.className
                newClassName = newClassName.replace("active","")
                child.className = newClassName 
            }
        }
        // Mark the item clicked as "active"
        if(!element.className.contains("active")) {
            element.className = element.className + " active"
        }
    }


    render() {
        // const divStyle = {
        //     display: flex,
        //     alignItems: center,
        //     justifyContent: center
        // };

        const divStyle = {
            marginBottom: 5 + "px"
        }

        return (
            // <div class="box" style={divStyle}>
            <div>
                <HashRouter basename="/home" hashType="noslash">
                <nav style={divStyle} class="ui inverted menu">
                    <Link class="red active item" to="/table" onClick={(elem) => this.handleclick(elem)}>Table</Link>
                    <Link class="teal item" to="/about" onClick={(elem) => this.handleclick(elem)}>About</Link>
                </nav>
                <div class="box">
                    <Route path="/table" component={() => (<Table data-url={USERS_URL} items-per-page={3}/>)}/> 
                    {/* <Route path="/table" render={(USERS_URL) => (<Table data-url={USERS_URL}/)}/> */}
                    <Route path="/about" component={AboutPage}/>
                </div>
                </HashRouter>
            </div>

            // <Router history={hashHistory}>
            //     <Route path="/">
            //         <Route path="/table" component={Table}/>
            //         <Route path="/about" component={AboutPage}/>
            //     </Route>
            // </Router>
            // <div>
            //     <TopMenu/>
            //     <div class="box">
            //         <Table data-url={USERS_URL} itemsPerPage={5} />
            //     </div>
            // </div>
        );
    }
}

export default App;