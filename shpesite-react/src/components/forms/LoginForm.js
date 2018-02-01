import React from 'react';
import { Grid, Form, Button, Divider, Message } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InLineError from "../messages/InLineError";
import Colors from "../../assets/colors.js";



class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true});
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false}));

    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be Blank";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit = {this.onSubmit} loading = {loading}>

        <Grid centered>
          {errors.global && <Message negative>
            <Message.Header>Something went wrong!!!</Message.Header>
            <p>{errors.global}</p>
          </Message>}
        </Grid>

        <Divider hidden/>
        <Divider hidden/>

        <Grid centered>
          <Form.Field error={!!errors.email} width={"eleven"}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value = {data.email}
              onChange = {this.onChange}
            />
            {errors.email && <InLineError text = {errors.email} />}
          </Form.Field>
        </Grid>

        <Divider hidden/>
        <Divider hidden/>

        <Grid centered>
          <Form.Field error={!!errors.password} width={"eleven"}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value = {data.password}
              onChange = {this.onChange}
            />
            {errors.password && <InLineError text = {errors.password} />}
          </Form.Field>
        </Grid>

        <Divider hidden/>
        <Divider hidden/>

        <Grid centered>
          <Button content='primary' color='blue'> Login </Button>
        </Grid>

      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
