import React from 'react';
'use strict';

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        const ITEMS_PER_PAGE = this.props['items-per-page'];
        this.state = {
            members: [], // The members to display in the table
            currMembers: [], // The members showing on the current page
            currentPage: 1, // The page of table
            minPage: 1,
            itemsPerPage: ITEMS_PER_PAGE,
            maxPage: 1,
            pages: [],
            headers: [],
            pageLinkStyle: {
                defaultStyle: {
                    'display': 'inline',
                    'margin-left': '0.5em',
                    'margin-right': '0.5em'
                },
                selectedStyle: {
                    'border-bottom': '1pt solid red',
                    'text-color': 'red'
                }
            }
        }
        this.handleFButtonClick = this.handleFirstButtonClick.bind(this); // Use the function as an instance method rather than a class method
        this.handleLuttionClick = this.handleLastButtionClick.bind(this); // Use the function as an instance method rather than a class method
        this.handleNButtonClick = this.handleNextButtonClick.bind(this); // Use the function as an instance method rather than a class method
        this.handlePButtonClick = this.handlePrevButtonClick.bind(this); // Use the function as an instance method rather than a class method
        this.handlePgButtonClick = this.handlePageButtonClick.bind(this);
        this.setTableHeader = this.setTableHeader.bind(this);
        this.setTableValues = this.setTableValues.bind(this);
        this.setTableRows = this.setTableRows.bind(this);
        this.handleTableRowChange = this.handleTableRowChange.bind(this);
         // // For testing REST operator
        // this.setState(
        //     {
        //         members: [
        //             {
        //                 'id':'',
        //                 'fname':'',
        //                 'lname':''
        //             }
        //         ]
        //     }
        // )
    }

    fetchMembers() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    members: Object.values(json)[0],
                }
                )
                console.log(JSON.stringify(this.state.members))
            })
            .then(() => {
                this.setState({
                    maxPage: Math.ceil(this.state.members.length / this.state.itemsPerPage),
                    currMembers: this.state.members.slice(this.state.currentPage * this.state.itemsPerPage - this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage),
                },
                    console.log(this.state.maxPage))
                // console.log("Current members:" + JSON.stringify(this.state.currMembers))
            }
            ).then(() => {
                this.setState({
                    pages: range(this.state.minPage, this.state.maxPage),
                    headers: this.setTableHeader(...this.state.currMembers)
                })
                console.log(this.state)
            }
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

    handlePageButtonClick(currPage) {
        let pageSelected = currPage
        // Need to add event listeners for capturing the page chosen when clicking the page number link
        // document.getElementsByTagName("a").addEventListener(
        //     "click", () => {
        //         console.log("page link clicked!")
        //     }
        // )
        let currPageMembers = this.state.members.slice()
        currPageMembers = currPageMembers.slice(pageSelected * this.state.itemsPerPage - this.state.itemsPerPage, pageSelected * this.state.itemsPerPage)
        this.setState({
            currentPage: pageSelected,
            currMembers: currPageMembers,
        }, () => console.log("Selected page " + this.state.currentPage))
        console.log("link clicked!")
    }

    setTableHeader(...objs) {
        let headers = []
        // let props = Object.keys({
        //     'id':'',
        //     'fname':'',
        //     'lname':''
        // })
        let props = Object.keys(objs.slice(0,1)[0])
        for(let prop of [...props]) {
            headers.push(prop)
        }
        // for(let header of headers) {
        //     console.log('header: ' + header)
        // }
        return headers.map((header) => {
            return <th key={header}>{header}</th>
        })
    }

    setTableValues(obj) {
        console.log('Setting table values...')
        let values = []
        let propVals = Object.values(obj)
        for(let propVal of propVals) {
            values.push(propVal)
        }
        return values.map((val) => {
            return <td key={val}>{val}</td>
        })
    }

    // Set the number of table rows to display, as soon as the value changes in the input
    setTableRows(e) {
        this.setState(
            {
                itemsPerPage: e.target.value
            }
        )

    }

    // Change the number of rows displayed in the table by updating the property
    handleTableRowChange() {
        // Change the number of rows
        this.setState(
            {
                currentPage: 1,
                maxPage: Math.ceil(this.state.members.length / this.state.itemsPerPage),
            }, () => { // Need to set maxPage first then set the list of pages
                this.setState(
                    {
                        pages: range(this.state.minPage, this.state.maxPage),
                        currMembers: this.state.members.slice(this.state.currentPage * this.state.itemsPerPage - this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage),
                    }
                )
            }
        )
    }

    render() {
        const pages = this.state.pages.map(
            (page) => {
                return (
                    // <a key={page} href="javascript:void(0)" onClick={ (event) => {
                    <a key={page} href="http://www.sogou.com" onClick={ (event) => {
                        let e =event;
                        e.preventDefault();
                        this.handlePgButtonClick(page);
                        // Highlight the current page selected with color red and an underscore
                        // let selectedPageElem = e.target.value
                        // selectedPageElem['style'] = {
                        //     'border-bottom': '1pt solid red',
                        //     'text-color': 'red'
                        // }
                    }
                    }>{page == this.state.currentPage ? <b style={this.state.pageLinkStyle.selectedStyle}>{page}</b> : page }</a>
                )
            }
        )
        console.log(pages)
        let headers = this.state.headers
        return (
            <div>
                <section className="tableRowSetting">
                    <input type="text" value={this.state.itemsPerPage} onChange={this.setTableRows}></input> 
                    <button name="changeTableDisp" type="button" onClick={this.handleTableRowChange}>Change the number of rows per page</button>
                </section>
                <section className="memberInfo">
                    <table className="ui selectable celled table">
                        <thead>
                            <tr>{/* {
                                    this.state.currMembers
                                    .map((user) => {
                                        for(let prop in user) {
                                            <th>{prop}</th>
                                        }
                                    }
                                        // for(let prop in user) {
                                            // <th>{prop}</th>
                                        // }
                                    )
                                } */}
                                {/* <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th> */}
                                {
                                    // this.state.members.map(
                                    //     (...props) => {
                                    //         for(let prop in props) {
                                    //             return <th key={prop}>{prop}</th>
                                    //         }
                                    //     }
                                    // )
                                    // () => {
                                    //     let memberExample = this.state.members[0]
                                    //     for(let prop in memberExample) {
                                    //         return <th>{prop}</th>
                                    //     }
                                    // }
                                    // () => { // Try to extract the props from json and list them in the table header
                                    //     let headers = []
                                    //     let props = Object.keys(this.state.members[0])
                                    //     for(prop of [...props]) {
                                    //         headers.push(prop)
                                    //     }
                                    //     for(header of headers) {
                                    //         console.log('header: ' + header)
                                    //     }
                                    //     return headers.map((header) => {
                                    //         return <th key={header}>{header}</th>
                                    //     })
                                    // }
                                    // Function.apply(() => {
                                    //     while(!this.state.currMembers[0]) {}
                                    //     this.setTableHeader()
                                    // }, this, null)
                                    headers
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {   
                            this.state.currMembers.map(
                                (user) => 
                                    // <tr key={user.id}>
                                    //     <td>{user.id}</td>
                                    //     <td>{user.fname}</td>
                                    //     <td>{user.lname}</td>
                                    // </tr>
                                    {
                                        return <tr key={Object.values(user).slice(0,1)[0]}>
                                            {/* {Object.values(user).map((val) => {
                                                <td>{val}</td>
                                            })} */}
                                            {this.setTableValues(user)}
                                        </tr>
                                    }
                            )
                        }
                        </tbody>
                    </table>
                </section>
                <section className="pagination">
                    {/* <button className="first-page-btn" onClick={() => this.handleFButtonClick()}  */}
                    <button className="first-page-btn ui button" onClick={this.handleFButtonClick.bind(this)} 
                        onMouseOverCapture={ () => { 
                            console.log("Mouse over the first page button on capture")
                            console.dir(event,this).bind(this)
                        }} 
                        onMouseOver={() => {
                            console.log("Mouse over the first page button on bubbling")
                            console.dir(event,this).bind(this)
                        }} 
                        disabled={
                        this.state.currentPage === this.state.minPage ? true : false
                    }>first</button>
                    <button className="prev-page-btn ui secondary button" onClick={() => this.handlePButtonClick()} disabled={
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
                    {/* <a href="about:blank">1</a> */}
                    {/* <a href="about:blank">2</a> */}
                    {/* <a href="about:blank">3</a> */}
                    {pages}
                    <button className="next-page-btn ui primary button" onClick={() => this.handleNButtonClick()} disabled={
                        this.state.currentPage === this.state.maxPage ? true : false
                    }>next</button>
                    <button className="last-page-btn ui button" onClick={() => this.handleLuttionClick()} disabled={
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

    for (var i = start; i <= end; i += 1) {
        total.push(i);
    }

    return total;
}

//const e = React.createElement;

//const domContainer = document.querySelector('#content');
//ReactDOM.render(e(Table), domContainer);

//export default Table;