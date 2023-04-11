import React, { Component } from 'react'

export default class Navbar extends Component {


    constructor(props){
        super(props)

        this.state = {
            title: 'Pokedex'
        }
    }

  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{this.props.name}</a>
         </div>
        </nav>
      </div>
    )
  }
}