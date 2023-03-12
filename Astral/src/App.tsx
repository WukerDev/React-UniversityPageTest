import reactLogo from './assets/react.svg'
import './App.scss'
import { useState } from 'react'
import { useEffect } from 'react'

function NapiszImie(props: any){
  return(
    <>
      <h1>Witaj, jestem {props.imie}, mam {props.wiek} lata.</h1>
      <h1>Witaj, jestem {props.imie}, mam {props.wiek} lata.</h1>
      <h1>Witaj, jestem {props.imie}, mam {props.wiek} lata.</h1>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <div>
        <h1 onClick={increment}>{count}</h1>
        <NapiszImie imie={'Kuba'} wiek={22}/>
      </div>
    </>
  )
}

export default App
