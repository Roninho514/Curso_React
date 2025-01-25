import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const {id} = useParams();
    if(!id) return <p>Carregando..</p>
  return (
    <div>
        <h1>Mais Informações</h1>
        <p>Id: {id}</p>
    </div>
  )
}

export default Info