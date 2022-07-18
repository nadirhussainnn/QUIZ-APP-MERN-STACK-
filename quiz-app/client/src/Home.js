import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuizCard from "./Dashboards/QuizCard";

export default function Home() {
  return (
    <>
      <Container className="mt-4">
        <Row className="text-center mt-4">
          <Col>
            <h1>Top Scorers</h1>
          </Col>
        </Row>
        <Row>
          {new Array(10).fill().map((product, index) => (
            <Col md={{ span: 3 }} className="mt-3 mb-4">
              <QuizCard
                key={index}
                title="Laptop"
                description="Some quick example text to build on the card title and make up the bulk of the card content"
                price={10}
                quantity={20}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
