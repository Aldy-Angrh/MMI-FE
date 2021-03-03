import React, { useState } from "react";
import "../Style/karywan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Table, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalAdd from "../component/ModalAdd";

export default function MasterKaryawan(props) {
  const { data, setId, handleDelete } = props;
  const [show, setShow] = useState(false);
 
  const [EditShow, setEditSHow] = useState(false);
  const [selectedIdForDelete, setSelectedIDForDelete] = useState('') 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = (id) => {
    setId(id);
    handleDelete(id);
    setShow(false);
  };
  const handleUpdate = (val) => {
    props.handleUpdate(val);
  };

  return (
    <div className="container-karyawan">
      <text style={{ fontSize: "50px", fontWeight: "bold" }}>
        Master Karyawan
      </text>
      <div className="content">
        <text>List Karyawan</text>

        <div className="table">
          <Link to="/add">
            <Button>Tambah</Button>
          </Link>
          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ width: "100%" }}
          >
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
              {data.map((empl, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{empl.nama}</td>
                    <td>{empl.Ttl}</td>
                    <td>{empl.Jabatan}</td>
                    <td>{empl.Nip}</td>
                    <td>{empl.JenisKelamin}</td>
                    <td>
                      <Row className="justify-content-md-center">
                        <Button
                          variant="outline-warning"
                          onClick={() => {
                            setSelectedIDForDelete(empl.id)
                            setEditSHow(true)}}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <ModalAdd
                          show={EditShow}
                          onHide={() => setEditSHow(false)}
                          id={selectedIdForDelete}
                          nama={empl.nama}
                          ttl={empl.Ttl}
                          jabatan={empl.Jabatan}
                          nip={empl.Nip}
                          JenisKelamin={empl.JenisKelamin}
                          handleUpdate={handleUpdate}
                        />
                        <Button
                          style={{ marginLeft: 5 }}
                          variant="outline-danger"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={()=>{
                            setSelectedIDForDelete(empl.id);
                            handleShow();
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Konfirmasi</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Apakah Anda akan menghapus data id {selectedIdForDelete} ini ?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              No
                            </Button>
                            <Link key={empl.id} to={"/"}>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  handleRemove(selectedIdForDelete);
                                }}
                              >
                                Yes
                              </Button>
                            </Link>
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
  );
}
