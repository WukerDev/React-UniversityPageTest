import linkedinlogo from '../assets/ukw/iconmonstr-linkedin-5.svg'
import facebooklogo from '../assets/ukw/iconmonstr-facebook-5.svg'
import instagramlogo from  '../assets/ukw/iconmonstr-instagram-15.svg'
import youtubelogo from  '../assets/ukw/iconmonstr-youtube-10.svg'
import twitterlogo from  '../assets/ukw/iconmonstr-twitter-5.svg'
import '../Components/Footer.scss'

export default function Test2() {
    return (    
<footer className="bg-tramsparent">
<div className="flex gap-2 align-middle justify-center " > 
    <a href="https://www.facebook.com/ukwbydgoszcz" target="_blank" className=""><img src={facebooklogo} className="" /></a>
    <a href="https://www.instagram.com/ukwbydgoszcz" target="_blank"><img src={instagramlogo} className=""/></a>
    <a href="https://twitter.com/UKWBydgoszcz" target="_blank" ><img src={twitterlogo} className=""/></a>
    <a href="https://www.linkedin.com/school/uniwersytet-kazimierza-wielkiego/?originalSubdomain=pl" target="_blank"><img src={linkedinlogo} className=""/></a>
    <a href="https://www.youtube.com/ukwbydgoszcz" target="_blank"><img src={youtubelogo} className=""/></a>
</div>
<a className="">©2023 ukw bydgoszcz</a>  
</footer>
    )
}

