import {useState} from 'react'

const UserDetails = () => {
    // const [list] = useState(["Victor","Fernanda","Pablo"])
    const [users] = useState([
        {name:"Victor",idade:21,job:"TI"},
        {name:"Fernanda",idade:27,job:"Atendente"},
        {name:"Pablo",idade:17,job:"Universitário"}
    ])
    
    const checarIdade = (nome, idade) =>{
        if(idade < 18){
            return <p>{nome} Não pode tirar a carteira</p>
        }else{
             return <p>{nome} pode tirar a carteira!!</p>
        }
    }
   
  return (
    <div>
        <ul>
            {users.map((user)=>(
                <li>Nome: {user.name}, Idade: {user.idade}, Profissão: {user.job}
                {checarIdade(user.name, user.idade)}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserDetails