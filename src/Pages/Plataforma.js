import React, {Component, useState,useEffect} from 'react';
import Cookies from 'universal-cookie';


const cookie = new Cookies();
class Plataforma extends Component{

    

    componentDidMount(){
        if(!cookie.get('token')){
            window.location.href = "./home";
        }
    }


   
    render(){
        return(
            <div class="container">
  <div class="row justify-content-md-center">
    
    <iframe width="600" height="650"
        src="https://app.powerbi.com/view?r=eyJrIjoiN2VhN2VjZjMtOTVlNi00Y2Q3LThmNTUtOGU0N2Y2YTM5YThlIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9"
        frameborder="0" allowFullScreen="true"></iframe>
    
    </div>
    </div>
            
            

        );
    }
}

export default Plataforma;