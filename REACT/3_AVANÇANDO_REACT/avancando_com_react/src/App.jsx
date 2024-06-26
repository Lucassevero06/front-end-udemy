import './App.css'

// 2 - imagem em assets
import city from './assets/city.jpg'

// 3 - hook
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - renderização condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - Desustruturando Props 
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componente

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]

// 12 - fragments
import Fragment from './components/Fragment'

// 13 - Children

import Container from './components/Container'

// 14 - função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - state lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

// 15 - state lift
const [message, setMessage] = useState(" ");

const handleMessage = (msg) => {
  setMessage(msg);
}

function App() {

  // 14 - função em prop
  function showMessage() {
    console.log("Olá");
  }

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="outra imagem" />
      {/* 3 - useState */}
      <Data/>
      {/* 4 - render de lista */}
      <ListRender/>
      {/* 7 - Renderização condicional */}
      <ConditionalRender/>
      {/* 8 - props */}
      <ShowUserName name="Lucas" />
      {/* 9 - Desustruturando Props */}
      <CarDetails brand="BMW" km={999} color="Azul"/>
      {/* 10 -reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={5000} color="Vermelho" />
      <CarDetails brand="Ford" km={10000} color="Azul escuro" />
      {/* 11 - renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - fragments */}
      <Fragment/>
      {/* 13 - Children */}
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* 15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessages={handleMessage}/>
    </div>
  )

}

export default App
