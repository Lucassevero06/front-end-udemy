import "./MyForm.css";
const MyForm = () => {
  return (
    <div>
        {/* 1-criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" placeholder="Digite o seu nome"/>
            </div>
            {/* 2-label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" id="email" placeholder="Digite o seu E-mail"/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
        
    </div>
  )
}

export default MyForm