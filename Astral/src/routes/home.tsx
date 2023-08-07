import Imiona from "../Components/BazaImion"
import orzel from '../../public/1.png'
import logo from '../../public/2.png'

export default function Home() {
  return (
    <>
       <div className="p-10">
      <img src={orzel} className="w-1/2 mx-auto" />
      <img src={logo} className="w-1/2 mx-auto" />
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
    </div>
    </>
  )
}