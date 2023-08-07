import Imiona from "../Components/BazaImion"
import podwozie1 from '/podwozie1.png'
import podwozie2 from '/podwozie2.png'
import przekładnia1 from '/przekładnia1.png'
import przekładnia2 from '/przekładnia2.png'
import regal from '/regal.png'
import './Content.scss'

export default function Rozwiazania() {
  return (
    <>
      <div className="p-10 ">
      <h1 className="text-4xl font-bold mb-4">Opracowane rozwiązania</h1>
      <p className="text-xl mb-4">
        Poprzez prace studentów oraz kadry koła naukowego Inkubator Technologiczny UKW, opracowano platformę mobilną, o napędzie elektrycznym, która zdolna jest do przenoszenia systemu dezynfekcji. Opracowane rozwiązanie zostało skonstruowane z wykorzystaniem niżej opisanych rozwiązań. W zakresie:
      </p>
      <ul className="list-disc list-inside justify-center flex-col flex">
        <li>konstrukcji: aluminiowych profili konstrukcyjnych, opracowanych i w części gotowych elementów montażowych w technologii druku 3D</li>
        <img src={podwozie1} alt="podwozie1" className="justify-center" />
        <img src={podwozie2} alt="podwozie2" />
        <li>napędu: silników, prądu stałego wraz z opracowaną dedykowaną przekładnią,</li>
        <img src={przekładnia1} alt="przekładnia1" />
        <img src={przekładnia2} alt="przekładnia2" />
        <li>sterowania i komunikacji: modułów ESP8266 lub wymiennie Arduino Mega, wraz z oprogramowanie dla systemu Windows i modułów Arduino,</li>
        <li>zasilania: modelarskie pakietu zasilania (litowo polimerowe lub niklowo-metalowo-wodorkowe),</li>
        <li>mobilny regał z systemem ozonowania, własnym systemem zasilania i rozwiązanie w zakresie liczenia osób.</li>     
        <img src={regal} alt="regal" />  
      </ul>
    </div>
    </>
  )
}