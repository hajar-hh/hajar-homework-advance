import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const helperText = {
    email: {
      required: "Email is Required",
      pattern: "Invalid Email Address",
    },
    password: {
      required: "password is Required",
      pattern: "Minimum eight characters",
    },
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="For example 'admin@admin.com'"
                {...register("email", {
                  required: true,
                  pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {helperText.email[errors.email.type]}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="For example '1234@1234'"
                {...register("password", {
                  required: true,
                  pattern: /^.{8,}$/,
                })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {helperText.password[errors.password.type]}
                </Form.Text>
              )}
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
