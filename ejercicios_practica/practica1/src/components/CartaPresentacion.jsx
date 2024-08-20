export default function CartaPresentacion() {

    const nombre = "Adriana";
    const cursosRealizados = ["Desarrollador Web","Javascript"];
    const aprendizajeenProceso = ["React", "Php", "CodeIgniter","SQL"];

  return (
    <div>
    <h2>Carta de Presentación</h2>
    <p>Mi nombre es {nombre} y realicé los siguientes cursos en Inove:</p>
    <p>
      <ul>
      <li>{cursosRealizados[0]}</li>
      <li>{cursosRealizados[1]}</li>
    </ul>
    </p>
    <p>En el momento estoy realizando el curso de {aprendizajeenProceso[0]} porque me gustaría terminar la especialización en Frontend.</p>
    
    </div>
  )
}
