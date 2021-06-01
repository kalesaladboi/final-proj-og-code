import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import MovieNight from "./components/MovieNight"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin= this.handleLogin.bind(this)
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true})
    .then(response => {
      console.log("logged in?", response)
    }).catch(error =>{
      console.log("login error:", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route 
            exact 
            path={"/"} 
            render={props => (
              <Home {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route 
            exact 
            path={"/dashboard"} 
            render={props => (
              <Dashboard {... props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route 
            exact 
            path={"/movie"} 
            render={props => (
              <MovieNight {... props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}