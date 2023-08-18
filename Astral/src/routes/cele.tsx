
import cele1 from '../../public/podwozieProj.png'
import cele2 from '../../public/przekladniaProj.png'
import cele3 from '../../public/liczOs1.png'
import cele4 from '../../public/liczOs2.png'
import cele5 from '../../public/cele5.png'

import './Content.scss'



export default function Cele() {
  return (
    <>
    <div className="">
      <h1 className="text-4xl font-bold mt-10 mb-4">Cele projektu</h1>
      <p className="text-xl mb-4 mx-4 text-justify">
        Głównym celem projektu było opracowanie na drodze prac badawczo rozwojowych skutecznej i taniej metody wspomagania dezynfekcji sal dydaktycznych oraz systemu dezynfekcji rąk przed wejściem do sali na zajęcia.
      </p>
      <p className="text-xl my-8">Wybrane cele szczegółowe:</p>
      <div className="articles-container">
        <div className="article">
        <p className='article-title'>Konstrukcja programowalnej, mobilnej platformy kołowej do dezynfekcji pomieszczeń</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
              <img src={cele1} alt="cele1" className='small'/>
              <p>Podwozie</p>
            </div>
            <div className="obrazek-container">
              <img src={cele2} alt="cele2" className='small'/>
              <p>Przekładnia</p>
            </div>
          </div>
        </div>

        <div className="article">
          <p className='article-title'>Opracowanie systemu liczenia osób wchodzących do pomieszczenia oraz korelacja tej ilości z użyciem dozownika płynu dezynfekującego</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
                <img src={cele3} alt="cele3" className='small'/>
                <p className='add-padding'>Licznik osób 1</p>
            </div>
            <div className="obrazek-container">
                <img src={cele4} alt="cele4" className='small'/>
                <p className='add-padding'>Licznik osób 2</p>
            </div>
          </div>
        </div>

        <div className="article">
          <p className='article-title'>Opracowanie systemu informatycznego</p>
          <div className="galeria-zdjec mb-3">
            <div className="obrazek-container">
            <img src={cele5} alt="cele5" className='big'/>
                <p>Przekładnia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}