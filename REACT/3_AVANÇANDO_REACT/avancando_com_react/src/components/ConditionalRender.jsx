const ConditionalRender = () => {
    const x = 5;

    const name = "João"

    return (
        <div>
            {/* 7 - Renderização condicional */}
            <h3>Isso será exibido?</h3>
            {x > 2 && <p>Se x for maior que 2 exibe, sim!</p>}
            {/* 8 - else  */}
            <h3>If else ternário em React:</h3>
            {name === "João" ? (
                <div>Olá João</div>
            ) : (
                <div>Nome não encontrado</div>
            )}
        </div>
    )
}

export default ConditionalRender