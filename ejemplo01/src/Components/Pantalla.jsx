import React from "react";


function Pantalla(props) {

    const{val} = props
    
    return (
        <div>
            <input value={val} readOnly className="form-control" />
        </div>
    )
}

export default Pantalla