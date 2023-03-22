import React from "react";

function Boton({children, evento}){

    return(
        <button onClick={evento} className="btn btn-primary">{children}</button>
    )
}

export default Boton