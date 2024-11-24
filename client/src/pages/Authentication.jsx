import { Col, Container, Image, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <Container style={{ minHeight: "70vh" }} className="my-5">
      <Row className="my-5">
        <Col className="d-flex justify-content-center gap-5">
          <Image src="/apsignals.png" alt="APSignals" width={100} height={60} />
          <h1>Welcome to APSignals</h1>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;
