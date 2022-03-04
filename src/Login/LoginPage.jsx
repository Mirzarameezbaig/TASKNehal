import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  
  return (
    <div>
      <h1>Login</h1>
      <Form style={{width:'25%',margin:'auto'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/nav/home">
          <Button variant="primary">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
};
