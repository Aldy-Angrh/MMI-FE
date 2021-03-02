import React, { useState } from 'react'
import '../Style/karywan.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Modal,  Table, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ModalAdd from '../component/ModalAdd';

export default function MasterKaryawan(props)  {
  // console.log(props.location.state);
    const [show, setShow] = useState(false);
    var [data, setData] = useState([{
    
      "nama": "Aldy ANugrah",
                      "Ttl": "02/10/1997",
                      "Jabatan": " Developer",
                      "Nip": "123123123",
                      "JenisKelamin": "L"
  },
  { 
    "nama": "Mba Septi",
                      "Ttl": "22/10/1997",
                      "Jabatan": " Developer",
                      "Nip": "1231123123",
                      "JenisKelamin": "P"
  
  }]);
  // var empl = [{
    
//     "nama": "Aldy ANugrah",
//                     "Ttl": "02/10/1997",
//                     "Jabatan": " Developer", 
//                     "Nip": "123123123",
//                     "JenisKelamin": "L"
// },
// { 
//   "nama": "Mba Septi",
//                     "Ttl": "22/10/1997",
//                     "Jabatan": " Developer",
//                     "Nip": "1231123123",
//                     "JenisKelamin": "P"

// }]
    const [EditShow, setEditSHow] = useState(false);
    
    var c = props.location.params
    console.log(c);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = (indes) =>{
    console.log("ini index",indes);
     
    var hasil = data.filter((element, index)=> index != indes )
    setData(data = hasil)
      // var test = [];
      // console.log(test.push(c));
      // console.log(test);
      // var b = empl.push(c);
      // console.log("ini b", b);
      // console.log("Masuk");
  //     console.log("ini nama", n);
  //     // if (element.nama !== n) {
  //     //   employee = hasil
  //     //   setShow(false)    
  //     //   console.log("Berhasil");
  //     // } else {
  //     //   console.log("Gagal");
  //     // }  
    
  //   })

    
  }
  React.useEffect(()=>{
    if (c != null) {
      console.log("msk");
      data.push(c)
      console.log(data);
      setData(data => [...data, c])
    }
    // add()
  },[])
  // setData(...data, data.concat(props.location.state))
  // console.log(data);


  


    
    return (
        <div className='container-karyawan'>
            <text style={{fontSize:'50px', fontWeight:'bold'}}>Master Karyawan</text>
        <div className='content'>
            <text>List Karyawan</text>
           
            <div className='table'>
                <Link to='/add'>
                <Button>Tambah</Button>
                </Link>
                {/* <Button
                onClick={()=> handleRemove()}
                >tambah</Button> */}
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
          {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.Ttl}</td>
                  <td>{data.Jabatan}</td>
                  <td>{data.Nip}</td>
                  <td>
                    {data.JenisKelamin}
                  </td>
                  <td >
                    <Row className="justify-content-md-center">
                      <Button
                        variant="outline-warning"
                        onClick={()=> setEditSHow(true)}
                        >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <ModalAdd show={EditShow} onHide={()=> setEditSHow(false)} 
                      nama={data.nama}
                        ttl={data.Ttl}
                        jabatan={data.Jabatan}
                        nip={data.Nip}
                        JenisKelamin={data.JenisKelamin} />
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
          <Button variant="primary" onClick={() => {handleRemove(index)}}>
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
