import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoSoftware } from './components/ListadoSoftware';
import './App.css';

function App() {
  const [proyectos, setProyectos] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 flex">
        <Formulario
          proyectos={proyectos}
          setProyectos={setProyectos}
        />
        
        <ListadoSoftware
          software={proyectos}
        />
      </div>
    </div>
  );
}

export default App;
