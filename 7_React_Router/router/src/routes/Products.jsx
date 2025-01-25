import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';



const Products = () => {
    const id = useParams();
    const url = "http://localhost:3000/products/" + id.id;
    const {data: data} = useFetch(url);

    if(!data) return <p>carregando...</p>

  return (
    <div>
        <ul>
            <li>ID: {data.id}</li>
            <li>Name: {data.name}</li>
        </ul>
        <Link to={`/products/${id.id}/info`}>Mais Informações</Link>
    </div>
  )
}

export default Products