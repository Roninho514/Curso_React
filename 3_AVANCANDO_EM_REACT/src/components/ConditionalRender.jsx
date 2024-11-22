

const ConditionalRender = () => {
    const x = true;
    const name = "luiz";

  return (
    <div>
        {/* 7- Render Condicional */}
        <h3>Isso será exibido?</h3>
        { x &&  <p>Se o x for true sim...</p> }

        <h3>Render ternário</h3>
        {
            name === "João" ? (
                <div>
                    <p>Olá {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado !!</p>
                </div>
            )
        }
    </div>
  )
}

export default ConditionalRender