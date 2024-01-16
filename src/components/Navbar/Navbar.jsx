import React, { useState } from 'react';
import './navbar.scss';
import { GiBrazil } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb';


const Navbar = () => {
  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar activeNavbar')
  }

  return (
    <section className='navBar'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1>
            <GiBrazil className='icon' />
               ViagemBrasil </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="" className="navLink">Inicio</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Pacotes</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Mais Visitados</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Sobre</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Parceiria</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Novos</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Contatos</a>
            </li>

            <button className="btn">
              <a href="#">VIAGE AGORA</a>
            </button>
          </ul>
          <div onClick={removeNavbar}  className="closeNavbar">
            <AiFillCloseCircle className='icon'   />
          </div>
        </div>
        
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar