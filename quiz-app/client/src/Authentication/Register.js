import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {useFormik} from 'formik'
import { useState } from "react";
import { BASE_URL } from "../constants";

function Register() {

  const [image, setImage]=useState(null)
    const formik=useFormik({
        initialValues:{
            username:'',
            password:'',
        },
        validate:values=>{
            console.log(values)
        },
        onSubmit:values=>{
            
          const formData=new FormData()

          formData.append('username', values.username)
          formData.append('password', values.password)
          formData.append('image', image)

          fetch(BASE_URL+'/register',{
            method:'POST',
            headers:{},
            body:formData
          }).then(resp=>resp.json()).then(resp=>{
            console.log(resp)
          })
        }
    })

    function handleFile(e){

      setImage(e.target.files[0])
    }

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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" placeholder="Select Image" onChange={handleFile} ></Form.Control> </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
