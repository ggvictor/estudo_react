import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Renato")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        {name === "Victor" ? (
            <div>
                <p>O nome é Victor</p>
            </div>
        ) : (
             <div>
                <p>O nome não é Victor</p>
            </div>
        )}
        <button onClick={()=> setName("Victor")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender