import React from 'react'
import {useFetch} from "../hooks/useFetch"
import { Link } from 'react-router-dom';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  const url = "http://localhost:3000/products"
  const {data: items} = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      <SearchForm/>
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

export default Home