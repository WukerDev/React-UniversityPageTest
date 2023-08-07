import React from 'react';
import './NewNav.scss'
import logo from './ukw.svg'
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

const NewNavbar: React.FC = () => (
    <nav className="newnavbar">
        <div className="spacer" >
            <Logo />
            <Card title="Strona główna" where=""/>
            <Card title="Zespół" where="Zespol" />
            <Card title="Cele projektowe" where="Cele" />
            <Card title="Opracowane rozwiązania" where="Rozwiazania" />
        </div>
    </nav>
);

export default NewNavbar;