import React, {useEffect } from 'react'
import './main.scss';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg'
import img14 from '../../assets/img14.jpg';
import img15 from '../../assets/img15.jpg'
import img16 from '../../assets/img16.jpg'
import img17 from '../../assets/img17.jpg';
import img20 from '../../assets/img20.jpeg';

import Aos from 'aos';
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Rio de Janeiro',
    location: ' Rio de Janeiro',
    grade: 'CULTURA, NATUREZA E TURISMO',
    fees: '$2000',
    description: 'Visitar o Rio de Janeiro é uma experiência única, já que a cidade oferece uma combinação fascinante de beleza natural, cultura vibrante e atividades emocionantes.  A cidade mais famosa do Brasil é popular por suas praias icônicas, como Copacabana e Ipanema, pão de açucar, natureza e a grande estatua do Cristo Redentor. '
  },
  {
     id: 2,
     imgSrc: img2,
     destTitle: 'São Paulo',
     location: 'São Paulo',
     grade: 'ARQUITETURA E TURISMO',
     fees: '$2000',
     description: ' Visitar São Paulo, a maior cidade do Brasil, é uma experiência única que oferece uma mistura de cultura, gastronomia, arte, negócios e diversidade. A vida noturna de São Paulo é agitada, com uma variedade de bares, baladas e casas de shows para todos os gostos. '
     },
     {
       id: 3,
       imgSrc: img3,
       destTitle: 'Salvador',
      location: 'Bahia',
      grade: 'ARQUITETURA, GASTRONOMIA E TURISMO',
      fees: '$1200',
       description: ' Visitar Salvador, a capital do estado da Bahia, no nordeste do Brasil, é uma experiência marcante devido à sua rica história, cultura vibrante, belas praias e influências africanas. O Pelourinho é um dos centros históricos mais bem preservados do Brasil.'
       },
       {
      id: 4,
       imgSrc: img4,
       destTitle: 'Florianopolis',
       location: 'Santa Catarina',
       grade: 'NATUREZA E TURISMO',
       fees: '$1800',
      description: ' Visitar Florianópolis, conhecida como "Ilha da Magia", é uma experiência encantadora que combina belas praias, natureza exuberante, cultura e uma atmosfera descontraída.Florianópolis é famosa por suas praias paradisíacas. '
       },
       
       {
       id: 5,
       imgSrc: img5,
       destTitle: 'Cataratas do Iguaçu',
       location: 'Parana',
       grade: 'NATUREZA',
       fees: '$3000',
       description: ' Visitar as Cataratas do Iguaçu é uma experiência única e impressionante. Localizadas na fronteira entre o Brasil e a Argentina, as Cataratas do Iguaçu são uma das maravilhas naturais mais espetaculares do mundo. As Cataratas do Iguaçu são compostas por mais de 270 quedas da agua ao longo de cerca de 2,7 quilômetros do Rio Iguaçu.'
      },
      {
       id: 6,
       imgSrc: img6,
       destTitle: 'Fernando de Noronha',
       location: 'Pernambuco',
       grade: 'NATUREZA E TURISMO',
       fees: '$5000',
       description: ' Fernando de Noronha é uma experiência extraordinária, uma vez que a ilha é conhecida por suas belezas naturais preservadas, águas cristalinas e uma rica vida marinha.'
      },
      {
       id: 7,
       imgSrc: img7,
       destTitle: 'Leinçóis Maranhenses',
       location: 'Maranhão',
       grade: 'NATUREZA E TURISMO',
       fees: '$2000',
       description: 'Os Lençóis Maranhenses é uma experiência única e inesquecível, proporcionando aos visitantes a oportunidade de explorar paisagens de dunas, lagoas cristalinas e ecossistemas únicos. Os Lençóis Maranhenses são conhecidos por suas vastas extensões de dunas de areia branca intercaladas com lagoas de água doce. '
      },
      {
       id: 8,
       imgSrc: img8,
       destTitle: 'Gramado e Canela',
       location: 'Rio Grande do Sul',
       grade: 'ARQUITETURA, GASTRONOMIA E TURISMO',
       fees: '$2000',
       description: 'Visitar Gramado e Canela, duas cidades encantadoras na região da Serra Gaúcha, no sul do Brasil, proporciona uma experiência repleta de charme, belezas naturais, arquitetura europeia, gastronomia deliciosa e diversas atrações. Gramado é conhecida por sua arquitetura inspirada em cidades europeias, com influências alemãs e italianas. '
      },
      {
       id: 9,
       imgSrc: img9,
       destTitle: 'Manaus',
       location: 'Amazonas',
       grade: 'NATUREZA E TURISMO',
       fees: '$3000',
       description: 'Visitar Manaus, a capital do estado do Amazonas, no coração da Floresta Amazônica, oferece uma experiência única de cultura, natureza exuberante e patrimônio histórico. Um dos fenômenos naturais mais impressionantes de Manaus é o Encontro das Águas, onde os rios Negro e Solimões correm lado a lado sem se misturar por alguns quilômetros. '
       
      },
      {
        id: 10,
        imgSrc: img10,
        destTitle: 'Jalapão',
        location: 'Tocantins',
        grade: 'NATUREZA E TURISMO',
        fees: '$2500',
        description: ' Visitar o Jalapão, no estado de Tocantins, é uma experiência incrível, repleta de paisagens deslumbrantes, aventuras ao ar livre e a oportunidade de explorar um dos destinos mais preservados e selvagens do Brasil. O Jalapão é conhecido por suas paisagens únicas e intocadas. Dentre as principais atrações, destacam-se as dunas alaranjadas do Deserto do Jalapão, os Fervedouros  e as cachoeiras. '
       },
       {
        id: 11,
        imgSrc: img11,
        destTitle: 'Refice',
        location: 'Pernambuco',
        grade: 'NATUREZA, GASTRONOMIA E TURISMO',
        fees: '$1000',
        description: ' Recife, uma cidade localizada no nordeste do Brasil, é uma experiência enriquecedora que oferece uma mistura única de história, cultura, praias e uma vibrante cena artística. Recife possui um centro histórico encantador, conhecido como Recife Antigo, com edifícios coloniais, igrejas antigas e praças pitorescas.  '
       },
       {
        id: 12,
        imgSrc: img12,
        destTitle: 'Ouro Preto',
        location: 'Minas Gerais',
        grade: 'ARQUITETURA, GASTRONOMIA E TURISMO',
        fees: '$900',
        description: ' Ouro Preto, em Minas Gerais, é como fazer uma viagem ao passado colonial do Brasil. Esta cidade histórica é conhecida por sua arquitetura barroca preservada, igrejas magníficas, ruas de paralelepípedos e uma rica herança cultural. Ouro Preto é famosa por sua arquitetura barroca bem preservada. As igrejas e edifícios históricos. '
       },
       {
        id: 13,
        imgSrc: img13,
        destTitle: 'Bunito',
        location: 'Mato Grosso do Sul',
        grade: 'NATUREZA E TURISMO',
        fees: '$2000',
        description: '  Bonito, no Mato Grosso do Sul, é uma experiência única, proporcionando aos visitantes a oportunidade de explorar cenários naturais deslumbrantes, águas cristalinas, grutas fascinantes e uma rica biodiversidade. Bonito é conhecido por seus rios de águas cristalinas, como o Rio da Prata e o Rio Sucuri.  '
       },
       {
        id: 14,
        imgSrc: img14,
        destTitle: 'Natal',
        location: 'Rio Grande do Norte',
        grade: 'NATUREZA, GASTRONOMIA E TURISMO',
        fees: '$1800',
        description: ' Natal, capital do estado do Rio Grande do Norte, é conhecida por suas praias deslumbrantes, dunas, coqueirais e uma atmosfera animada. Desfrute das belas praias de Natal, como a Praia de Ponta Negra, famosa por sua extensão de areia, comércio local e o Morro do Careca. '
       },
       {
        id: 15,
        imgSrc: img15,
        destTitle: 'Fortaleza',
        location: 'Ceara',
        grade: 'NATUREZA, GASTRONOMIA E TURISMO',
        fees: '$1000',
        description: ' Fortaleza, a capital do estado do Ceará, é conhecida por suas praias deslumbrantes, cultura vibrante e gastronomia deliciosa. A Praia de Iracema é uma das mais famosas de Fortaleza, oferecendo uma orla movimentada com bares, restaurantes, lojas e uma animada vida noturna. '
       },
       {
        id: 16,
        imgSrc: img16,
        destTitle: 'Belem',
        location: 'Para',
        grade: 'NATUREZA, GASTRONOMIA E TURISMO',
        fees: '$900',
        description: 'Belém, a capital do estado do Pará, é uma cidade rica em história, cultura e beleza natural. Passeie pelo Mangal das Garças, um parque ecológico com trilhas, viveiros de aves, borboletário e mirantes, proporcionando uma experiência tranquila em meio à natureza. '
       },
       {
        id: 17,
        imgSrc: img17,
        destTitle: 'Chapada dos Veadeiros',
        location: 'Goias',
        grade: 'NATUREZA E TURISMO',
        fees: '$1900',
        description: 'A Chapada dos Veadeiros, localizada no estado de Goiás, é uma região de beleza natural exuberante, com paisagens deslumbrantes, cachoeiras, trilhas e uma rica biodiversidade. Visite a Cachoeira Santa Bárbara, uma das mais famosas da região, conhecida por suas águas cristalinas e pela beleza cênica ao seu redor.'
       },
       {
        id: 18,
        imgSrc: img20,
        destTitle: 'Brasilia',
        location: 'DF',
        grade: 'ARQUITETURA E TURISMO',
        fees: '$2000',
        description: 'Brasília, a capital do Brasil e um marco na arquitetura moderna, proporciona uma experiência única, com sua estrutura urbana planejada e monumentos emblemáticos. Brasília é conhecida por sua arquitetura moderna, projetada por Oscar Niemeyer e Lucio Costa. '
       },
]

const Main = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Destinos mais visitados do Brasil
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
            return(
              <div key={id}
              data-aos='fade-up'
              className='singleDestination' >
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETALHES <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>

             

            
              
              
            )
          })
        }
      </div>
    </section>
  )
}

export default Main