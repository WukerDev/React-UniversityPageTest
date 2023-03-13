import reactLogo from './assets/react.svg'
import './App.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'

import Imiona from './Components/BazaImion'

//NAVBAR
import Test from './Components/Nav'
import Test2 from './Components/Footer'
import ReactDOM from 'react-dom'

function NapiszImie(props: any) {
  return (
    <>
      <div className='border-gray-600 border-2 pb-0 break-words'>
        <h1 className="p-6">Witaj, jestem {props.imie}, mam {props.wiek} lat.</h1>
        <h2 className="p-2 border-gray-600 border-t-2">{props.info}</h2>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  useEffect(() => {
    document.title = `Astral | ${Imiona[0].imie}, ${Imiona[1].imie}, ${Imiona[2].imie}`;
  });
  return (
    <>
    <div className="flex flex-col h-screen justify-between">
        <Test />
        <h1 id='clockroot'>   
        </h1>
        <div className="grid sm:grid-cols-3 gap-3 m-5">
          {Imiona.map((imie: any) => (
            <NapiszImie key={imie.id} imie={imie.imie} wiek={imie.wiek} info={imie.info} />
          ))}
        </div>
        <Test2 />
      </div>
    </>
  )
}

export default App
