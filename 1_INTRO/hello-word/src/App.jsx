import ManageData from './components/ManageData'
import City from './assets/city.jpg'
import ListRender from './components/listRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import Message from './components/message'
import ChangeMessageState from './components/ChangeMessageState'
import Title from './components/Title'

// desafios
import Challenge from './components/Challenge'
import UserDetails from './components/UserDetails'

// css
import './App.css'
import { useState } from 'react'


function App() {

    const [userName] = useState("Maria")
  

    const cars = [
      {id:1, brand: "Ferrari",color: "Amarela", newCar: true, km:0},
      {id:2, brand: "Ford",color: "Vermelho", newCar: true, km:0},
      {id:3, brand: "Gol",color: "Verde", newCar: false, km:100000},
    ]

    const [message, setMessage] = useState("")

    const handleMessage = (msg) =>{
      setMessage(msg);
    }


    const n = 15
    const redtitle = true
  return (
    <div className='App'>
    {/* css global */}
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src = "/img1.jpg" alt = "Paisagem"/>
      </div>
      {/* Imagem em assets */}
      <div>
        <img src= {City} alt="Cidade" /> 
      </div>
      <div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* props */}
        <ShowUserName name = {userName}/>
        {/* destructuring */}
        <CarDetails brand = "VW" km = {100000} color = "Preto" newCar = {false}/>
        {/* Reaproveitando */}
        <CarDetails brand = "Ford" km = {0} color = "Azul" newCar = {true}/>
        {/* Loop em array de objetos */}
        {cars.map((car) =>(
          <CarDetails brand = {car.brand} color = {car.color} newCar={car.newCar} km = {car.km}/>
        ))}
        {/* Fragments */}
        <Fragments propFragment = "teste"/>
        {/* Children */}
        <Container myValue = "testing">
          <p>E este é meu conteudo</p>
        </Container>
        <Container myValue = "testing">
          <p>Testando container</p>
        </Container>
        {/* state lift */}
        <Message msg = {message}/>
        <ChangeMessageState handleMessage = {handleMessage}/>
        {/* Desafios */}
        {/* css de componente */}
        <Challenge/>
        <UserDetails/>
        {/* inline css */}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid black"}}>
          Este elemento foi estilizado de forma inline
        </p>
        {/* CSS inline dinâmico  */}
        <h2 style={n < 10 ? ({color: "purple"}) : ({color:"pink"})}>CSS dinâmico</h2>
        <h2 style={userName == "Maria" ? ({color: "green", backgroundColor:"blue"}) : null}>Teste nome</h2>
      </div>
      {/* Classe dinãmicas */}
      <h2 className = {redtitle ?"red-title" :"title"}>Este titulo vai ter classe dinâmica</h2>
      {/* CSS module */}
      <Title/>
    </div>
  )
}

export default App
