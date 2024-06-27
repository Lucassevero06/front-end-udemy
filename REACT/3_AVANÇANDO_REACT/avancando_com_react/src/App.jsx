import './App.css'

// 2 - imagem em assets
import city from './assets/city.jpg'

function App() {
  return (
    <div>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="outra imagem" />
    </div>
  )
}

export default App
