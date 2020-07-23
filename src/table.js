import React from 'react';
'use strict';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [], // The members to display in the table
            currentPage: 1, // The page of table
            minPage: 1,
            itemsPerPage: 3,
            maxPage: 1
        }
        this.handleButtonClick = this.handleFirstButtonClick.bind(this); // Use the function as an instance method rather than a class method
    }

    fetchMembers() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((members) => {
                this.setState({
                    members: members.members,
                    maxPage: Math.ceil(members.length / itemsPerPage)
                })
                console.log(JSON.stringify(this.state.members))
            })
    }

    componentDidMount() {
        this.fetchMembers();
    }

    handleFirstButtonClick() {

    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.members.map((user) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <section className="pagination">
                    <button className="first-page-btn" onClick={this.handleButtonClick} disabled={
                        this.state.currentPage === this.state.minPage ? true : false
                    }>first</button>
                    <button className="first-page-btn">previous</button>
                    <button className="first-page-btn">next</button>
                    <button className="last-page-btn">last</button>
                </section>
            </div>
        );
    }
}

//const e = React.createElement;

//const domContainer = document.querySelector('#content');
//ReactDOM.render(e(Table), domContainer);

//export default Table;