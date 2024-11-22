
import { useState } from 'react'
import './App.css'
import { CarDetails } from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ExecuteFunction from './components/ExecuteFunction'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMesage from './components/ChangeMesage'

function App() {

  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Amarelo",
      km: 0
    },
    {
      id: 2,
      brand: "KIA",
      color: "Branco",
      km: 200000
    },
    {
      id: 3,
      brand: "Renault",
      color: "Azul",
      km: 3200
    },
  ]

  function showMessage() {
    console.log("Função executada!");
  }

  const [message, setMessage] = useState("");

  const hundleMessage = (message) => {
    setMessage(message)
  }

  return (
    <>
      {/* <h1>Teste de Data</h1>
      <Data/> */}
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="Roni" />
      <CarDetails brand="VW" km={999} color="Verde"/>
      {cars.map ((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}

      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMesage handleMessage={hundleMessage}/>

    </>
  )
}

export default App
