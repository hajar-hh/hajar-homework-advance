import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const helperText = {
    name: {
      required: "Name is required",
      minLength: "your input should more than 2 characters",
      maxLength: "your input should less than 31 characters",
    },

    email: {
      required: "Email is Required",
      pattern: "Invalid Email Address",
    },
    password: {
      required: "password is Required",
      pattern: "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
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
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            {...register("name", {
              required: true,
              maxLength: 30,
              minLength: 3,
            })}
          />
          {errors.name && <Form.Text className="text-danger">{helperText.name[errors.name.type]}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email Address"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && <Form.Text className="text-danger">{helperText.email[errors.email.type]}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            })}
          />
          {errors.password && <Form.Text className="text-danger">{helperText.password[errors.password.type]}</Form.Text>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sing Up
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
