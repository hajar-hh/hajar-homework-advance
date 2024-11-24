import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import ModalComponent from "../components/ModalComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ManageCoursePage() {
  // the useLocation hook is from react-router-dom and is can get the pathname of the url or the state (that has been passed through the Link from the CoursePage component)
  const location = useLocation();
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams({});
  // const params = useParams();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: location?.state?.title || "",
      slug: location?.state?.slug || "",
      authorId: location?.state?.authorId || "",
      category: location?.state?.category || "",
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
  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
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
              <Form.Group as={Col} md="6">
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
              <Form.Group as={Col} md="6">
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
            <Button
              className="ms-3"
              type="reset"
              variant="danger"
              onClick={() => {
                reset();
                navigate("/courses");
              }}
            >
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
      <ModalComponent
        showState={show}
        handleClose={() => setShow(false)}
        title={"Edit Course"}
        body={"Are you sure about Editing this course?"}
        positiveBtn={"Yes"}
        negativeBtn={"No"}
        handleSubmit={() => {
          setShow(false);
          handleSubmit(onSubmit)();
        }}
      />
    </Container>
  );
}

export default ManageCoursePage;
