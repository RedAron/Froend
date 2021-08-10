import React, {Component, useState} from 'react';
import axios from "axios";
import {useEffect} from 'react';
import Cookies from 'universal-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import DataTable from 'react-data-table-component';

const cookie = new Cookies();

let token= "Token "+ cookie.get("token")




const instance = axios.create({
    baseURL: 'http://arc123.xyz:8000/',
    timeout: 1000000,
    headers: {
        'content-type': 'multipart/form-data/',
        'Authorization': `${token}`,

    }
});




function Hisotiral(){

    
    const [usuarios, setUsuarios]= useState([]);
    const [tablaUsuarios, setTablaUsuarios]= useState([]);
    const [busqueda, setBusqueda]= useState("");


    //variables de error y loading
    
    const [loading,setLoading]= useState(false)
    const [hasError, setHasError]= useState(false)

    useEffect(()=>{
      if(!cookie.get('token')){
        window.location.href = "./";
        console.log("hola")
    }

    });
    


    const peticionGet=async()=>{
      setLoading(true);
        

        await instance.get("archivo/").then(response=>{
          setLoading(false);
            setUsuarios(response.data);
    setTablaUsuarios(response.data);
        })
        .catch(err=>{
            console.log(err);
            setHasError(true);
            setLoading(false);

        })

        
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

      const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
          if( elemento.tipo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.year.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setUsuarios(resultadosBusqueda);
      }
      useEffect(()=>{
        peticionGet();
        },[])

    
  

   return( 

  <div className="container">
      <div className="row">
      
      <input class="form-control mr-sm-2" type="search" placeholder="Search"  value={busqueda}  onChange={handleChange} aria-label="Search"/>
      
 
    


   <table className="table table-striped">
  
  
  
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">año</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Tipo</th>
      <th scope="col">fecha creacion</th>
      <th scope="col">estado</th>
      <th scope="col">Archivo</th>
      
    </tr>
  </thead>
  <tbody>
    
    {loading ? <div className="spinner-border text-primary" role="status"></div>: hasError? <div>Ocurrio un error</div>:
   

    
    usuarios && usuarios.map(usuarios=>{
        return(
            <tr>
            <td>{usuarios.id}</td>
            <td>{usuarios.year}</td>
            <td>{usuarios.descripcion}</td>
            <td>{usuarios.tipo}</td>
            <td>{usuarios.fecha_creacion}</td>
            <td>{usuarios.estado}</td>
            <td><a href={usuarios.new_file}  class="btn btn-primary" >Descargar</a></td>

            </tr>

           
        )
    })}

  </tbody>
</table>

</div>
</div>




      
       
    
    
    
    );

    


}

export default Hisotiral;