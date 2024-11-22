import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Marcos", "Lucas", "João"]);

    const [listUser, setUser] = useState([
        {
            id: 1,
            name: 'Roni',
            age: 22
        },
        {
            id: 2,
            name: 'Matheus',
            age: 28
        },
        {
            id: 3,
            name: 'Marcos',
            age: 24
        },
        {
            id: 4,
            name: 'Luiz',
            age: 18
        },]);

        const deleteUser = () => {
            const randomNumber = Math.floor(Math.random() * 5);

            setUser((prevState) =>  prevState.filter( (user) => randomNumber !== user.id))
        };

  return (
    <div> 
        {/* 4- Lista sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* 5 - lista com key */}

        <ul>
            {listUser.map((user) => (
                <li key={user.id}> {user.name} - {user.age} Anos</li>
            ))}
        </ul>
        <button onClick={deleteUser}>Delete o usuário randomico</button>
    </div>
  )
}

export default ListRender