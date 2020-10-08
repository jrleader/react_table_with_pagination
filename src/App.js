import Table from "./table.js"
import React, { Component } from "react"
import TopMenu from "./topmenu.js"
// import ReactRouter from "react-router"
import CommonContent from "./commonLayout"
import AboutPage from "./aboutPage"
import {BrowserRouter as Router, Route,Link} from "react-router-dom"

// let ReactRouter = require('react-router-dom')
// let {Route, Link, BrowserRouter} = ReactRouter
// let Router = BrowserRouter
// const {hashHistory} = ReactRouter

// let ReactRouter = require('react-router')
// let {Router, Route} = ReactRouter

const history = require('history')

// let hashHistory = ReactRouter.useHistory(history.createHashHistory) (
//     {
//         queryKey: false
//     }
// )

let hashHistory = history.createHashHistory()

const USERS_URL = "../mocked_data/gym_members.json"
// const USERS_URL = "D:\\lixia\\GitHubProjects\\react_table_with_pagination\\public\\mocked_data\\gym_members.json"

class App extends Component {


    render() {
        // const divStyle = {
        //     display: flex,
        //     alignItems: center,
        //     justifyContent: center
        // };

        const divStyle = {

        }

        const table = () => {
            return (
                <Table data-url={USERS_URL}/>
            )
        }

        return (
            // <div class="box" style={divStyle}>
            <div>
                <Router history={hashHistory}>
                <nav>
                    <Link to="/table">Table</Link>
                    <Link to="/about">About</Link>
                </nav>
                <div>
                    {/* Data loaded however no content is shown in the table, why? */}
                    <Route path="/table" component={() => (<Table data-url={USERS_URL}/>)}/> 
                    {/* <Route path="/table" render={(USERS_URL) => (<Table data-url={USERS_URL}/)}/> */}
                    <Route path="/about" component={AboutPage}/>
                </div>
                </Router>
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