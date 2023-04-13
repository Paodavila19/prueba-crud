import React from 'react';
import {Link} from "react-router-dom";


class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            id:"",
            email:"",
            role:"",
        }
    }
    state = {  }
cambioValor=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({state});

}

enviarDatos=(e)=>{
    e.preventDefault();
    console.log("formulario fue enviado");
    const{name,id,email,role}=this.state;
    console.log(name);
    console.log(id);
    console.log(email);
    console.log(role);
    var datosEnviar={name:name, id:id, email:email, role:role }
    const requestInit={
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body:   JSON.stringify(datosEnviar)
    }
    fetch("http://localhost:9000/users",requestInit) 
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>console.log(datosRespuesta))

    this.setState({name:"",
    id:"",
    email:"",
    role:"",
})
}
    render() { 

        const{name,id,email,role}=this.state
        return (

            <form onSubmit={this.enviarDatos}>
  <div className="col-md-6">
    <label htmlFor="" className="form-label">Nombre</label>
    <input type="text" name="name" onChange={this.cambioValor} value={name} className="form-control" id="nombre"/>
  </div>

  <div className="col-md-6">
    <label htmlFor="" className="form-label">ID</label>
    <input type="text" name="id" onChange={this.cambioValor} value={id} className="form-control" id="id"/>
  </div>

  <div className="col-6">
    <label htmlFor="" className="form-label">Email</label>
    <input type="text" name="email" onChange={this.cambioValor} value={email} className="form-control" id="email" placeholder="prueba@udea.edu.co"/>
  </div>
  
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Rol</label>
    <selectd name="role" onChange={this.cambioValor} value={role} id="inputState" className="form-select">
      <option selected>Admin...</option>
      <option>Usuario</option>2
    </selectd>
  </div>

  <div className="col-12">
    <div clclassNameass="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Notificar al correo
      </label>
    </div>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Guardar</button>
    <Link to={"/"} className="btn btn-cancel">cancelar</Link>
  </div>
</form>
         );
    }
}
 
export default Crear;