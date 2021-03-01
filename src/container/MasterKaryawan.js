import React, { useState } from 'react'
import '../Style/karywan.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Modal,  Table, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import {  } from 'bootstrap';

export default function MasterKaryawan() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    return (
        <div className='container-karyawan'>
            <text style={{fontSize:'50px', fontWeight:'bold'}}>Master Karyawan</text>
        <div className='content'>
            <text>List Karyawan</text>
           
            <div className='table'>
                <Link to={'/add'}>
                <Button>Tambah</Button>
                </Link>
            <Table striped bordered hover variant="dark" style={{width: '100%'}}>
            <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Tanggal Lahir</th>
              <th>Jabatan</th>
              <th>NIP</th>
              <th>Jenis Kelamin</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {Array(10).fill().map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Aldy Anugrah</td>
                  <td>02-10-1997</td>
                  <td>Programmer</td>
                  <td>343412343928</td>
                  <td>
                    L
                  </td>
                  <td >
                    <Row className="justify-content-md-center">
                      <Button
                        variant="outline-warning"
                        // onClick={this.props.addEmployee}
                        >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button
                      style={{marginLeft: 5}}
                        variant="outline-danger"
                        data-toggle="modal" data-target="#exampleModal"
                        onClick={handleShow}
                        >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda akan menghapus data ini ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>

            </Table>
            </div>
        </div>
        </div>
    )
}
