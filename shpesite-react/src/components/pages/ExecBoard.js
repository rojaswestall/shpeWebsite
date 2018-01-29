import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'

const ExecBoard = () => (
  // https://react.semantic-ui.com/collections/grid#grid-example-text-alignment-center
  <div>
  <Grid centered>
    <h1> Meet Our Exec Board! </h1>
  </Grid>

  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>

  // Upcoming events


);

export default ExecBoard;
