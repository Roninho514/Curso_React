import Events from "./Events";
function TemplateExpression() {
    const personalData = {
        name: "Roni",
        age : 22,
        job: "Programador"
    }


    return (
        <div>
            <h3>Bem vindo {personalData.name}</h3>
            <h3>Você tem {personalData.age} e sua profissão é {personalData.job}</h3>
            <p>A soma é {2 + 2}</p>
            {/*Hierarquia de componentes */}
            <Events/>
        </div>
    )
}

export default TemplateExpression;