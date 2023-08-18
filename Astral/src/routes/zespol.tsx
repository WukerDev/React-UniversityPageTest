import './Content.scss'

export default function Zespol() {
  return (
    <>
 <div className="zespol-main">
      <h1 className="text-4xl font-bold mt-10 mb-4">Zespół</h1>
      <p className="text-xl zespol-info mb-8">
        Studenci (rekrutowani od 1 do 4 roku) Informatyki i Mechatroniki UKW Bydgoszczy - <span className='kolo-nazwa'>Koło Naukowe Inkubator Technologiczny</span>:&nbsp;
        <a target="_blank" className="text-blue-500 hover:underline" href="https://informatyka.ukw.edu.pl/jednostka/wydzial-informatyki/kola/58694/inkubator-technologiczny">https://informatyka.ukw.edu.pl/jednostka/wydzial-informatyki/kola/58694/inkubator-technologiczny</a>
      </p>
      <div className='wrapped-iframe'>
        <iframe src="https://informatyka.ukw.edu.pl/jednostka/wydzial-informatyki/kola/58694/inkubator-technologiczny"></iframe>
      </div>
  </div>
    </>
  )
}