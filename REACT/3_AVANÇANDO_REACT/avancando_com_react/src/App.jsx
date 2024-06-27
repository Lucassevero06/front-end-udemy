import './App.css'

// 2 - imagem em assets
import city from './assets/city.jpg'

// 3 - hook
import Data from './components/Data'

function App() {

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="outra imagem" />
      <Data/>
    </div>
  )

}

export default App
