import React, { useState } from 'react'
import { Alert,Col, Dropdown, Button,Modal, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Style/karywan.css'

export default function AddKaryawan() {
    const [jabatan, setJabatan] = useState("== Pilih Jabatan ==")
    const[nama, setNama]=useState("")
    const[ttl, setTtl]=useState("")
    const [nip,setNip]=useState("")
    const [jk, setJK]=useState("")
    const [k, setk] = useState(false)
    const [ok, setOk] = useState(false)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOke = () => {
    setShow(false)  
    setOk(true)
      
    }



    const onClickJabatan = (pos) =>{
        setJabatan(pos)
    }
    console.log(jk);

    const onSave = () =>{
        if (nama.length<=0 ||ttl.length <=0 || nip.length<=0 || jk.length <=0 ) {
            setk(true)
        }else {
        setShow(true)
        setk(false)

    }
}

    return (
        <div className='addContent'>
            <text style={{fontSize:'50px', fontWeight:'bold'}}>Master Karyawan</text>
            <div className='content'>
                <text style={{paddingLeft:"10px"}}>Add Data Karyawan</text>
            
            <div className="table-karyawan">
            <Alert show={ok} variant="warning">
    Data Berhasil Tersimpan
    </Alert>
                
                <Row >
                    <Col >
                    <text> nama </text>
                    </Col>
                    <input style={{width:'50%', marginRight:'60px'}}
                    onChange={(e)=>setNama(e.target.value)}
                    value={nama}
                    ></input>
                </Row>
                <Row>
                    <Col >
                    
                    <text>Tanggal Lahir</text>
                    </Col>
                    <input style={{width:'50%', marginRight:'60px'}}
                    onChange={(e)=>setTtl(e.target.value)}
                     value={ttl}
                    ></input>
                </Row>
                <Row>
                    <Col >
                      <text>Jabatan</text>
                    </Col>
                    <input style={{width:'50%'}} onChange={jabatan} type="text" id="exampleFormControlInput1" value={jabatan} />
                    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>onClickJabatan("BPS")} >BPS</Dropdown.Item>
    <Dropdown.Item onClick={()=>onClickJabatan("Tester")}>Tester</Dropdown.Item>
    <Dropdown.Item onClick={()=>onClickJabatan("Programmer")}>Programmer</Dropdown.Item>
    <Dropdown.Item onClick={()=>onClickJabatan("Helpdesk")}>Helpdesk</Dropdown.Item>
    <Dropdown.Item onClick={()=>onClickJabatan("System Analyst")}>System Analyst</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                </Row>
                <Row>
                    <Col >
                    <text>NIP</text>
                    </Col>
                    <input  style={{width:'50%', marginRight:'60px'}}
                     onChange={(e)=>setNip(e.target.value)}
                     value={nip}
                    ></input>
                </Row>
                <Row>
                    <Col >
                    <text>Jenis Kelamin</text>
                    </Col >
                    <div key={`inline-radio`} className="mb-3" style={{display:"flex", flexDirection:"row", width:'50%', justifyContent:'center'}}>
                    <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={jk} onClick={()=>setJK("L")} checked/>
  <label className="form-check-label" for="exampleRadios1" >
    L
  </label>
</div>
<div className="form-check" style={{marginLeft:'30%'}}>
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={jk} onClick={()=>setJK("P")}/>
  <label className="form-check-label" for="exampleRadios2">
    P
  </label>
</div>
      
    </div>
 
                </Row>
                <Alert show={k} variant="warning">
    Ada yang belum terisi
    </Alert>
                <div flexDirection={Row} style={{ justifyContent:'center', display:'flex'}}>
                <Link to={''}>
       
                <Button style={{marginRight:'10%'}} >Kembali</Button>
                </Link>
                <Button onClick={()=> onSave()}>Simpan</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda akan Menyimpan Data ini ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleOke}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            </div>
            </div>
        </div>
    )
}
