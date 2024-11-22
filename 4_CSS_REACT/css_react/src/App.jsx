import './App.css'
import MyComponent from './components/MyComponent'
import Text from './components/Text';

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <>
      {/* 1 - css global */}
      <h1 className='textTitle'>CSS no React</h1>
      {/* 2- CSS de comoponente */}
      <MyComponent/>
      {/* 3 - Inline style */}
      <p style={{color:"blue", padding:"25px", borderTop:"1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - Inline style dinâmico */}
      <h1 style={n > 10 ? {color:"purple"} : {color:"green"}}>CSS inline dinâmico</h1>
      <h1 style={n > 20 ? {color:"purple"} : {color:"green"}}>CSS inline dinâmico</h1>
      {/* 5 - Classes dinâmica */}
      <p className={redTitle ? 'red-title' : 'title'}>Texto com uma classe dinâmica</p>
      <p className={!redTitle ? 'red-title' : 'title'}>Texto com uma classe dinâmica</p>
      <Text/>
    </>
  )
}

export default App
