import { Fragment } from 'react'
import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ukwlogo from './ukw.svg'
import { Link } from 'react-router-dom' 


//liczba notyfikacji, backend do napisania TODO:
let NotifyAmmoun = 5;
//aby dodawać nowe zakładki, dodaj je w tablicy navigation
const navigation = [
    //dodawać nowe zakładki w formacie { name: 'nazwa zakładki', href: 'link do zakładki' },
    { name: 'Główna', href: '/' },
    { name: 'Galeria', href: '/Galeria' },
    { name: 'Kontakt', href: '/Kontakt'  },
    { name: 'FAQ', href: '/FAQ'  },
    //href jest też wykorzystywane do określenia wartości current trochę niżej, zmieniając href, zmienia się też current
  ]
//STYLES CONFIG tutaj edytujemy style navbara poprzez dodawanie klas
var StyleNavDisclosure = "bg-blue-900 dark:bg-slate-900 sticky top-0"
var StyleNavDisclosureButton = "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
var StyleNavDisclosureIcon = "block h-6 w-6"
var StyleNavDisclosureLogo = "block h-8 w-auto lg:block bg-white rounded-full p-0.5 hover:animate-spin"
var StyleNavDisclosureMenuButton = "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
var StyleNavDisclosureMenuItems = "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
var SchoolName = "Uniwersytet Kazimierza Wielkiego"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const refreshPage = ()=>{
  window.location.reload();
}



export default function NavBar() {

const [picture, setPicture] = useState('https://www.w3schools.com/howto/img_avatar.png');
const pictures = ['https://www.w3schools.com/howto/img_avatar.png', 'https://www.w3schools.com/howto/img_avatar2.png'];
function togglePicture(){
  if (picture === pictures[0]){
    setPicture(pictures[1]);
  } else {
    setPicture(pictures[0]);
  }
}
  return (
    <Disclosure as="nav" className={StyleNavDisclosure}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={StyleNavDisclosureButton}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className={StyleNavDisclosureIcon} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={StyleNavDisclosureIcon} aria-hidden="true" />
                  )}
                </Disclosure.Button> </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className={StyleNavDisclosureLogo} src={ukwlogo} alt={SchoolName} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                   {navigation.map((item) => (
                    /* BUG: Temporary FIX */
                    <a onClick={refreshPage}>
                      <Link
                      className={classNames(
                        item.href === window.location.pathname ? 'dark:bg-slate-800 bg-blue-800 text-white' : 'text-gray-300 hover:dark:bg-gray-700 hover:bg-blue-800 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.href === window.location.pathname ? 'page' : undefined}
                        key={item.name}
                        to={item.href} 
                       
                      >
                        {item.name}
                      </Link>
                      </a>  
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-blue-900 dark:bg-slate-900 p-1 text-gray-400 hover:text-white focus:outline-none hover:transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {/* Ikona z liczbą notyfikacji TODO: Dodać backend*/}
                  <span className="absolute -mt-1.5  rounded-full animate-pulse bg-red-700 py-0 px-1.5 text-xs text-white">{NotifyAmmoun}</span>
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown TODO:Podział na loged i not loged*/}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className={StyleNavDisclosureMenuButton}>
                      <span className="sr-only">Open user menu</span>
                      <img onClick={() => togglePicture()}
                        className="h-8 w-8 rounded-full" 
                        src={picture}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={StyleNavDisclosureMenuItems}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#" 
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-900' : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}
                          >
                            Twój Profil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-900' : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}
                          >
                            Harmonogram
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-900' : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}
                          >
                            Ustawienia
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-900' : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}
                          >
                            Panel Administratora
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-900' : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}
                          >
                            Wyloguj
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === window.location.pathname ? 'dark:bg-gray-800 bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.href === window.location.pathname ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}