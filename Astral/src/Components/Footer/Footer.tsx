import './Footer.scss'
import IkonyFooter from './ikony_baza'
function getYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (    
  
 //footer body 
<footer className="bg-blue-900 dark:bg-slate-900 pb-2">
    {/*div z ikonami, centruje się, tutaj zmieniamy gap między ikonami i padding*/}
<div className="flex gap-2 align-middle justify-center pt-2" > 
{/*Automatic icon generator*/}
    {IkonyFooter.map((ikona: any) => (
        <a href={ikona.href} target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img className='foot_color' src={ikona.icon} /></a>
    ))}

    
    

</div>
<a className="text-gray-400">©{getYear()} Uniwersytet Kazimierza Wielkiego</a>  
</footer>
    )
}

