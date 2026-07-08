import { useEffect, useState } from "react";
import { Botao } from "./ComponentesSimples";


function App() {
  const arrCores = ["#0ff", "#f0f", "#ff0", "#f00"];

  return (
    <>
      <Botao cores={arrCores}/>
      <Botao cores={[...arrCores, "#00f"]}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
      <Botao cores={arrCores}/>
    </>
  )
}


export default App
