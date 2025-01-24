import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';



const Products = () => {
    const id = useParams();
    console.log(id.id)
    const url = "http://localhost:3000/products/" + id.id;
    const {data: data} = useFetch(url);

    if(!data) return <p>carregando...</p>

  return (
    <div>
        <ul>
            <li>ID: {data.id}</li>
            <li>Name: {data.name}</li>
        </ul>
    </div>
  )
}

export default Products