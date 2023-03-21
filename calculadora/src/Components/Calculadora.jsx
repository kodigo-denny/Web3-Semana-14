import React, {useState} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

function Calculadora(props){
    const[resultado, setResultado] = useState("0")
    const[op, setOp] = useState("")
    const[num1, setNum1] = useState("")

    function igual(){
        if(op != ""){
            let num = Number(num1)
            let num2 = Number(resultado)
            let res = 0

            if(op === "+")
                res = num + num2
            else if(op === "-")
                res = num - num2
            else if(op === "*")
                res = num * num2
            else if(op === "/"){
                if(num2 == 0)
                    alert("No se puede operar")
                else
                    res = num / num2
            }
                
            setResultado(res.toString())
        }
    }

    function operacion(val){
        setOp(val)
        setNum1(resultado)
        setResultado("0")
    }

    function punto(){
        if(resultado.indexOf(".") === -1)
            setResultado(resultado+".")
    }

    function backspace(){
        let t = resultado.length
        let sub = resultado.substring(0,t-1)

        setResultado(sub==="" ? "0" : sub)
    }

    function limpiar(){
        setResultado("0")
        setOp("")
    }

    function digitar(val){
        if(resultado === "0")
            setResultado(val)
        else
            setResultado(resultado + val)
    }

    return(
        <div>
        <Pantalla valor={resultado} />
        <div className="row">
            <Boton evento={limpiar} col={9} estilo="danger">CE</Boton>
            <Boton evento={backspace} estilo="warning">{"<"}</Boton>
        </div>

        <div className="row">
            <Boton evento={() =>  digitar("7")}>7</Boton>
            <Boton evento={() =>  digitar("8")}>8</Boton>
            <Boton evento={() =>  digitar("9")}>9</Boton>
            <Boton evento={() => operacion("/")} estilo="success">/</Boton>
        </div>

        <div className="row">
            <Boton evento={() => digitar("4")}>4</Boton>
            <Boton evento={() => digitar("5")}>5</Boton>
            <Boton evento={() => digitar("6")}>6</Boton>
            <Boton evento={() => operacion("*")} estilo="success">*</Boton>
        </div>
        
        <div className="row">
            <Boton evento={() => digitar("1")}>1</Boton>
            <Boton evento={() => digitar("2")}>2</Boton>
            <Boton evento={() => digitar("3")}>3</Boton>
            <Boton evento={() => operacion("-")} estilo="success">-</Boton>
        </div>

        <div className="row">
            <Boton evento={() => digitar("0")}>0</Boton>
            <Boton evento={punto} estilo="success">.</Boton>
            <Boton evento={igual} estilo="primary">=</Boton>
            <Boton evento={() => operacion("+")} estilo="success">+</Boton>
        </div>
        
    </div>
    )
}


export default Calculadora