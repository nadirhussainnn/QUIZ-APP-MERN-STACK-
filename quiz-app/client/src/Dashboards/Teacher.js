import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
export default function Teacher() {

  const navigate=useNavigate()
  
  function handleCreateQuiz(){

    navigate('/create-quiz')
  }

  return (
    <div>
      <Container>
        <Row className='mt-4 text-center'>
            <h1>Teacher Portal</h1>
            <Button variant='primary' onClick={handleCreateQuiz}>Create Quiz</Button>
        </Row>
        <Row>
          {/* {new Array(number).fill().map((product, index) => (
            <Col md={{ span: 3 }} className="mt-3 mb-4">
              <QuizCard
                key={index}
                title="Laptop"
                description="Some quick example text to build on the card title and make up the bulk of the card content"
                price={10}
                quantity={20}
              />
            </Col>
          ))} */}
        </Row>
      </Container>
    </div>

  )
}
