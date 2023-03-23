import React, {useState} from 'react'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const AutoresForm = () => {

    const[nombre, setNombre] = useState("")
    const[apellido, setApellido] = useState("")
    const[pais, setPais] = useState("")

    const navigate = useNavigate()

    function enviar(e){
        let form = document.querySelector("#formulario")

        e.preventDefault()
        e.stopPropagation()

        if(!form.checkValidity()){

            form.classList.add('was-validated')
        }
        else{
            guardar()
        }
        
    }

    async function guardar(){
        try{
            const autor =
            {
                nombre: nombre,
                apellido: apellido,
                paisOrigen: pais
            }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/autores", autor)
            let datos = res.data

            alert(datos.message)

            if(datos.status === 1)
                navigate("/autores")

        }
        catch(error){
            alert(error)
        }
    }

  return (
    <div>
        <Menu />
        <form id="formulario" className='needs-validation' noValidate>
            <div className='form-group mb-3'>
                <label className='form-label'>Nombre:</label>
                <input required type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" placeholder="Ingrese un nombre" />
                <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Apellido:</label>
                <input required type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control" placeholder="Ingrese un apellido" />
                <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Pais:</label>
                <input required type="text" value={pais} onChange={(e) => setPais(e.target.value)} className="form-control" placeholder="Ingrese un pais" />
                <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
            </div>
            <div className='form-group mb-3'>
                <input onClick={(e) => enviar(e)} type="submit" className='btn btn-primary' value="Guardar" />
                <button onClick={() => navigate("/autores")} className='btn btn-warning'>Cancelar</button>
            </div>
        </form>
        
    </div>
  )
}

export default AutoresForm