import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {
    const placeholderModificados = `${props.placeholder}...`

    //Destructuracion
    const {type = "text"} =props

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificados} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambios}
            type={type}
        />
    </div>
}

export default Campo