import { useState } from 'react';

export const Formulario = ({ proyectos, setProyectos }) => {
  const [proyecto, setProyecto] = useState('');
  const [tipoDeTarea, setTipoDeTarea] = useState('');
  const [asignado, setAsignado] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [fecha, setFecha] = useState('');
  const [resumen, setResumen] = useState('');
  const [storyPoints, setStoryPoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      proyecto,
      tipoDeTarea,
      asignado,
      prioridad,
      fecha,
      resumen,
      storyPoints,
    };

    setProyectos([...proyectos, nuevoProyecto]);

    setProyecto('');
    setTipoDeTarea('');
    setAsignado('');
    setPrioridad('');
    setFecha('');
    setResumen('');
    setStoryPoints('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-5 shadow-lg rounded-md">
      <div>
        <label htmlFor="proyecto">Nombre del Proyecto</label>
        <input
          type="text"
          id="proyecto"
          value={proyecto}
          onChange={(e) => setProyecto(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="tipoDeTarea">Tipo de Tarea</label>
        <input
          type="text"
          id="tipoDeTarea"
          value={tipoDeTarea}
          onChange={(e) => setTipoDeTarea(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="asignado">Asignado</label>
        <input
          type="text"
          id="asignado"
          value={asignado}
          onChange={(e) => setAsignado(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="prioridad">Prioridad</label>
        <input
          type="text"
          id="prioridad"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="resumen">Resumen</label>
        <textarea
          id="resumen"
          value={resumen}
          onChange={(e) => setResumen(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="storyPoints">Story Points</label>
        <input
          type="number"
          id="storyPoints"
          value={storyPoints}
          onChange={(e) => setStoryPoints(e.target.value)}
          required
          className="mt-2 w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-indigo-600 text-white mt-4 px-6 py-2 rounded">
        Agregar Proyecto
      </button>
    </form>
  );
};
