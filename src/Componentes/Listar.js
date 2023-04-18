import React from 'react';
import { Link} from "react-router-dom";



class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state={datosCargados:false,
        empleados:[]
        }
    }
    
    borrarDatos =(id)=>{
        const requestInit={
            method: 'DELETE'
        }
        fetch("http://localhost:9000/users/" + id,requestInit) 
        .then(respuesta=>respuesta.text())
        .then((datosRespuesta)=>console.log(datosRespuesta))
        this.cargarDatos();
    }

    

    cargarDatos(){
        fetch("http://localhost:9000/users") 
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{console.log(datosRespuesta);
                this.setState({datosCargados:true, empleados:datosRespuesta})})
        .catch(console.log)
    }
    componentDidMount(){
        this.cargarDatos();
    }

    
    
    render() { 
        const{datosCargados, empleados}=this.state
        if(!datosCargados){return(<div>Cargando...</div>);}
        else{
        return ( 
        <div class="card">
            <div className="card-header">
            <Link  className="btn btn-success" to={"/crear"}>Agregar usuario</Link>
            </div>
            <div className="card-body">
                <h4> Lista de usuarios</h4>
 <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>

            </tr>
        </thead>
        <tbody>
            {empleados.map(
                (empleado)=>
            <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.name}</td>
                <td>{empleado.email}</td>
                <td>{empleado.role}</td>

                <td>
                    <div className="btn-group" role="group" aria-label="">
                        <Link  className="btn btn-warning" to={"/editar"+empleado.id}>Editar</Link>
                        <button onClick={()=> this.borrarDatos(empleado.id)} type="button" className="btn btn-danger">Borrar</button>
                    </div>
                </td>
            </tr>)}
            
            
        </tbody>
    </table>

            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
        
       );
        }
    }
}
export default Listar;