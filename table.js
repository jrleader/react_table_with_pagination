//import React from 'react';
'use strict';

var USERS_URL = "";

// export default class table extends react.component {}

// export default 
function Table() {
    // class Table extends React.Component {
    // render() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "First Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Last Name"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "1"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Xiaoming"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Li"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "2"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Yifei"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Zhao"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "3"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Zhe"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Wang"
                    )
                )
            )
        ),
        React.createElement(
            "section",
            { className: "pagination" },
            React.createElement(
                "button",
                { className: "first-page-btn" },
                "first"
            ),
            React.createElement(
                "button",
                { className: "first-page-btn" },
                "previous"
            ),
            React.createElement(
                "button",
                { className: "first-page-btn" },
                "next"
            ),
            React.createElement(
                "button",
                { className: "last-page-btn" },
                "last"
            )
        )
    );
    // }
}

var e = React.createElement;

var domContainer = document.querySelector('#content');
ReactDOM.render(e(Table), domContainer);