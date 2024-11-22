import { useState } from "react";


const Data = () => {
    let numeroAtual = 20;
    const [numberState, setNumberState] = useState(0);

  return (
    <div>
        <p>Esse é o número Atual: {numeroAtual}</p>
        <button onClick={numeroAtual = 30}>Mudar Número</button>

        <div>
            <p>Outro numero com o use State : {numberState}</p>
            <button onClick={() => setNumberState(numberState + 1)}>Mudar Número</button>
        </div>

    </div>
  )
}

export default Data