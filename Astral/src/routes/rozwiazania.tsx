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
      <div className="">
      <h1 className="text-4xl font-bold mt-10 mb-4">Opracowane rozwiązania</h1>
      <p className="text-xl mb-4 mx-4 text-justify">
        Poprzez prace studentów oraz kadry koła naukowego Inkubator Technologiczny UKW, opracowano platformę mobilną, o napędzie elektrycznym, która zdolna jest do przenoszenia systemu dezynfekcji. Opracowane rozwiązanie zostało skonstruowane z wykorzystaniem niżej opisanych rozwiązań. W zakresie:
      </p>
      <div className="articles-container">
        <div className="article">
          <p className='article-title'>konstrukcji: aluminiowych profili konstrukcyjnych, opracowanych i w części gotowych elementów montażowych w technologii druku 3D</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
              <img src={podwozie1} alt="podwozie1" className="justify-center small" />
              <p>Podwozie 1</p>
            </div>
            <div className="obrazek-container">
              <img src={podwozie2} alt="podwozie2" className='small'/>
              <p>Podwozie 2</p>
            </div>
          </div>
        </div>
        <div className="article">
          <p className="article-title">napędu: silników, prądu stałego wraz z opracowaną dedykowaną przekładnią,</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
              <img src={przekładnia1} alt="przekładnia1" className='big'/>
              <p>Przekładnia 1</p>
            </div>
            <div className="obrazek-container">
              <img src={przekładnia2} alt="przekładnia2" className='big'/>
              <p>Przekładnia 2</p>
            </div>
          </div>
        </div>
        <div className="article">
          <p className="article-title">Sterowania i komunikacji: modułów ESP8266 lub wymiennie Arduino Mega, wraz z oprogramowanie dla systemu Windows i modułów Arduino,</p>
          <p className="article-title">Zasilania: modelarskie pakietu zasilania (litowo polimerowe lub niklowo-metalowo-wodorkowe),</p>
          <p className="article-title">Mobilny regał z systemem ozonowania, własnym systemem zasilania i rozwiązanie w zakresie liczenia osób.</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
              <img src={regal} alt="regal" className='big'/>
              <p>Regał</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}