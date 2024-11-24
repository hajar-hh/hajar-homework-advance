import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to={"/"}>
            <Image src="/apsignals.png" width={40} height={20} alt="APSignals logo" className="pe-2" />
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} APSignals, LTD</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link
              className="text-body-secondary"
              to={"https://github.com/APSignals"}
            >
              <i className="bi bi-github"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="text-body-secondary"
              to={"https://www.linkedin.com/company/apsignals/"}
            >
              <i className="bi bi-linkedin"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="text-body-secondary"
              to={"https://www.instagram.com/ap_signals?igsh=ZDk2Z2MzNzE5NzVi"}
            >
              <i className="bi bi-instagram"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
