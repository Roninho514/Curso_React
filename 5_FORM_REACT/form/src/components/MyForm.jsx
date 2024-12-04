import { useState } from 'react'
import './MyForm.css'

const MyForm = ({userName, userEmail}) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }


  return (
    <div>
        {/* 1 - Criando primeiro formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome..." onChange={handleName} value={name || ""}/>
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input type="text" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}  value={email || ""}/>
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio || ""}></textarea>
            </label>
            {/* 9 - select */}
            <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm