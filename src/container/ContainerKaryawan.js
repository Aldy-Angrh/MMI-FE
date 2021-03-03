import React, {useDebugValue, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddKaryawan from './AddKaryawan';
import MasterKaryawan from './MasterKaryawan';

export default function ContainerKaryawan() {
    const [id, setId]= useState('')

    var [data, setData] = useState([{
        "id":1,
        "nama": "Aldy ANugrah",
                        "Ttl": "02/10/1997",
                        "Jabatan": " Developer",
                        "Nip": "123123123",
                        "JenisKelamin": "L"
    },
    { 
        "id":2,
      "nama": "Mba Septi",
                        "Ttl": "22/10/1997",
                        "Jabatan": " Developer",
                        "Nip": "1231123123",
                        "JenisKelamin": "P"
    
    },
   ]);
    var [cnth, setCnth] = useState()
    React.useEffect(()=>{
        console.log("INI DATA",cnth);
        // data.push(cnth)
    })
    const handleSubmit =(karyawan) => {
        setData(data.concat(karyawan))
        console.log("Data Setlah menambah", data);
    }
    const handleDelete = (del) =>{
        console.log("MASUK SINI GA", del);
   var hasil = data.filter((element, index)=> index+1 !== id )
   console.log("INI INDEXNYA", id);
   console.log("hasil dari filter", hasil);     
   setData(hasil)
        console.log("data saat ini",data);
    }

    const handleUpdate = (val)=>{
        var newData = data.map((e) => {
            if(e.id == val.id){
                e = val
        }
                return e}
        )
    setData(newData)
        console.log("INI NEW DATA", newData);
        console.log("Di Container INI valuenya untuk UPDATE",val);
    }

    let selectedKaryawan = null;
    if(id){
        console.log("INI ID", id);
        selectedKaryawan = data.find((e)=> e.id)
        console.log("INI SELECTED", selectedKaryawan);
    }else{
        console.log("NGGAK ADA");
    }

    

    return (
        <div>
            <BrowserRouter>
            <Switch>
            <Route exact path='/'>
            <MasterKaryawan data={data} setId={setId} handleDelete={handleDelete} karyawan={selectedKaryawan} handleUpdate={handleUpdate}></MasterKaryawan>
            </Route>
                <Route exact path="/add">
            <AddKaryawan  data={data} handleSubmit={handleSubmit} karyawan={selectedKaryawan}></AddKaryawan>
            </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
