import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

function About() {
  const [isAgree, setIsAgree] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const helperText = {
    firstName: {
      required: "Please enter first name",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 2 characters",
    },
    lastName: {
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 2 characters",
    },
    email: {
      required: "Please enter Email",
      pattern: "Please provide a valid email address.",
    },
    message: {
      required: "Please enter message",
      maxLength: "your input should less than 121 characters",
      minLength: "your input should more than 9 characters",
    },
  };

  function submitHandler(values) {
    console.log(values);
    reset()
  }

  console.log(errors);

  return (
    <>
      <Container className="my-5">
        <Row className="mb-5 mx-2">
          <Col>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores illum aliquam obcaecati, itaque facilis unde voluptate ratione rem, ut
              dignissimos accusamus dolor autem veniam assumenda cum! Sequi eveniet laborum eligendi quibusdam ipsam, voluptas nulla, accusantium enim tempora,
              eos inventore velit libero? Accusantium at, alias a vitae asperiores aliquid saepe quis dolorum sapiente ratione veniam fuga doloribus?
              Praesentium earum doloribus assumenda rerum blanditiis voluptatem vero qui reiciendis ut impedit soluta alias at enim corrupti quidem, veritatis
              animi. Harum vel excepturi quos et dicta commodi qui blanditiis labore maiores ad, quam laborum saepe voluptatibus dolore totam sit ullam id fugit
              consequatur?
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label htmlFor="firstName">First name</Form.Label>
                  <Form.Control
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: true,
                      minLength: 3,
                      maxLength: 30,
                    })}
                  />
                  {errors.firstName && <Form.Text className="text-danger">{helperText.firstName[errors.firstName.type]}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label htmlFor="lastName">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: false,
                      minLength: 3,
                      maxLength: 30,
                    })}
                  />
                  {errors.lastName && <Form.Text className="text-danger">{helperText.lastName[errors.lastName.type]}</Form.Text>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Email address"
                    {...register("email", {
                      required: true,
                      pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    })}
                  />
                  {errors.email && <Form.Text className="text-danger">{helperText.email[errors.email.type]}</Form.Text>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    placeholder="Enter your message"
                    style={{ height: "100px" }}
                    {...register("message", {
                      required: true,
                      minLength: 10,
                      maxLength: 120,
                    })}
                  />
                  {errors.message && <Form.Text className="text-danger">{helperText.message[errors.message.type]}</Form.Text>}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check value={isAgree} onChange={() => setIsAgree((prevState) => !prevState)} label="Agree to send this message" id="Agreement" />
              </Form.Group>
              <Button type="submit" disabled={!isAgree}>
                Submit Message
              </Button>
            </Form>
          </Col>
          <Col>
            <Image alt="contact us" src="/Contact-us.svg" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
