import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
    // 3-gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name, email);

  return (
    <div>
        {/* 1-criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
            </div>
            {/* 2-label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" id="email" placeholder="Digite o seu E-mail" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
        
    </div>
  )
}

export default MyForm