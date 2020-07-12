import React from 'react';
'use strict';

const USERS_URL = "";

// export default class table extends react.component {}

// export default 
function Table() {
    // class Table extends React.Component {
    // render() {
    return (
        <div>
            {/* <p1>Hello World!</p1> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Xiaoming</td>
                        <td>Li</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Yifei</td>
                        <td>Zhao</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Zhe</td>
                        <td>Wang</td>
                    </tr>
                </tbody>
            </table>
            <section className="pagination">
                <button className="first-page-btn">first</button>
                <button className="first-page-btn">previous</button>
                <button className="first-page-btn">next</button>
                <button className="last-page-btn">last</button>
            </section>
        </div>
    );
    // }
}

//const e = React.createElement;

//const domContainer = document.querySelector('#content');
//ReactDOM.render(e(Table), domContainer);

export default Table;