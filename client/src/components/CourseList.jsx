import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseList({ courseData }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courseData?.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={`/courses/${course.slug}`} state={course}>
                  {course.title}
                </Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>{course.slug}</td>
              <td className="d-flex justify-content-center">
                <Button variant="danger">DELETE</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CourseList;
