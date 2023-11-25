import React from 'react'

export default function CartaPresentacion() {
    const escuela= "Inove - Escuela de Código"
    const cursos=["Desarrollador Web", "Javascript", "React"]
  return (
    <div>
    <h2 className="App-link">- Carta de Presentación -</h2>
    <h3>¡Buenas! Soy Adriana Quintela</h3>
    <p>Empecé a programar este año con {escuela}. Realicé los cursos de "{cursos[0]}" y "{cursos[1]}", y en este momento me encuentro cursando "{cursos[2]}".</p>
    <p>Me gustaría continuar mi formación aprendiendo las tecnologías que me permitan trabajar y especializarme como desarrolladora Frontend.</p>
    </div>
  )
}
