import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ModalComponent from "../components/ModalComponent";

function CreateCourse() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      authorId: "",
      category: "",
    },
  });

  const helperText = {
    title: {
      required: "Please enter course title",
      pattern: "Invalid Title",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    slug: {
      required: "Please enter slug",
      pattern: "Invalid Slug",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    authorId: {
      required: "Please provide a valid author ID.",
      pattern: "Invalid author ID",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    category: {
      required: "Please provide a valid category.",
      pattern: "Invalid category",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
  };

  function submitHandler(values) {
    console.log(values);
    reset()
  }

  return (
    <Container style={{ minHeight: "70vh" }} className="my-5">
      <Row>
        <Col>
          <Form className="m-5">
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Course Title:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example 'OOP'"
                  {...register("title", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                />
                {errors.title && <Form.Text className="text-danger">{helperText.title[errors.title.type]}</Form.Text>}
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Slug:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example 'JavaScript'"
                  {...register("slug", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                />
                {errors.slug && <Form.Text className="text-danger">{helperText.slug[errors.slug.type]}</Form.Text>}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Author ID:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example 'APS1080'"
                  {...register("authorId", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                />
                {errors.authorId && <Form.Text className="text-danger">{helperText.authorId[errors.authorId.type]}</Form.Text>}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example 'Basic To Intermediate Bootcamp'"
                  {...register("category", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                />
                {errors.category && <Form.Text className="text-danger">{helperText.category[errors.category.type]}</Form.Text>}
              </Form.Group>
            </Row>

            <Button type="button" onClick={() => setShow(true)}>
              Create Course
            </Button>
          </Form>
        </Col>
      </Row>
      <ModalComponent
        showState={show}
        handleClose={() => setShow(false)}
        title={"Create New Course"}
        body={"Are you sure about creating this new course?"}
        positiveBtn={"Yes"}
        negativeBtn={"No"}
        handleSubmit={() => {
          setShow(false);
          handleSubmit(submitHandler)();
        }}
      />
    </Container>
  );
}

export default CreateCourse;
