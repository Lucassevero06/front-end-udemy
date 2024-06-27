import './App.css'

//2 - Importando componentes
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'

function App() {
  //3 - Comentários
  return (
    <div className="App">
      {/* 4 - Comentários JSX */}
      <h1>Fundamento do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
    </div>
  )
}

export default App
