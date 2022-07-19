import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useFormik } from "formik";
import { useState } from "react";
import { BASE_URL } from "../constants";

function CreateQuiz() {
  const [number, setNumber] = useState(0); //Number of questions

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      console.log(values);
    },
    onSubmit: (values) => {
      //   fetch(BASE_URL+'/register',{
      //     method:'POST',
      //     headers:{},
      //     body:formData
      //   }).then(resp=>resp.json()).then(resp=>{
      //     console.log(resp)
      //   })
    },
  });

  function handleNumber(e) {
    console.log(e.target.value)
    setNumber(e.target.value);
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Number of Questions</Form.Label>
              <Form.Control
                type="number"
                name="number"
                placeholder="Enter Number of Questions"
                onChange={(e)=>{handleNumber(e)}}
              />
            </Form.Group>

            {number>=1? Array(number).fill().map((item, index) => {
              return (
                <Form.Group className="mb-3">
                  <Form.Label>Question- {index}</Form.Label>
                  <Form.Control
                    type="text"
                    name="number"
                    placeholder="Enter Question Text"
                    onChange={handleNumber}
                  />
                  <Row className="mt-4">
                    <Col md={{ span: 6 }}>
                      <Form.Control
                        type="text"
                        className="mt-2"
                        name="number"
                        placeholder="Option 1"
                        onChange={handleNumber}
                      />
                      <Form.Control
                        type="text"
                        className="mt-2"
                        name="number"
                        placeholder="Option 2"
                        onChange={handleNumber}
                      />
                    </Col>

                    <Col md={{ span: 6 }}>
                      <Form.Control
                        className="mt-2"
                        type="text"
                        name="number"
                        placeholder="Option 3"
                        onChange={handleNumber}
                      />
                      <Form.Control
                        className="mt-2"
                        type="text"
                        name="number"
                        placeholder="Option 4"
                        onChange={handleNumber}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              );
            })
            :''
        }

            <Button variant="primary" type="submit">
              Publish Quiz
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateQuiz;
