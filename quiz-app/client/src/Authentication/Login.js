import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik'
import { BASE_URL } from "../constants";

function Login() {

    const navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            username:'',
            password:'',
        },
        validate:values=>{
            console.log(values)
        },
        onSubmit:values=>{
            
          fetch(BASE_URL+'/login',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(values)
          }).then(resp=>resp.json()).then(res=>{
            
            console.log(res)
            if(res.success){
              localStorage.setItem('token',res.token)
              localStorage.setItem('_id',res.data._id)
              res.data.username.endsWith('@teacher.com')?navigate('/teacher-dashboard'):navigate('/student-dashboard')

            }
          })
        }
    })

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Login
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
