import React, {Component} from 'react'
import Login from './auth/Login'
import Registration from './auth/Registration'

export default class Home extends Component {

    constructor(props){
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <h1>status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}