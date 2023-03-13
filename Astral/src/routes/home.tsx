import Imiona from "../Components/BazaImion"

export default function Home() {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-3 m-5">
        {Imiona.map((imie: any) => (
          <NapiszImie key={imie.id} imie={imie.imie} wiek={imie.wiek} info={imie.info} />
        ))}
      </div>
    </>
  )
}

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