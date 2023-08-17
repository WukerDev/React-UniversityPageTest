
import cele1 from '../../public/podwozieProj.png'
import cele2 from '../../public/przekladniaProj.png'
import cele3 from '../../public/liczOs1.png'
import cele4 from '../../public/liczOs2.png'
import cele5 from '../../public/cele5.png'

import './Content.scss'



export default function Cele() {
  return (
    <>
    <div className="p-10">


      <h1 className="text-4xl font-bold mt-10 mb-4">Cele projektu</h1>
      <p className="text-xl mb-4">
        Głównym celem projektu było opracowanie na drodze prac badawczo rozwojowych skutecznej i taniej metody wspomagania dezynfekcji sal dydaktycznych oraz systemu dezynfekcji rąk przed wejściem do sali na zajęcia.
      </p>
      <p className="text-xl mb-4">Wybrane cel szczegółowe:</p>
      <ul className="list-disc list-inside">
        <li>Konstrukcja programowalnej, mobilnej platformy kołowej do dezynfekcji pomieszczeń</li>
        <div className="galeria-zdjec">
          <div className="obrazek-container">
            <img src={cele1} alt="cele1" />
            <p>Podwozie</p>
          </div>
          <div className="obrazek-container">
            <img src={cele2} alt="cele2" />
            <p>Przekładnia</p>
          </div>
          
        </div>

        <li>Opracowanie systemu liczenia osób wchodzących do pomieszczenia oraz korelacja tej ilości z użyciem dozownika płynu dezynfekującego</li>
        
        <div className="galeria-zdjec">
          <div className="obrazek-container">
              <img src={cele3} alt="cele3" />
              <p>Licznik osób 1</p>
          </div>
          <div className="obrazek-container">
              <img src={cele4} alt="cele4" />
              <p>Licznik osób 2</p>
          </div>
        </div>
        <li>Opracowanie systemu informatycznego</li>
        
        <div className="galeria-zdjec">
          <div className="obrazek-container">
          <img src={cele5} alt="cele5" />
              <p>Przekładnia</p>
          </div>
        </div>
      </ul>

    
    </div>
    </>
  )
}