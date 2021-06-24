import React, {Component, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Login.css';
import '../css/Home.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import XLSX from 'xlsx';



const instance = axios.create({
    baseURL: 'http://arc123.xyz:8000/',
    timeout: 1000000,
    headers: {
        'content-type': 'multipart/form-data/',
        
    }
});



function Home() {

    //variables de estado

    //const [response,setResponse]= useState(null)
    const [loading,setLoading]= useState(false)
    const [hasError, setHasError]= useState(false)
    

    //control modal

    const [modal,setModal]= useState(null);

   






    const [archivos, setArchivos] = useState(null);

    const [box,setbox]=useState(null);

    const subirArchivo = e => {
        setArchivos(e);
        comprueba_extension(e);

    }
    const refreshPage = ()=>{
        window.location.reload();
     }

   
        const boxe = e => {
            setbox(e)
        }
         

    
    const insertarArchivo = async () => {
        let f = new FormData();
        setLoading(true)
        setModal(true)
        console.log(box)
        f.append("tipo",box)
        f.append("descripcion","primeras pruebas")

        for(let index=0; index<archivos.length;index++){
            f.append("new_file",archivos[0]);

        }
        await instance.post("archivo/",
            f,
        ).then(response => {
               setLoading(false)
              //alert("cargado correctamente");
              
              
              
        })
        .catch(error => {
            setHasError(true)
            setLoading(false)
           
            console.log(error)
        })
    }

    function getFileExtension2(filename) {
          return String(filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2));
      }

    function comprueba_extension(archivo){
        let extension_permitidas= new Array("xlsx","xls","cvs");
        let permitida;
        var  mierror="";
        if(!archivo){
            mierror="No has seleccionado ningun archivo";
        }else{

            let extensiones= new Array;

            for(var i=0;i<archivo.length;i++){
                extensiones.push(getFileExtension2(archivo[i].name)) 
                console.log(extensiones[i])
                console.log(extension_permitidas[i])
                }

                for(var w=0;w<extensiones.length;w++){
                    for (var j=0;j<extension_permitidas.length;j++){
                    if(extensiones[w]==extension_permitidas[j]){
                        permitida=1;
                        break;
                    }else{
                        permitida=0;
                        
                        }
                    }
             
                }
                if(permitida==0){
                    //alert("Comprueba la extension de los archivos a subir \n Solo pueden subir archivos con extensiones: "+ extension_permitidas.join());
    
                }else{
                    //alert("todo correcto")
    
                }

            }
        
            
        }     
    return (

        <React.Fragment>
        <div className="container">
            <div className="row">  
                <div className="card">
                    <div className="card-body">
                        <div className="align-items-end">
                        <div className="col-sm">
                            
                        <input class="form-check-input" onChange={(t) => boxe(t.target.value)}    type="radio"  value="Planeacion" name="flexRadioDefault"  id="Planeación"/>
                        <label class="form-check-label" for="flexRadioDefault1" >Planeación </label>
                        
                        </div>
                        <div className="col-sm">
                        <input class="form-check-input" type="radio" name="flexRadioDefault"  onChange={(s) => boxe(s.target.value)}  value="Admisiones" id="Admisiones"/>
                        <label class="form-check-label" for="flexRadioDefault1">Admisiones</label>
                        </div>
                        <div className="col-sm">
                        <input type="file" name="files" className="inputfile" multiple onChange={(e) => subirArchivo(e.target.files)}/>
                        
                        
                        
                    </div>
                        </div>
                    
  
            </div>
            
           
        
            
        </div>
        
        </div>
        <br/>
        <div className="align-self-center">
                        <button className="btn btn-primary"  onClick={() => insertarArchivo()}>Insertar Archivo</button>
                    </div>
   
        </div>
        <Modal isOpen={modal}>
        <ModalHeader>Información</ModalHeader>
        <ModalBody>
          {loading ? <div className="spinner-border text-primary" role="status"></div>: (hasError? <div>Ocurrio un error</div>
          :
          (<div className="alert alert-primary">Cargado Correctamente</div>))}
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={refreshPage}>Cerrar</Button>
        </ModalFooter>

 
  </Modal>
        

        </React.Fragment>

       



    );
}

export default Home;