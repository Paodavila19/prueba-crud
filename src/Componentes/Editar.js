import React from 'react';

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        empleados:[]
        }
    }
    state = {  }

    componentDidMount(){
        console.log(this.props.match.params.id);
            var datosEnviar={name:name, id:id, email:email, role:role }
            const requestInit={
                method: 'PUT'
                headers: {'content-Type': 'application/json'},
                body:   JSON.stringify(datosEnviar)
            }
            fetch("http://localhost:9000/users/" + this.props.match.params.id) 
            .then(respuesta=>respuesta.text())
            .then((datosRespuesta)=>console.log(datosRespuesta))
            this.cargarDatos();
        }
    }
    render() { 
        return ( <div className="card">
            <div className="card-header">
                Editar Empleados
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }

 
export default Editar;