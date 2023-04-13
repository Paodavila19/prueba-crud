import React from 'react';

import Listar from './Componentes/Listar.js';
import Crear from './Componentes/Crear.js';
import Editar from './Componentes/Editar.js';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import { Link} from "react-router-dom";

const App =()=>{
  return(
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            
              <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
          </div>
      </nav>
    <div className='Container'>
      <br></br>
        <Routes>
          <Route exact path='/' element={<Listar/>}> </Route>
          <Route path='/crear' element={<Crear/>}> </Route>
          <Route path='/editar' element={<Editar/>}> </Route>
        </Routes>
    </div>
    </Router>
  );
}
export default App;