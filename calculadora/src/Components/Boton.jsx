import React, {useState, useEffect} from "react";


function Boton(props){
    const[columna, setColumna] = useState(3)

    useEffect(()=>{
        if(props.col!=undefined)
            setColumna(props.col)
    }, [])

    return(
        <button onClick={props.evento} className={`btn btn-${props.estilo===undefined ? "secondary" : props.estilo} col-${columna}`}>{props.children}</button>
    )
}


export default Boton