import { useNavigate } from "react-router-dom";
import CourseList from "../components/CourseList";
import { Container, Row, Button } from "react-bootstrap";
function Courses() {
  const courseData = [
    {
      id: 1,
      title: "APS class 1 html course",
      slug: "html",
      authorId: 1,
      category: "JavaScript",
    },
    {
      id: 2,
      title: "APS class 1 css course",
      slug: "css",
      authorId: 2341,
      category: "JavaScript",
    },
    {
      id: 3,
      title: "APS class 1 bootstrap course",
      slug: "bootstrap",
      authorId: 23441,
      category: "JavaScript",
    },
    {
      id: 4,
      title: "APS class 1 vanilla js module 1 course",
      slug: "APS-1-js-1",
      authorId: 234241,
      category: "JavaScript",
    },
    {
      id: 5,
      title: "APS class 1 vanilla js module 2 course",
      slug: "APS-1-js-2",
      authorId: 1234234,
      category: "JavaScript",
    },
    {
      id: 6,
      title: "APS class 1 vanilla js module 3 course",
      slug: "APS-1-js-3",
      authorId: 1132123,
      category: "JavaScript",
    },
    {
      id: 7,
      title: "APS class 1 Node js course",
      slug: "node-js",
      authorId: 136536,
      category: "Software Practices",
    },
    {
      id: 8,
      title: "APS class 1 express js course",
      slug: "express-js",
      authorId: 5671,
      category: "Software Architecture",
    },
    {
      id: 9,
      title: "APS class 1 Mongo DB course",
      slug: "mongo-db",
      authorId: 2345231,
      category: "Career",
    },
    {
      id: 10,
      title: "APS class 1 Mongoose course",
      slug: "mongoose",
      authorId: 1234234,
      category: "HTML5",
    },
  ];

  const navigate = useNavigate();

  return (
    <Container className="my-3">
      <Row sm={6} className="m-3">
        <Button onClick={() => navigate("/create-course")}>create course</Button>
      </Row>
      <Row>
        <CourseList courseData={courseData} />
      </Row>
    </Container>
  );
}

export default Courses;
