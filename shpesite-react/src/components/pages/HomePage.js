import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Divider, Image, Tab } from 'semantic-ui-react'
import LoginPage from './LoginPage';
import NorthwesternShpe from './NorthwesternShpe';
import shpeCrest from '../../assets/images/shpeNUcrest.png';

const panes = [
  // Instagram -- shpe_nu shperocks

  // NU Latino Community
  // Executive Board
  //
  { menuItem: 'Northwestern SHPE', render: () =>
    <div>
      <Divider hidden/>
      <NorthwesternShpe></NorthwesternShpe>
    </div> },
    { menuItem: 'SHPE Jr', render: () => <h1> SHPE JUNIOR!!! </h1> },
  { menuItem: 'NU Members', render: () =>
    <div>
      <Divider hidden/>
      <LoginPage></LoginPage>
    </div> },
    { menuItem: 'Executive Board', render: () => <h1> SHPE JUNIOR!!! </h1> },
    { menuItem: 'NU Latino Community', render: () => <h1> SHPE JUNIOR!!! </h1> },
    { menuItem: 'Connect', render: () => <h1> SHPE JUNIOR!!! </h1> },

]

const HomePage = () => (
    <div>
      <Image src={shpeCrest} size='medium' centered />
      <Divider hidden/>
      <Tab panes={panes} menu={{attached: true, tabular: true, position: 'right'}}/>
    </div>
)

export default HomePage;


// const HomePage = () => (
//   <div>
//     <h1> HomePage </h1>
//     <Link to="/login"> Login </Link>
//   </div>
// );
//
// export default HomePage;
