import './App.css'
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
// 2 - Importando componente
function App() {
 // 3 - Comentários
  return (
    <>
      {/* 3 - Comentario dentro do jsx */}
      <h2>Fundamentos React</h2>
      <FirstComponent/>
      <TemplateExpression/>
    </>
  )
}

export default App
