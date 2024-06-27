import './App.css'

//2 - Importando componentes
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'

function App() {
  //3 - Comentários
  return (
    <div className="App">
      {/* 4 - Comentários JSX */}
      <h1>Fundamento do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
    </div>
  )
}

export default App
