import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import LoginPage from './LoginPage';
import NorthwesternShpe from './NorthwesternShpe';
import ExecBoard from './ExecBoard';

const history = createHistory();

export default class Navigator extends Component {
  constructor () {
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate (page) {
    switch(page) {
      case 'Northwestern SHPE':
        return <NorthwesternShpe />;
      case 'Outreach':
        return <NorthwesternShpe />;
      case 'NU Members':
        return <LoginPage history={ history }/>;
      case 'Executive Board':
        return <ExecBoard />;
      case 'NU Latinx Community':
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
