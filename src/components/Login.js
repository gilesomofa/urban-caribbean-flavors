import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  return (
      <div>
          <h1>Member Login</h1>
    <Form inline>
      <FormGroup>
        <Label for="loginEmail" hidden>Email</Label>
        <Input type="email" name="email" id="loginEmail" placeholder="Email"  />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="loginPassword" hidden>Password</Label>
        <Input type="password" name="password" id="loginPassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default Login;