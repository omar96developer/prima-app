import React from 'react'

const img = 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11894.jpg';
const button = '8,00€'
const Product = () => {
  return (
    <article>
        
        <div className='card'>
            <img src={img} alt='amz'/>
            <h4>5€ Amazon</h4>
            <p className='prezzo'>2,00€</p>
            <p className='chi'>bamby000</p>           
            <p className='status'>RIAPRE PRESTO</p>
            <button className='compra'>{button}</button>
        </div>
        
    </article>
  )
}

export default Product