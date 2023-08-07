import Imiona from "../Components/BazaImion"
import podwozie1 from '../../public/podwozie1.png'
export default function Rozwiazania() {
  return (
    <>
      <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Opracowane rozwiązania</h1>
      <p className="text-xl mb-4">
        Poprzez prace studentów oraz kadry koła naukowego Inkubator Technologiczny UKW, opracowano platformę mobilną, o napędzie elektrycznym, która zdolna jest do przenoszenia systemu dezynfekcji. Opracowane rozwiązanie zostało skonstruowane z wykorzystaniem niżej opisanych rozwiązań. W zakresie:
      </p>
      <ul className="list-disc list-inside">
        <li>konstrukcji: aluminiowych profili konstrukcyjnych, opracowanych i w części gotowych elementów montażowych w technologii druku 3D</li>
        <img src={podwozie1} alt="podwozie1" draggable="false"/>
      </ul>
    </div>
    </>
  )
}