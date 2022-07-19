import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";

import {useFormik} from 'formik'
import { useState } from "react";
import { BASE_URL } from "./constants";
import {useNavigate} from 'react-router-dom'

export default function EditTodo() {
  const location = useLocation();
  const todo = location.state.todo;
  const navigate=useNavigate()

  console.log(todo)
  const [image, setImage]=useState(null)

    const formik=useFormik({
        initialValues:{
            title:'',
            description:'',
        },
        validate:values=>{
            // console.log(values)
        },
        onSubmit:values=>{
            
          const formData=new FormData()

          formData.append('title', values.title)
          formData.append('description', values.description)
          formData.append('image', image)
          formData.append('_id', todo._id)

          fetch(BASE_URL+'/update',{
            method:'PATCH',
            headers:{},
            body:formData
          }).then(resp=>resp.json()).then(resp=>{
            if(resp.success){
                navigate('/')
            }
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
            <Form.Group className="mb-3" controlId="title">
              <Form.Control
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter New title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter New Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select Image"
                onChange={handleFile}
              ></Form.Control>{" "}
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
