import React, {Component, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://arc123.xyz:8000/archivo/";

class Historial extends Component{



    state={
        data:[],
        hasError:false,
        loading:false,
    }

    peticionGet=()=>{
        this.setState({loading: true})

        axios.get(url).then(response=>{
            this.setState({loading: false})
            console.log(response.data)
            this.setState({data: response.data});
        })
        .catch(err=>{
            console.log(err)
            this.setState({loading: false})
            this.setState({ hasError: true })
        })

        
    }

    componentDidMount(){
        this.peticionGet();

    }

    
  
    render(){

    




    

   return( 

  <div className="container">
      <div className="row">

   <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Tipo</th>
      <th scope="col">Archivo</th>
      <th scope="col">fecha creacion</th>
      <th scope="col">estado</th>
    </tr>
  </thead>
  <tbody>
    
    {
    this.state.loading ? <div>loading...</div>:
    this.state.hasError ? <div>Error occured fetching data</div>:

    
    this.state.data.map(archivo=>{
        return(
            <tr>
            <td>{archivo.id}</td>
            <td>{archivo.descripcion}</td>
            <td>{archivo.tipo}</td>
            <td>{archivo.new_file}</td>
            <td>{archivo.fecha_creacion}</td>
            <td>{archivo.estado}</td>

            </tr>

           
        )
    })}
  </tbody>
</table>
</div>
</div>


      
       
    
    
    
    );

    }


}

export default Historial;