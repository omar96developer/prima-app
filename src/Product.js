import React from 'react'

const Product = (props) => {
  console.log(props);

  

  return (
    <article>
        
        <div className='card'>
            <img src={props.img} alt='amz'/>
            <h4>{props.nome}</h4>
            <p className='prezzo'>{props.prezzo}€</p>
            <p className='chi'>bamby000</p>           
            <p className='status'>RIAPRE PRESTO</p>
            <button className='compra'>{props.costofinale}€</button>
        </div>
        
    </article>
  )
}

export default Product