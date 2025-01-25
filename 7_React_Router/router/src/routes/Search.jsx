import React from 'react'
import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3000/products"

const Search = () => {
    const {data : items} = useFetch(url)
  return (
    <div>
        <h1>Resultados da pesquisa</h1>
        <ul className='products'>
            { items && items.map(item => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$ {item.price}</p>
                <Link to={`/products/${item.id}`} >Detalhe</Link>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Search