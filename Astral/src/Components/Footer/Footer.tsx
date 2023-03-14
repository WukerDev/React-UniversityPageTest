import './Footer.scss'
import IkonyFooter from './ikony_baza'
//import stylów i lokacji ikon
function getYear() {
    return new Date().getFullYear();
}
//styles config
//footer
var stylefoot = "bg-blue-900 dark:bg-slate-900 pb-2"
//ikony div
var styleIconDiv = "flex gap-2 align-middle justify-center pt-2"
//ikony
var styleIcon = "foot_color ease-in-out transform hover:scale-125 transition duration-300"
//kolor ikon
var styleIconColor = "foot_color" // aby edytować kolor ikon, edytuj klasę w pliku Footer.scss
//export funkcji do App.tsx, przy zmianie nazwy pamiętać o tym samym w App.tsx
export default function Footer() {
    return (    
 //footer body 
<footer className={stylefoot}>
{/*div z ikonami, centruje się, tutaj zmieniamy gap między ikonami i padding*/}
<div className={styleIconDiv} > 
{/*Automatic icon generator*/}
{/*Aby dodać nowe ikony dodaj je w pliku ikony_baza.tsx*/}
    {IkonyFooter.map((ikona: any) => (
        <a key={ikona.id} href={ikona.href} target="_blank" className={styleIcon}>
            <img className={styleIconColor} src={ikona.icon} /></a>))}</div>
{/*Copyright notice, z automatycznym update roku*/}
<a className="text-gray-400">©{getYear()} Uniwersytet Kazimierza Wielkiego</a>  
</footer>)}