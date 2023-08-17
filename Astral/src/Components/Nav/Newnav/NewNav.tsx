import React, { useState, useEffect, useRef } from 'react';
import './NewNav.scss'
import logo from '/ukw.svg'
import { NavLink } from 'react-router-dom';

type CardProps = {
    title: string;
    where?: string;
    onLinkClick?: () => void;
};

const isMobile = () => window.innerWidth <= 768;

const Card: React.FC<CardProps> = ({ title, where, onLinkClick }) => (
    <NavLink 
    onClick={onLinkClick}
    className={
        ({isActive, isPending}) => `card ${isPending ? "pending": isActive ? "active" : ""}`
    }
    to={"/"+where}>
        {title}
    </NavLink>
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
    
    const handleLinkClick = () => {
        if (isMobile()) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <>
        <nav className="newnavbar">
        <Logo />
        <button className="menu-button" onClick={toggleMenu} ref={hamburgerRef}>
            ☰
        </button>

        {menuOpen && (
        <div className={`spacer ${menuOpen ? 'open' : ''}`} ref={navRef} >
            <Card title="Strona główna" where="" onLinkClick={handleLinkClick}/>
            <Card title="Zespół" where="Zespol" onLinkClick={handleLinkClick}/>
            <Card title="Cele projektowe" where="Cele" onLinkClick={handleLinkClick}/>
            <Card title="Opracowane rozwiązania" where="Rozwiazania" onLinkClick={handleLinkClick}/>
        </div>
        )}
    </nav>
    {menuOpen && <div className="overlay-nav_" onClick={toggleMenu} />}
    </>
    );
};

export default NewNavbar;