import React from "react";
/* import Componente1 from "./Componente1"; */
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>La nostra prima card</h1>
      <div className="container">
      <Product />
      <Product />
      <Product />
      <Product />

      </div>
    {/*   <Componente1 /> */}
    </div>
    
  );
}

export default App;
