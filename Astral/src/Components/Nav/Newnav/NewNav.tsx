import React, { useState, useEffect } from 'react';
import './NewNav.scss'
import logo from '../../../../public/ukw.svg'
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
        <img src={logo} alt="UKW Logo"/>
    </div>
);

const NewNavbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(true);
            } else {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
    <nav className="newnavbar">
        <Logo />
        <button className="menu-button" onClick={toggleMenu}>
            ☰
        </button>
        {menuOpen && (
        <div className={`spacer ${menuOpen} ? 'open' : ''}`} >
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