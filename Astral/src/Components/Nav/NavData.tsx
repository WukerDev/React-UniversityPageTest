

const NavData = [
    //dodawać nowe zakładki w formacie { name: 'nazwa zakładki', href: 'link do zakładki' },
    { id: 1, name: 'Główna', href: '/' },
    { id: 2, name: 'Galeria', href: '/Galeria' },
    { id: 3, name: 'Kontakt', href: '/Kontakt'  },
    { id: 4, name: 'FAQ', href: '/FAQ'  },
    //href jest też wykorzystywane do określenia wartości current trochę niżej, zmieniając href, zmienia się też current
  ]

const MenuData = [
    { id: 1, name: 'Twój Profil', href: '/Profile' },
    { id: 2, name: 'Harmonogram', href: '/Planner' },
    { id: 3, name: 'Ustawienia', href: '/Settings' },
    { id: 4, name: 'Panel Administratora', href: '/Admin' },
    { id: 5, name: 'Wyloguj', href: '/Logout' },
]







export default NavData;
export { MenuData };