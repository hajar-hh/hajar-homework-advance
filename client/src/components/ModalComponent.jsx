import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ showState, handleClose, title, body, negativeBtn, positiveBtn, handleSubmit }) {
  return (
    <>
      <Modal show={showState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {negativeBtn}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {positiveBtn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
