import Table from "./table.js"
import React, { Component } from "react";
import TopMenu from "./topmenu.js"

const USERS_URL = "mocked_data/gym_members.json";

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
            <div>
                <TopMenu/>
                <div class="box">
                    <Table data-url={USERS_URL} itemsPerPage={5} />
                </div>
            </div>
        );
    }
}

export default App;