import React from 'react';
// import { Link } from 'react-router-dom';
import { Header, Grid, Image, Divider } from 'semantic-ui-react';
// import { Mailto } from 'react-mailto';
import kelly from '../../assets/images/kelly.png';
import susan from '../../assets/images/susan.png';
import jacqueline from '../../assets/images/jacqueline.png';
import nathan from '../../assets/images/nathan.jpeg';
import caro from '../../assets/images/caro.png';
import jennifer from '../../assets/images/jennifer.png';
import gabe from '../../assets/images/gabe.png';
import alex from '../../assets/images/alex.png';
import andie from '../../assets/images/andie.png';
import zeke from '../../assets/images/zeke.png';

// <Mailto email="rojaswestall@u.northwestern.edu" obfuscate={true}>
//   emailme!
// </Mailto>

const ExecBoard = () => (
  // https://react.semantic-ui.com/collections/grid#grid-example-text-alignment-center
  <div>
  <Grid centered>
    <h1> Meet Our Exec Board! </h1>
  </Grid>

  <Divider hidden/>
  <Divider hidden/>

  <Grid columns='two'>
    <Grid.Row>
      <Grid.Column>
          <Image src={kelly} size='medium' centered circular/>
          <Header as='h2' textAlign='center'>
            Kelly Logacho
          </Header>
          <Header as='h3' textAlign='center'>
            President
          </Header>
          <Divider />
      </Grid.Column>
      <Grid.Column>
        <Image src={susan} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Susan Molina
        </Header>
        <Header as='h3' textAlign='center'>
          Vice President
        </Header>
        <Divider />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={jacqueline} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Jacqueline Vega
        </Header>
        <Header as='h3' textAlign='center'>
          Treasurer
        </Header>
        <Divider />
      </Grid.Column>
      <Grid.Column>
        <Image src={nathan} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Nathan Antwan
        </Header>
        <Header as='h3' textAlign='center'>
          Financial Chair
        </Header>
        <Divider />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={caro} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Carolina Viramontes
        </Header>
        <Header as='h3' textAlign='center'>
          Secretary
        </Header>
        <Divider />
      </Grid.Column>
      <Grid.Column>
        <Image src={jennifer} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Jennifer Delgado
        </Header>
        <Header as='h3' textAlign='center'>
          Publicity Chair
        </Header>
        <Divider />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={gabe} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Gabe Rojas-Westall
        </Header>
        <Header as='h3' textAlign='center'>
          Tech Chair and Web Master

        </Header>
        <Divider />
      </Grid.Column>
      <Grid.Column>
        <Image src={alex} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Alex Castro
        </Header>
        <Header as='h3' textAlign='center'>
          Outreach Chair
        </Header>
        <Divider />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={andie} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Andie Gomez-Patron
        </Header>
        <Header as='h3' textAlign='center'>
          Outreach Chair
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Image src={zeke} size='medium' centered circular/>
        <Header as='h2' textAlign='center'>
          Zeke Linares
        </Header>
        <Header as='h3' textAlign='center'>
          Membership Chair
        </Header>
      </Grid.Column>
    </Grid.Row>

  </Grid>
  </div>

  // Upcoming events


);

export default ExecBoard;
