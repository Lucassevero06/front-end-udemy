// Criando eventos
const Events = () => {

    const handleClick = () => {
        console.log("função com evento");
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>

        }
    };

    // return 10 > 2 && <p>Carregando....</p>

    return (
        <div>
            <div>
                <button onClick={() => {
                    console.log("clicou");
                }}>Clique aqui</button>
            </div>
            {/* 7 - eventos com função */}
            <div>
                <button onClick={handleClick}>Clique aqui - com função</button>
            </div>
            {/* Função com renderização */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events