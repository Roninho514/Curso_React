import {  useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  // 1 - resgatando dados
  /* const [products, setProducts] = useState([]); */
  
  /* useEffect(() => {
    async function getData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getData();
    
  }, []); */

  // 4 - custom hook

  const {data: items, httpConfig, loading } = useFetch(url);

  //2 - Envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    };
    httpConfig(product, "POST");
    setName("");
    setPrice(0);
   /*  
    

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(product)
    }); */

    // 3 - carregamento dinâmico
    /* const addedProducts = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProducts]) */
  }

  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/* 6 - loading */}
      {loading && <h1>Carregando...</h1>}
      {/* 1 - resgate de dados */}
      <ul>
        { items && items.map((product) => (
          <li key={product.id}>{product.name} -  R${product.price}</li>
        ))}
      </ul>

      {/* 2 - Envio de dados */}
      <div className='add-product'>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          <span>Preço</span>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        {loading && <input type="submit" disabled value="Aguarde" />}
        {!loading && <input type="submit"  value="Criar" />}
      </form>
      </div>
    </div>
  )
}

export default App
