import Myform from './Components/Myform'
import './App.css'


function App() {

  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform user = {{name:"Josias", email:"josias@gmail.com", bio: "Sou um advogado", role:"admin"}} />
    </div>
  )
}

export default App
