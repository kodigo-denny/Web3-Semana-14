import React, {useState, useEffect} from "react";
import axios from "axios"
import Boton from "./Boton"

function Pokemon2(props){

    const[id, setId] = useState(1)
    const[imagen, setImagen] = useState("")
    const[nombre, setNombre] = useState("")
    const[front, setFront] = useState("")
    const[back, setBack] = useState("")

    useEffect(() =>{
        async function cargar(){
            if(id>=1 && id<=1008){
                setImagen("")
                setNombre("")
                try{
                    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    
                    let objeto = await res.json()
                    
                    console.log(objeto)
                    setImagen(objeto.sprites.front_default)
                    setFront(objeto.sprites.front_default)
                    setBack(objeto.sprites.back_default)
                    setNombre(objeto.name)
                }
                catch(error){
                    alert(error)
                }
            }
            else{
                setId(1008)
            }
        }cargar()
    }, [id])
    

    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
                {imagen === "" ?
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <img src={imagen} className="card-img-top" alt="..." />
                }
                
                <div className="card-body">
                    <Boton evento={() => setImagen(imagen==front ? back : front)}>{ imagen==front ? "Cambiar a back" : "Cambiar a front" }</Boton>
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"><b>ID:</b> <input type="number" value={id} onChange={(e) => setId(e.target.value)} /></p>
                    {
                        id != 1 ?
                        <Boton evento={() => setId(id-1)}>{"<"}</Boton>
                        :
                        ""
                    }
                    
                    <Boton evento={() => setId(id+1)}>{">"}</Boton>
                </div>
            </div>
        </div>
    )
}

export default Pokemon2