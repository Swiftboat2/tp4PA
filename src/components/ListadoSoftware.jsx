export const ListadoSoftware = ({ software }) => {
  return (
    <div className="w-full lg:w-3/5 p-5">
      <h2 className="font-black text-3xl text-center">Listado de Proyectos</h2>

      {software.length === 0 ? (
        <p className="text-center text-gray-500">No hay proyectos disponibles.</p>
      ) : (
        software.map((proy, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4 my-4">
            <p><strong>Nombre:</strong> {proy.proyecto}</p>
            <p><strong>Tipo de Tarea:</strong> {proy.tipoDeTarea}</p>
            <p><strong>Asignado:</strong> {proy.asignado}</p>
            <p><strong>Prioridad:</strong> {proy.prioridad}</p>
            <p><strong>Fecha:</strong> {proy.fecha}</p>
            <p><strong>Resumen:</strong> {proy.resumen}</p>
            <p><strong>Story Points:</strong> {proy.storyPoints}</p>
          </div>
        ))
      )}
    </div>
  );
};
