import Imiona from "../Components/BazaImion"

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
        <li>"Konstrukcja programowalnej, mobilnej platformy kołowej do dezynfekcji pomieszczeń"</li>
        <li>"Opracowanie systemu liczenia osób wchodzących do pomieszczenia oraz korelacja tej ilości z użyciem dozownika płynu dezynfekującego”</li>
      </ul>

      <h1 className="text-4xl font-bold mt-10 mb-4">Opracowanie systemu informatycznego</h1>
    </div>
    </>
  )
}