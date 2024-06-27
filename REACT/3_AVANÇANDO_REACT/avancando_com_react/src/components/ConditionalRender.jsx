import React from 'react'

const ConditionalRender = () => {
    const x = 5;

    return (
        <div>
            {/* 7 - Renderização condicional */}
            <h3>Isso será exibido?</h3>
            {x > 2 && <p>Se x for maior que 2 exibe, sim!</p>}
        </div>
    )
}

export default ConditionalRender