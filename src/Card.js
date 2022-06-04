/* Con la destrutorizazzione posso passare direttamente i dati della props nella dichiarazione del componente:

const Product = ({img, prezzo, children etc.}) => {}

oppure 

const Product = (props) => {
  const {img, prezzo, children etc.} = props;
}

dopo semplicemente posso usare la singola key al posto di scrivere in chiave/valore es. prps.img

 */
import React from 'react'

const Product = ({img,costofinale,nome,prezzo,children}) => {
  
  function dbClick() {
    alert(nome);
  }
  
  return (
    <article>
        
        <div className='card'>
            <img src={img} alt='amz' onDoubleClick={dbClick}/>
            <h4>{nome}</h4>
            <p className='prezzo'>{prezzo}€</p>
            <p className='chi'>bamby000</p>           
            <p className='status'>{children}</p>
            <button onClick={() => console.log(costofinale)} className='compra'>{costofinale}€</button>
        </div>
        
    </article>
  )
}

export default Product