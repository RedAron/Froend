import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Historial from '../Pages/Historial';
import Plataforma from '../Pages/Plataforma';
import '../css/Login.css';
import { Link } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div className="escudo">
      <img src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/default.png"></img>
      </div>
      <div>

        
  <a class="navbar-brand text-center" href="#" >Universidad del <span>Magdalena</span></a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/Home" href="#">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/historial"href="#">Hisotiral</Link>
      </li>
    </ul>
  </div>
      
      
  
  
</nav>

    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Historial" component={Historial}/>
      <Route exact path="/Plataforma" component={Plataforma}/>
    </Switch>
   
        
        

        
        
        
        
    <footer className=" text-center text-lg-start foter">

<div class="text-center p-3">
  <h4>Información de contacto</h4>
  <ul className="info">
      <li>Línea Gratuita Nacional: 01 8000 180 504. PBX: (57 - 5) 4381000 - 4365000</li>
      <li>Dirección: Carrera 32 No 22 – 08 Santa Marta D.T.C.H. - Colombia. Código Postal No. 470004</li>
      <li>Correo electrónico: ciudadano@unimagdalena.edu.co</li>
      <li>La Universidad del Magdalena está sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.</li>
      <li>Desarrollado por el Centro de Investigación y Desarrollo de Software CIDS - Unimagdalena © 2018</li>
 </ul>
</div>

</footer>
    
    



   
    </BrowserRouter>
    
    


  );
}

export default Routes;
