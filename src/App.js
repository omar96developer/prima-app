import React from "react";
import Product from "./Product";

const primaCard = {
  nome: '5€ Amazon',
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11894.jpg',
  prezzo: 2.00,
  costofinale: 8
}

const secondaCard = {
  nome: '50€ Amazon',
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11902.jpg',
  prezzo: 0.10,
  costofinale: 20
}

function App() {
  return (
    <div className="App">
      <h1>La nostra prima card</h1>
      <div className="container">
      <Product 
      nome={primaCard.nome}
      img={primaCard.img}
      prezzo={primaCard.prezzo}
      costofinale={primaCard.costofinale}
      />
      <Product 
      nome={secondaCard.nome}
      img={secondaCard.img}
      prezzo={secondaCard.prezzo}
      costofinale={secondaCard.costofinale}
      />
      </div>
    
    </div>
    
  );
}

export default App;
