import React from 'react';


function Pantalla(props){

   return(
        <div>
            <input type="text" readOnly disabled value={props.valor} className='form-control pantalla' />
        </div>
   )
}



export default Pantalla