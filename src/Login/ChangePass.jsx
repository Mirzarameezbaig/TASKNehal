import React from "react";
import { Button,Form } from "react-bootstrap";

export const ChangePass=()=>{
    return (
        <div>
             <Form style={{width:'25%',margin:'auto'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" onClick={()=>alert('Your password is saved.')} >
            Save Password
          </Button>
      </Form>
        </div>
    )
}