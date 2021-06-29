
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
            password: ''
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
        await axios.post(baseurl, {username: this.state.form.username, password: this.state.form.password})
            .then(response => {
                console.log(response)
                return response.data


            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];

                    
                    //Cookies.set('data', respuesta.data, {path: "/"})

                    //console.log(Cookies.get('data'))
                    alert("bienvenido");

                    window.location.href = "./home";


                } else {
                    alert("el usuario o la contraseña no coincide")
                }
            })
            .catch(error => {
                console.log(error.value);
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
                        <label>contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.headChange}
                        />
                        <br/>
                        <button onClick={() => this.iniciarsesion()} className="btn btn-primary">iniciar sesion</button>

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



