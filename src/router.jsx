import React, {Component} from 'react';

export default class Router extends Component {

    constructor(props) {

        super(props)     // Need to call super() to have "this" initialized
        let _this = this

        _this.state = {
            windowHash: window.location.hash
        }

        _this.updateHash = this.updateHash.bind(this)
    }

    componentDidMount() {
        window.addEventListener('hashchange',this.updateHash,false)
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange',this.updateHash,false)
    }

    // updateHash(newHash) {
    //     this.state.windowHash = newHash;
    // }

    updateHash(event) {
        this.setState( // use this.setState({state:...}) to update states!
            {
                windowHash : window.location.hash
            }
        )
    }

    render() {
        if(this.props.mapping[this.state.windowHash]) {
            return this.props.mapping[this.state.windowHash]
        } else {
            return this.props.mapping['*']
        }

    }

}