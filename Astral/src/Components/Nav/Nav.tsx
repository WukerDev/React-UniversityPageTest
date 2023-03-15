import { Fragment } from 'react'
import { useState } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import ukwlogo from './ukw.svg'
import { NavLink, Link } from 'react-router-dom'

import NavData from './NavData'
import MenuData from './MenuData'
import Notifications from './NotificationsData'
import { NoNotifData } from './NotificationsData'

import './NavPage.scss'

//liczba notyfikacji, backend do napisania TODO:
let NotifyAmmoun: number = { Notifications }.Notifications.length;

//aby dodawać nowe zakładki, dodaj je w tablicy navData
//STYLES CONFIG tutaj edytujemy style navbara poprzez dodawanie klas
var StyleNavDisclosure = "bg-blue-900 dark:bg-slate-900 sticky top-0"

var StyleNavDisclosureButton = "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"

var StyleNavDisclosureIcon = "block h-6 w-6"
var StyleNavDisclosureLogo = "block h-8 w-auto lg:block bg-white rounded-full p-0.5 hover:animate-spin"

var StyleNavDisclosureMenuButton = "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"

var StyleNavDisclosureMenuItems = "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"

var SchoolName = "Uniwersytet Kazimierza Wielkiego"

var ProfilePictureStyle = "h-8 w-8 rounded-full"
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
const refreshPage = () => {
  window.location.reload();
}
export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [picture, setPicture] = useState('https://www.w3schools.com/howto/img_avatar.png');
  const pictures = ['https://www.w3schools.com/howto/img_avatar.png', 'https://www.w3schools.com/howto/img_avatar2.png'];
  function togglePicture() {
    if (picture === pictures[0]) {
      setPicture(pictures[1]);
    } else {
      setPicture(pictures[0]);
    }
  }



  return (
    <Disclosure as="nav" className={StyleNavDisclosure}>
      {({ open }) => (<>
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className={StyleNavDisclosureButton}>
                <span className="sr-only">Open main menu</span>
                {open ? (<XMarkIcon className={StyleNavDisclosureIcon} aria-hidden="true" />) : (<Bars3Icon className={StyleNavDisclosureIcon} aria-hidden="true" />)}
              </Disclosure.Button> </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className={StyleNavDisclosureLogo} src={ukwlogo} alt={SchoolName} /></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {
                    NavData.map((item) => (
                      <NavLink
                        className={classNames('text-gray-300 hover:dark:bg-gray-700 hover:bg-blue-800 hover:text-white',
                          'rounded-md px-3 py-2 text-sm')}
                        key={item.name} to={item.href} >
                        {item.name}
                      </NavLink>
                    ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <Menu.Button className="rounded-full bg-blue-900 dark:bg-slate-900 p-1 text-gray-400 hover:text-white focus:outline-none hover:transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  {(NotifyAmmoun != 0 ? <span className="absolute -mt-1.5  rounded-full animate-pulse bg-red-700 py-0 px-1.5 text-xs text-white">{NotifyAmmoun}</span> : null)}
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>

                {/* Renderowanie powiadomień na dzwoneczku na podstawie ilości elementów w obiekcie Notifications z NotificationsData.tsx */}

                {
                  NotifyAmmoun > 0 ? /* Jeśli jest więcej niż 0 powiadomień, to wyświetl je w liście. */
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100">
                      <Menu.Items className="p-2 absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="max-h-64 overflow-x-auto">
                          {Notifications.map((item) => (
                            <Menu.Item key={item.sender}><div className="dark:bg-slate-900 bg-blue-500 mb-2 mt-2 py-2 rounded-xl break-words">
                              <div className="flex-row">
                                <p className="dark:text-sky-400 text-xs text-sky-200" >{item.dateTime}</p>
                                <p className="dark:text-sky-400 text-xs text-sky-200" >{item.sender}</p>
                                <p className="  text-center text-sm">{item.message}</p></div>
                            </div></Menu.Item>))}
                        </div></Menu.Items>
                    </Transition>

                    : /* NIE DOTYKAĆ DWUKROPKA (SZCZEGÓLNIE TY WIKTOR) */
                    /* Jeśli jest 0 lub mniej elementów w liście (warto być na 100% pewnym) to wyświetl listę z informacją o braku powiadomień. */
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100">
                      <Menu.Items className="p-2 absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white dark:bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <div className="dark:bg-slate-900 bg-blue-500 mb-2 mt-2 py-2 rounded-xl">
                            <div className="flex-row">
                              <p className="  text-center text-sm">{NoNotifData}</p></div>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                }
              </Menu>
              {/* Profile dropdown TODO:Podział na loged i not loged*/}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className={StyleNavDisclosureMenuButton}>
                    <span className="sr-only">Open user menu</span>
                    <img onClick={() => togglePicture()} className={ProfilePictureStyle} src={picture} alt="Profile Picture" />
                  </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className={StyleNavDisclosureMenuItems}>
                    {MenuData.map((item) => (
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink key={item.id}
                            to={item.href}
                            className={classNames(active ? "bg-gray-100 dark:bg-slate-900" : '', 'block px-4 py-2 text-sm text-slate-800 dark:text-slate-50')}>
                            {item.name}</NavLink>)}
                      </Menu.Item>))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {NavData.map((item) => (
              <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames
                ('dark:bg-gray-800 bg-blue-800 text-white')}>
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