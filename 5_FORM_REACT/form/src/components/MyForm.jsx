import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* 1 - Criando primeiro formulário */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome..." />
            </div>
            <input type="subimit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm