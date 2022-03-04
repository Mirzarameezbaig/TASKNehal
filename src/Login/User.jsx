import React from "react";
import { Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const User=()=>{
    return(
        <div>
        <Form style={{width:'25%',margin:'auto'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/nav/change">
          <Button variant="primary">
            Change Password
          </Button>
        </Link>
      </Form>
        {/* <Link to="/"><Button>LogOut</Button></Link> */}
        </div>
    )
}
export default User;