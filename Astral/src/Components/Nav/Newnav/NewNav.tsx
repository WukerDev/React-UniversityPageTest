import React, { useState, useEffect, useRef } from 'react';
import './NewNav.scss'
import logo from '/ukw.svg'
import { Link } from 'react-router-dom';

type CardProps = {
    title: string;
    where?: string;
};

const Card: React.FC<CardProps> = ({ title, where }) => (
    <Link className='card' to={"/"+where}>
        {title}
    </Link>
);

const Logo: React.FC = () => (
    <div className="logo">
        <a href="https://www.ukw.edu.pl/" target='_blank'>
            <img src={logo} alt="UKW Logo"/>
        </a>
    </div>
);

const NewNavbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(window.innerWidth > 768);
    
    const navRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    
    useEffect(() => {
        const handleResize = (event: any) => {
            if (window.innerWidth > 768) {
                setMenuOpen(true);
            } else {
                setMenuOpen(false);
            }
        };
        const handleOutsideClick = (event: any) => { 
            if (window.innerWidth <= 768 && hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
                return;
            }
            if (window.innerWidth <= 768 && navRef.current && !navRef.current.contains(event.target) && menuOpen) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);
    
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
    <nav className="newnavbar">
        <Logo />
        <button className="menu-button" onClick={toggleMenu} ref={hamburgerRef}>
            ☰
        </button>
        {menuOpen && (
        <div className={`spacer ${menuOpen ? 'open' : ''}`} ref={navRef} >
            <Card title="Strona główna" where=""/>
            <Card title="Zespół" where="Zespol" />
            <Card title="Cele projektowe" where="Cele" />
            <Card title="Opracowane rozwiązania" where="Rozwiazania" />
        </div>
        )}
    </nav>
    );
};

export default NewNavbar;