import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();
    const handleSeubmit = (e) => {
        e.preventDefault();
        navigate("/search?q=" + query)
    }
  return (
    <form onSubmit={handleSeubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm