import Table from "./table.js"
import React, { Component } from "react";
import TopMenu from "./topmenu.js"
import Router from "./router"

const USERS_URL = "mocked_data/gym_members.json";

const mapping = {
    "#Home": 
            <div>
                <TopMenu highlightedTab="Home"/>
                <div class="box">
                    <Table data-url={USERS_URL} itemsPerPage={5} />
                </div>
            </div>,
    "#About":
            <div>
                <TopMenu highlightedTab="About"/>
                <div>
                    This is a demo of the paginated table in React. <br/>
                    Originated from Nomura's UI developer online test questions
                </div>
            </div>,
    "*": 
            <div>
                <TopMenu highlightedTab="Home"/>
                <div class="box">
                    <Table data-url={USERS_URL} itemsPerPage={5} />
                </div>
            </div>,
}

class App extends Component {
    render() {
        // const divStyle = {
        //     display: flex,
        //     alignItems: center,
        //     justifyContent: center
        // };

        const divStyle = {

        }

        return (
            // <div class="box" style={divStyle}>
            // <div>
            //     <TopMenu/>
            //     <div class="box">
            //         <Table data-url={USERS_URL} itemsPerPage={5} />
            //     </div>
            // </div>
            <Router 
             mapping={mapping} />
        );
    }
}

export default App;