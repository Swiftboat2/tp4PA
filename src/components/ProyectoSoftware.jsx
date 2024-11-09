const ProyectoSoftware = ({ proy }) => {
  const { proyecto, tipoDeTarea, asignado, prioridad, fecha, resumen, storyPoints } = proy;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{proyecto}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de Tarea: {''}
        <span className="font-normal normal-case">{tipoDeTarea}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Asignado: {''}
        <span className="font-normal normal-case">{asignado}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
        <span className="font-normal normal-case">{prioridad}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
        <span className="font-normal normal-case">{resumen}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
        <span className="font-normal normal-case">{storyPoints}</span>
      </p>
    </div>
  );
};

export default ProyectoSoftware;
