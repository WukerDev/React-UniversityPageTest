import linkedinlogo from '../assets/ukw/iconmonstr-linkedin-5.svg'
import facebooklogo from '../assets/ukw/iconmonstr-facebook-5.svg'
import instagramlogo from  '../assets/ukw/iconmonstr-instagram-15.svg'

export default function Test2() {
    return (    
<footer className="bg-white">
  <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
    <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Next.js
        </a>
      </div>

      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Remix
        </a>
      </div>

      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Svelte
        </a>
      </div>

      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Alpine.js
        </a>
      </div>

      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Tailwind
        </a>
      </div>

      <div className="px-5 py-2">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Partners
        </a>
      </div>
    </nav>
    <div className="flex justify-center mt-8 space-x-6">
      <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">
            github
          </span>
         <img src={linkedinlogo}/>
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">
            twitter
          </span>
          <img src={facebooklogo}/>
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">
            Instagram
          </span>
          <img src={instagramlogo}/>
        </a>
        <a className="w-6 h-6 transition fill-black hover:text-blue-500">
          <span className="sr-only">
            Linkedin
          </span>
          {/* Replace this with a React icon component */}
        </a>
      </span>
    </div>
    <p className="mt-8 text-center">
      <span className="mx-auto mt-2 text-sm text-gray-500">
        Copyright © 2020 - 2021
        <a href="https://unwrapped.design" className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
          @unwrappedHQ
        </a>
        .Since 2020
      </span>
    </p>
  </div>
</footer>
    )
}
