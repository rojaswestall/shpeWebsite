import React, { Component } from 'react';
import LoginPage from './LoginPage';
import NorthwesternShpe from './NorthwesternShpe';
import ExecBoard from './ExecBoard';

export default class Navigator extends Component {
  constructor () {
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate (page) {
    switch(page) {
      case 'Northwestern SHPE':
        return <NorthwesternShpe />;
      case 'SHPE Jr':
        return <NorthwesternShpe />;
      case 'NU Members':
        return <LoginPage />;
      case 'Executive Board':
        return <ExecBoard />;
      case 'NU Latino Community':
        return <NorthwesternShpe />;
      case 'Connect':
        return <NorthwesternShpe />;
      default:
        return <NorthwesternShpe />;
    }
  }



  render () {
    return (
      <div>
        { this.navigate(this.props.page)}
      </div>
    )
  }
}
