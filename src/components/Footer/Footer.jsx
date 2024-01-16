import React, {useEffect } from 'react';
import './footer.scss'
import video2 from '../../assets/video2.mp4'
import {FiSend} from 'react-icons/fi';
import {GiBrazil} from 'react-icons/gi';
import {AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import {FaTripadvisor, FaTiktok } from 'react-icons/fa';
import {FiChevronRight } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (

    
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type=''></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>ENTRE EM CONTATO</small>
            <h2>Viagem com a gente!</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Digite seu endereço de email:' />
            <button data-aos='fade-up' className="btn flex" type='submit'>
              Enviar<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div data-aos='fade-up' className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <GiBrazil className='icon' /> ViagemBrasil.
              </a>
            </div>

            <div className='footerParagraph'>
              Lorem ipsum dolor smoms omaoam omaoam ,osmos somsdosm, aunba ahnsnsfaded, ahaba agabaajls. Gbshsn fafefdbra, aha  hba ajanskak sksmks.
            </div>

            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
              <FaTiktok className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>
                NOSSA AGENCIA
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Serviços
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Urgencia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Agencia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Turismo
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Pagamento
              </li>
            </div>
            {/*second*/}
            <div className='linkGroup'>
              <span className='groupTitle'>
                PARCEIROS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Latam
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                  TripAdvisor
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                HotelWorlds
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Trivago
              </li>
            </div>
            <div className='linkGroup'>
              <span className='groupTitle'>
                ULTIMOS MINUTOS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Rio de Janeiro
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                São Paulo
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Florianopolis
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Curitiba
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'
                />
                Belo Horizonte
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>O MELHOR WEBSITE DE VIAGENS</small>
            <small>Copyrights reserved - Paulo.Dev 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer