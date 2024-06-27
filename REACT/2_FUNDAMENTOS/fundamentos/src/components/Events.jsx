// Criando eventos
const Events = () => {

    const handleClick = () => {
        console.log("função com evento");
    }

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
    </div>
  )
}

export default Events