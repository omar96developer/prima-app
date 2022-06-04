import React from "react";
import Card from "./Card";
import products from "./products";



  


function App() {
  return (
    <div className="App">
      <h1>La nostra prima card</h1>
      <section className="container">
        {
          products.map(prodotto =>{
            return(
              <Card key={prodotto.id} {...prodotto}>
                <React.Fragment>RIAPRE PRESTO</React.Fragment>
              </Card>
            ) 
          })
        }
      
      </section>
    
    </div>
    
  );
}

export default App;
