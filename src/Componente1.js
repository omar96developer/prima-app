import React from 'react'

const Componente1 = () => {
  return (
    <section className='titolino'>
        <h2>Sotto titolo</h2>
        <Saluto />
        <Complimento />
        
    </section>
  )
}
const Saluto = () => {
  return (
    <h3>Buongiorno Omar</h3>
  )
}

const Complimento = () => {
  return (
    <p>Benvenuto</p>
  )
}

export default Componente1