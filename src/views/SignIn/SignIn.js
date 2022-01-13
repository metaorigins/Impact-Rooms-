import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './SignIn.css'
import clsx from 'clsx';

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        let admin = {
            email: email,
            password: password,
        };

        fetch('http://localhost:8200/api/impact/someAPI', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(admin)
        }).then(r => r.json()).then(res => {
            if (res) {
                alert('User Registered')
            }
        });
    }

    return (
        <Container>
            <h2 className='mainTitle'>Sign Up</h2>
            <Form className={clsx('formContainer','formContent')}>
                <br />
                <Form.Group controlId="FormEmail">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <br></br>
                <Form.Group controlId="FormPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <br></br>
                <Button variant='primary' type='submit' onClick={(e) => submit(e)}>Submit</Button>
            </Form>
        </Container>
    )
}

export default SignIn;