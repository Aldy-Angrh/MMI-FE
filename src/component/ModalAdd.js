import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

export default function ModalAdd(props) {
  const {handleUpdate} = props
    const [jabatan, setJabatan] = useState("== Pilih Jabatan ==")
    const[nama, setNama]=useState("")
    const[ttl, setTtl]=useState("")
    const [nip,setNip]=useState("")
    const [jk, setJK]=useState("")

    const update = () => {
      // setId(props.id)
      console.log("MASUK DI UPDATE");
      var hasil ={  
        id:props.id,
        nama:nama,
         Ttl: ttl,
         Jabatan: jabatan,
         Nip : nip,
         JenisKelamin: jk            
}
  handleUpdate(hasil)
  props.onHide()
    }

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
                onChange={(e)=>setNama(e.target.value)}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Tanggal Lahir</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.ttl}
                onChange={(e)=>setTtl(e.target.value)}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jabatan</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.jabatan}
                onChange={(e)=>setJabatan(e.target.value)}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>NIP</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.nip}
                 onChange={(e)=>setNip(e.target.value)}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jenis Kelamin</text>
              </Col>
              <Col xs={6} md={4}>
                <input placeholder={props.JenisKelamin}
                 onChange={(e)=>setJK(e.target.value)}
                ></input>
              </Col>
            </Row>
  
            
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {update()}}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  