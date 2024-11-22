const  Events = () => {
    const functionClick = (e) => {
        console.log("Testando função");
        console.log(e)
    }

    const validation = (x) => {
        if(x){
            return (
                <h2>Acionando algo</h2>
            );
        } else{
            return (
                <h2>Acionando outra coisa</h2>
            );
        }
    }

    return (
        <div>
            <button onClick={functionClick}>Testando funções nos botões</button>
            {validation(true)}
            {validation(false)}
        </div>
    );
}

export default Events;
