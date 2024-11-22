import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <>
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2- CSS de comoponente */}
      <MyComponent/>
      {/* 3 - Inline style */}
      <p style={{color:"blue", padding:"25px", borderTop:"1px dotted blue"}}>Este elemento tem estilos inline</p>
    </>
  )
}

export default App
