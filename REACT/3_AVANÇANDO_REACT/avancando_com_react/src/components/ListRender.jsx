import { useState } from "react"
const ListRender = () => {

    const [list] = useState(["Lucas", "Gabriel", "Severo", "Luan"])

    const [users, setUsers] = useState([
        {id: 1, name: "Lucas", age: 18},
        {id: 2, name: "Gabriel", age: 40},
        {id: 3, name: "Luan", age: 14},
    ])

    return (
        <div>
            {/* 4 - Render sem key não é a mais recomendada, porém FUNCIONA */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* 5 - Render com key é a RECOMENDADA PELA DOCUMENTAÇÃO OFICIAL */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender