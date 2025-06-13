import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const SignupPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container fluid className="p-0">
        <Row
          className="shadow-lg mx-auto"
          style={{
            width: "95%",
            maxWidth: "1200px",
            borderRadius: "20px",
            overflow: "hidden",
            minHeight: "90vh",
            backgroundColor: "#fff",
          }}
        >
          {/* Left Section */}
         <Col
  md={5}
  className="d-none d-md-flex justify-content-center align-items-center position-relative"
  style={{
    padding: 0,
    overflow: "hidden",
  }}
>
  {/* Video Background */}
 <video
  src="/videos/mixkit-guitarist-playing-in-the-dark-on-a-pink-background-44165-full-hd.mp4"
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  }}
/>


</Col>


          {/* Right Section */}
          <Col
            xs={12}
            md={7}
            className="d-flex align-items-center"
            style={{
              padding: "40px",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ width: "100%" }}>
              <h4 className="mb-2 fw-bold">Create an Account</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>
                Create an account and explore your mind.
              </p>

              <Form className="mt-4">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone no:" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Select>
                        <option>Select</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>UK</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Account Type</Form.Label>
                      <Form.Select>
                        <option>Premium Account</option>
                        <option>Classic Account</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="**********" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="**********" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                  />
                </Form.Group>
                


                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    style={{
                      backgroundColor: "#1e90ff",
                      border: "none",
                      padding: "10px 30px",
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outline-primary"
                    style={{
                      padding: "10px 30px",
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
