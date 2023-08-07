import './Footer.scss'
function getYear() {
    return new Date().getFullYear();
}
export default function Footer() {
    return (    
<footer>

<p>Uniwersytet Kazimierza Wielkiego, {getYear()}</p>

</footer>)}