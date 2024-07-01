import './App.css'

// 2 - css Componente
import MyComponent from './components/MyComponent'

function App() {
  //4 - inline style dinamico
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <div className='App'>
      {/* 1 - css Global */}
      <h1>CSS no React</h1>
      {/* 2 - css Componente */}
      <MyComponent/>
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "green", padding: "25px", border: "1px solid black", borderRadius: "30px"}}>
        este elemento tem estilos inline
        </p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
        css dinamico 1
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        css dinamico 2
      </h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinamica</h2>
    </div>
  )
}

export default App
