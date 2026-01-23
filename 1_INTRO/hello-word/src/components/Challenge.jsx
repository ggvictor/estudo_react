import './Challenge.css'
const Challenge = () => {
    const n1 = 6
    const n2 = 10
    const somar = () =>{
        console.log(n1 + n2)

    }
    
  return (
    <div>
        <h2 className='challengeH2'>Challenge</h2>
        <button onClick={somar}>somar</button>
    </div>
  )
}

export default Challenge