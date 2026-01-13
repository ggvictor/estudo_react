import {useState} from 'react'

const ListRender = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [list] = useState(["Vash","Victor","Renan"])
    const [users,setUsers] = useState([
      {id:1, name: "Vash", age:27},
      {id: 3, name: "Renan", age: 18},
      {id: 2, name: "victor", age: 21},
    ])

    const deleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers)=>{
          return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {list.map((item,i)=> (
                <li key = {i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user)=>(
            <li key = {user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
        <button onClick = {deleteRandom}>Delete</button>
    </div>
  )
}

export default ListRender