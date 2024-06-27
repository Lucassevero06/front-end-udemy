// 4 - template expression

const TemplateExpression = () => {
    const name = "Lucas";

    const data = {
        age: 18,
        job: "Programador"
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}</h3> {/* imprime a string "Lucas" */}
            <p>Sua idade é {data.age} anos</p> {/* Imprimindo dados de objetos */}
            <p>Você é um {data.job}</p>
        </div>
    )
}

export default TemplateExpression;