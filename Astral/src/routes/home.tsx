import orzel from '/1.png'
import logo from '/2.png'
import './Content.scss'

import podwozie1 from '/podwozie1.png'
import podwozie2 from '/podwozie2.png'
import podwozieProj from '/podwozieProj.png'

export default function Home() {
  return (
    <>
      <div className="p-10">
      <div className='home-images'>
        <img src={orzel} className="home-image" />
        <img src={logo} className="home-image" />
      </div>
      <p className="text-xl mt-10 mb-4">
        Projekt: „Innowacyjny, mobilny system dezynfekcji sal dydaktycznych”
      </p>
      <p className="text-xl mb-4">
        Realizacja projektu jest w 100% finansowana ze środków Ministerstwa Edukacji i Nauki. 
        Budżet (ostateczny) projektu: 23 600 zł.
        Środki te zostały pozyskane w ramach konkursu  „Studenckie koła naukowe tworzą innowacje ogłoszonego przez Ministra Edukacji i Nauki
        Projekt realizowany na Wydziale Informatyki Uniwersytetu Kazimierza Wielkiego 
        Rok akademicki 2022/2023
      </p>
      <div className='small-gallery'>
        <img src={podwozie1}></img>
        <img src={podwozie2}></img>
        <img src={podwozieProj}></img>
      </div>
    </div>
    </>
  )
}