import React from 'react';
'use strict';

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        const ITEMS_PER_PAGE = 3;
        this.state = {
            members: [], // The members to display in the table
            currMembers: [], // The members showing on the current page
            currentPage: 1, // The page of table
            minPage: 1,
            itemsPerPage: ITEMS_PER_PAGE,
            maxPage: 1
        }
        this.handleFButtonClick = this.handleFirstButtonClick.bind(this); // Use the function as an instance method rather than a class method
        this.handleLuttionClick = this.handleLastButtionClick.bind(this); // Use the function as an instance method rather than a class method
        this.handleNButtonClick = this.handleNextButtonClick.bind(this); // Use the function as an instance method rather than a class method
        this.handlePButtonClick = this.handlePrevButtonClick.bind(this); // Use the function as an instance method rather than a class method

    }

    fetchMembers() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    members: json.members,
                    maxPage: Math.ceil(json.members.length / this.state.itemsPerPage),
                }
                )
                console.log(JSON.stringify(this.state.members))
            })
            .then(() => {
                this.setState({
                    currMembers: this.state.members.slice(this.state.currentPage * this.state.itemsPerPage - this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage)
                },
                    console.log(this.state.maxPage))
                // console.log("Current members:" + JSON.stringify(this.state.currMembers))
            }
            ).then(() =>
                console.log(this.state)
            )
        // for (const key in this.state) {
        //     console.log(key)
        // }
    }

    componentDidMount() {
        this.fetchMembers();
        // console.log("Current members:" + JSON.stringify(this.state.currMembers)) // Will be empty
    }


    handleFirstButtonClick() {
        let firstPgMembers = this.state.members.slice()
        firstPgMembers = firstPgMembers.slice(0, this.state.itemsPerPage)
        this.setState({
            currentPage: 1,
            currMembers: firstPgMembers
        }, () => console.log("Current members:" + JSON.stringify(this.state.currMembers)))
        console.log("First button clicked!")
        // this.forceUpdate()
    }

    handleLastButtionClick() {
        let lastPgMembers = this.state.members.slice()
        lastPgMembers = lastPgMembers.slice(this.state.maxPage * this.state.itemsPerPage - this.state.itemsPerPage, this.state.maxPage * this.state.itemsPerPage)
        this.setState({
            currentPage: this.state.maxPage,
            currMembers: lastPgMembers
        }, () => console.log("Current members:" + JSON.stringify(this.state.currMembers))
        )
        console.log("Last button clicked!")
        // this.forceUpdate()
    }

    handleNextButtonClick() {
        let nextPage = this.state.currentPage + 1
        if (nextPage <= this.state.maxPage) {
            let nextMembers = this.state.members.slice()
            nextMembers = nextMembers.slice(nextPage * this.state.itemsPerPage - this.state.itemsPerPage, nextPage * this.state.itemsPerPage)
            this.setState({
                currentPage: nextPage,
                currMembers: nextMembers
            },
                //console.log("Current members:" + JSON.stringify(this.state.currMembers))      // If not using arrow function here, currMembers will be the old version
                () => console.log("Current members:" + JSON.stringify(this.state.currMembers))  // Using arrow function, currMembers will be the updated version, why?
            )
            console.log("Next button clicked!")
        }
        // this.forceUpdate()
    }

    handlePrevButtonClick() {
        let prevPage = this.state.currentPage - 1
        if (prevPage >= this.state.minPage) {
            let prevMembers = this.state.members.slice()
            prevMembers = prevMembers.slice(prevPage * this.state.itemsPerPage - this.state.itemsPerPage, prevPage * this.state.itemsPerPage)
            this.setState({
                currentPage: prevPage,
                currMembers: prevMembers
            }, () => console.log("Current members:" + JSON.stringify(this.state.currMembers)))
            console.log("Prev button clicked!")
        }
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
                    <tbody>{this.state.currMembers
                        .map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <section className="pagination">
                    <button className="first-page-btn" onClick={() => this.handleFButtonClick()} disabled={
                        this.state.currentPage === this.state.minPage ? true : false
                    }>first</button>
                    <button className="prev-page-btn" onClick={() => this.handlePButtonClick()} disabled={
                        this.state.currentPage === this.state.minPage ? true : false
                    }>previous</button>
                    {/* <div className="pageSelections">
                        {
                            // this.state.maxPage.map(
                            //     (page) => {
                            //         <a key={page}>{page}</a>
                            //     }
                            // )
                            range(1, this.state.maxPage).map(
                                (page) => {
                                    <a key={page}>{page}</a>
                                }
                            )
                        }
                    </div> */}
                    <button className="next-page-btn" onClick={() => this.handleNButtonClick()} disabled={
                        this.state.currentPage === this.state.maxPage ? true : false
                    }>next</button>
                    <button className="last-page-btn" onClick={() => this.handleLuttionClick()} disabled={
                        this.state.currentPage === this.state.maxPage ? true : false
                    }>last</button>
                </section>
            </div>
        );
    }
}

// Helper functions
// Generate a range of numbers, ref: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
function range(start, end) {
    var total = [];

    if (!end) {
        end = start;
        start = 0;
    }

    for (var i = start; i < end; i += 1) {
        total.push(i);
    }

    return total;
}

//const e = React.createElement;

//const domContainer = document.querySelector('#content');
//ReactDOM.render(e(Table), domContainer);

//export default Table;