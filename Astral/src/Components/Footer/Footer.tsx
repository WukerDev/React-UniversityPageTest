
import './Footer.scss'
import linkedinlogo from './iconmonstr-linkedin-5.svg'
import facebooklogo from './iconmonstr-facebook-5.svg'
import instagramlogo from  './iconmonstr-instagram-15.svg'
import youtubelogo from  './iconmonstr-youtube-10.svg'
import twitterlogo from  './iconmonstr-twitter-5.svg'

export default function Test2() {
    return (    
<footer className="bg-tramsparent">
<div className="flex gap-2 align-middle justify-center " > 
    <a href="https://www.facebook.com/ukwbydgoszcz" target="_blank" className="foot_color"><img src={facebooklogo} /></a>
    <a href="https://www.instagram.com/ukwbydgoszcz" target="_blank" className="foot_color"><img src={instagramlogo} className=""/></a>
    <a href="https://twitter.com/UKWBydgoszcz" target="_blank" className="foot_color"><img src={twitterlogo} className=""/></a>
    <a href="https://www.linkedin.com/school/uniwersytet-kazimierza-wielkiego/?originalSubdomain=pl" target="_blank" className="foot_color"><img src={linkedinlogo} className=""/></a>
    <a href="https://www.youtube.com/ukwbydgoszcz" target="_blank" className="foot_color"><img src={youtubelogo} className=""/></a>
</div>
<a className="">©2023 ukw bydgoszcz</a>  
</footer>
    )
}

