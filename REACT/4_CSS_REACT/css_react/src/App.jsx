import './App.css'

// 2 - css Componente
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div className='App'>
      {/* 1 - css Global */}
      <h1>CSS no React</h1>
      {/* 2 - css Componente */}
      <MyComponent/>
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "green", padding: "25px", border: "1px solid black", borderRadius: "20px"}}>este elemento tem estilos inline</p>
    </div>
  )
}

export default App
