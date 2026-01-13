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

  return (
    <div className='App'>
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
      </div>
    </div>
  )
}

export default App
