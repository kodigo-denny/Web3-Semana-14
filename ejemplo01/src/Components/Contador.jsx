import React, {useState, useEffect} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";


function Contador(){

    const[valor, setValor] = useState(0)
    const[campo, setCampo] = useState(10)

    function siempre(){
        console.log("Se ejecuta la primera vez")
    }

    useEffect(siempre, [])

    useEffect(() =>{
        console.log("Siempre se ejecuta")
    })

    useEffect(() =>{
        console.log("Cambio el valor")
    }, [valor])

    useEffect(() =>{
        console.log("Cambio el campo")
    }, [campo])

    return(
        <div>
            <Pantalla val={valor} />
            <Boton evento={() => setValor(valor-1)}>-</Boton>
            <Boton evento={() => setValor(0)}>Reset</Boton>
            <Boton evento={() => setValor(valor+1)}>+</Boton>
        </div>
    )
}

export default Contador