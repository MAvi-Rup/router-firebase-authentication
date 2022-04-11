import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
    const {signWithGoogle} = useFirebase()
    return (
        <div className='container'>
            <Form>
            <h1 className='fs-4'>Please Login !!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={signWithGoogle} className='m-3' variant='info'>Google SignIn</Button>
            </Form>
        </div>
    );
};

export default Login;