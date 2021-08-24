
import React, {Component} from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import '../css/Login.css';

const baseurl = "http://arc123.xyz:8000/login";
const cookies = new Cookies();


class Login extends Component {

    state = {
        form: {
            username: '',
            password: '',
        }

    }
    componentDidMount(){
        if(cookies.get('token')){
            window.location.href = "./home";
        }
    }


    headChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)

    }

    iniciarsesion = async () => {
       const data=  await axios.post(baseurl, {username: this.state.form.username, password: this.state.form.password})
            .then(response => {
                console.log(response.status)
                if(response.data=="contraseña invalida"){
                    alert("usuario invalido")
               }else if (response.data=="usuario invalido"){
                alert("usuario invalido")

               }else{
                    alert("bienvenido");

                    window.location.href = "./home";

                    cookies.set('token',response.data,{path:"/"});
   
                }
            
            })
            
            .catch(error => {
                console.log(error);
                console.log("hola");
            })

    }


    render() {
        
        
        
        
        
        return (
/*
        
            <div className="containerPrincial">

            <div className="containerSegundario">
            <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>usuario</label>
                <input type="text"
                            className="form-control"
                            name="username"
                            onChange={this.headChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"
                            className="form-control"
                            name="password"
                            onChange={this.headChange} />
            </div>

          <br></br>
         
            <button onClick={() => this.iniciarsesion()} className="btn btn-primary">Submit</button>
            
        </form>
        

        </div>
        </div>
             
        */
        <React.Fragment>
        
        
        <div className="containerPrincial">

                <div className="containerSegundario">
                    <div className="form-group">


                        <label>Usuario </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.headChange}
                        />
                        <br/>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.headChange}
                        />
                        <br/>
                        <button onClick={() => this.iniciarsesion()} className="btn btn-primary">Iniciar sesión</button>

                    </div>
                </div>
                

            </div>
            <br/>
            <br/>
            <br/>
        <br/>
        <br/>
            <br/>
            <br/>
        
            </React.Fragment>

          



            


        );

    }
}

export default Login;



