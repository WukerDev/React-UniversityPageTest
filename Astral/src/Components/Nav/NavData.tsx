

const NavData = [
    //dodawać nowe zakładki w formacie { name: 'nazwa zakładki', href: 'link do zakładki' },
    { id: 1, name: 'Główna', href: '/' },
    { id: 2, name: 'Galeria', href: '/Galeria' },
    { id: 3, name: 'Kontakt', href: '/Kontakt'  },
    { id: 4, name: 'FAQ', href: '/FAQ'  },
    //href jest też wykorzystywane do określenia wartości current trochę niżej, zmieniając href, zmienia się też current
  ]
export default NavData;
