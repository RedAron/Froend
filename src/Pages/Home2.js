

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react';

import { Link } from 'react-router-dom';






function Home2() {
    
    return(
        <div className="container">
        <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Administrador</h5>
        <a  href="/Login" className="btn-lg btn-primary">Entrar</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Plataforma</h5>
        <a href="Plataforma" className="btn-lg btn-primary">Entrar</a>
      </div>
    </div>
  </div>
</div>
</div>

        
    );


};

export default Home2;