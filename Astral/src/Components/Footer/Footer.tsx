
import './Footer.scss'
import linkedinlogo from './iconmonstr-linkedin-5.svg'
import facebooklogo from './iconmonstr-facebook-5.svg'
import instagramlogo from  './iconmonstr-instagram-15.svg'
import youtubelogo from  './iconmonstr-youtube-10.svg'
import twitterlogo from  './iconmonstr-twitter-5.svg'

function getYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (    
        
<footer className="bg-blue-900 dark:bg-slate-900 pb-2">
<div className="flex gap-2 align-middle justify-center pt-2" > 
    <a href="https://www.facebook.com/ukwbydgoszcz" target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img src={facebooklogo} /></a>
    <a href="https://www.instagram.com/ukwbydgoszcz" target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img src={instagramlogo} className=""/></a>
    <a href="https://twitter.com/UKWBydgoszcz" target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img src={twitterlogo} className=""/></a>
    <a href="https://www.linkedin.com/school/uniwersytet-kazimierza-wielkiego/?originalSubdomain=pl" target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img src={linkedinlogo} className=""/></a>
    <a href="https://www.youtube.com/ukwbydgoszcz" target="_blank" className="foot_color ease-in-out transform hover:scale-125 transition duration-500"><img src={youtubelogo} className=""/></a>
</div>
<a className="text-gray-400">©{getYear()} Uniwersytet Kazimierza Wielkiego</a>  
</footer>
    )
}

