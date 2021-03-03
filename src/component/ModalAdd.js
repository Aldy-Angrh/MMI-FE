import { useState } from "react";
import { Button, Col, Container, Dropdown, Modal, Row } from "react-bootstrap";

export default function ModalAdd(props) {
  const {handleUpdate} = props
    const [jabatan, setJabatan] = useState("")
    const[nama, setNama]=useState("")
    const[ttl, setTtl]=useState("")
    const [nip,setNip]=useState("")
    const [jk, setJK]=useState("")

    const onClickJabatan = (pos) => {
      setJabatan(pos);
    };
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
                onChange={(e)=>setNama(e.target.value)}
                value={props.nama}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Tanggal Lahir</text>
              </Col>
              <Col xs={6} md={4}>
                <input 
                onChange={(e)=>setTtl(e.target.value)}
                value={ttl}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jabatan</text>
              </Col>
              <Col xs={5} md={4}>
                <input 
                onChange={(e)=>setJabatan(e.target.value)}
                value={jabatan}></input>
                <Dropdown style={{marginLeft:'0px'}}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onClickJabatan("BPS")}>
                  BPS
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClickJabatan("Tester")}>
                  Tester
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClickJabatan("Programmer")}>
                  Programmer
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClickJabatan("Helpdesk")}>
                  Helpdesk
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClickJabatan("System Analyst")}>
                  System Analyst
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>NIP</text>
              </Col>
              <Col xs={6} md={4}>
                <input
                 onChange={(e)=>setNip(e.target.value)}
                 value={nip}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <text>Jenis Kelamin</text>
              </Col>
              <Col xs={6} md={4}>
                <input
                 onChange={(e)=>setJK(e.target.value)}
                 value={jk}
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
  