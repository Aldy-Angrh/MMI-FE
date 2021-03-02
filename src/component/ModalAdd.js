import { Button, Col, Container, Modal, Row } from "react-bootstrap";

export default function ModalAdd(props) {
    return (
      <Modal  {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <text>Nama</text>
              </Col>
              <Col xs={6} md={4}>
                <input
                placeholder={props.nama}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Tanggal Lahir</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.ttl}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jabatan</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.jabatan}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>NIP</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.nip}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jenis Kelamin</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.JenisKelamin}></input>
              </Col>
            </Row>
  
            
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>

          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  