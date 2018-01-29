import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, Grid, Divider, Image } from 'semantic-ui-react'
import Navigator from './Navigator';
import shpeCrest from '../../assets/images/shpeNUcrest.png';

export default class HomePage extends React.Component {

  state = { activeItem: 'Northwestern SHPE' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log(this.state.activeItem);
  }

  render() {
    const { activeItem } = this.state;

      return (
        <div>
          <Image src={shpeCrest} size='medium' centered />
          <Divider hidden/>
          <Grid centered>
            <Menu tabular>
              <Menu.Item name='Northwestern SHPE' active={activeItem === 'Northwestern SHPE'} onClick={this.handleItemClick} />
              <Menu.Item name='SHPE Jr' active={activeItem === 'SHPE Jr'} onClick={this.handleItemClick} />
              <Menu.Item name='NU Members' active={activeItem === 'NU Members'} onClick={this.handleItemClick} />
              <Menu.Item name='Executive Board' active={activeItem === 'Executive Board'} onClick={this.handleItemClick} />
              <Menu.Item name='NU Latino Community' active={activeItem === 'NU Latino Community'} onClick={this.handleItemClick} />
              <Menu.Item name='Connect' active={activeItem === 'Connect'} onClick={this.handleItemClick} />
            </Menu>
          </Grid>
          <Divider hidden/>
          <Divider hidden/>
          <Navigator page={ activeItem } />
        </div>
      )
  }

}
