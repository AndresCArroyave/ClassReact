import { useState } from "react";
import logo from "./img/logo192.png"

function App() {
// const [contenido, setContenido ] = useState("HOLA");
// const estilo1 = {backgroundColor : "green"};
// const estilo2 = {backgroundColor : "red"};
// const [fondos, setFondo ] = useState(estilo1);


// const texto = () => {
//   setContenido("OTRO MENSAJE")
// }

// const imagen = () => {
//   setContenido(<img src={logo} alt="imagen"/>)
// }

// const fondo = () => {
//     setFondo(estilo2)
// }


//   return (
//     <>
//     <button onClick={()=>{texto()}}>BOTON 1</button>
//     <button onClick={()=>{imagen()}}>BOTON 2</button>
//     <button onClick={()=>{fondo()}}>BOTON 3</button> 
//     <div style={fondos}>
//       {contenido}
//     </div>
//     </>
//   );

const [contenido, setContenido] = useState("STOP");
const estilo1 = {backgroundColor : "red"};
const estilo2 = {backgroundColor : "green"};
const estilo3 = {backgroundColor : "yellow"};
const [fondos, setFondo] = useState(estilo1);


const texto1 = () => {
    setContenido("STOP");
    setFondo(estilo1);
}


const texto2 = () => {
  setContenido("GO");
  setFondo(estilo2);
}

const texto3 = () => {
  setContenido("WARNING");
  setFondo(estilo3);
}

return (
    <>
     <button onClick={()=>{texto1()}}>RED</button>
     <button onClick={()=>{texto2()}}>GREEN</button>
     <button onClick={()=>{texto3()}}>YELLOW</button> 
     <div style={fondos} className="semaforo">
         {contenido}
     </div>
       </>
   );



}

export default App;
