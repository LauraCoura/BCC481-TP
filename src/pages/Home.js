// Importando bibliotecas
import '../App.css';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Importando assets
import { PESSOAL_URL, ENSINO_URL, COCIC_URL, PESQUISA_URL, EXTENSAO_URL, AULAS_URL, ATENDIMENTO_URL, NOTICIAS_URL } from '../config';
import blackboard from '../images/blackboard.png';
import calendar from '../images/calendar.png';
import iceb from '../images/iceb.png';
import imobilis from '../images/imobilis.png';
import ufop from '../images/ufop.png';
import logos from '../images/logos.png'
import decom_icone from '../images/decom_icone.png';
import iconPerson from '../images/icon_person.png';
import iconPresentation from '../images/icon_presentation.png';
import iconCalendar from '../images/icon_calendar.png';
import iconTube from '../images/icon_tube.png';
import iconFacebook from '../images/icon_facebook.png';
import iconInstagram from '../images/icon_instagram.png';
import iconTwitter from '../images/icon_twitter.png';
import iconLinkedin from '../images/icon_linkedin.png';
import iconYoutube from '../images/icon_youtube.png';

const Header = () => {
    return(
        <header className='header'>
            <picture className='imageHeader'>
                <source media="(min-width: 100px)" srcSet={decom_icone} className="imageHeader"/>
                <img src={decom_icone} className="imageHeader"/>
            </picture>

            <nav>
                <a href='/'>DECOM</a>
                <Link to="/noticias">NOTÍCIAS</Link>
                <a href={PESSOAL_URL}>PESSOAL</a>
                <a href={ENSINO_URL}>ENSINO</a>
                <a href={COCIC_URL}>COCIC</a>
                <a href={PESQUISA_URL}>PESQUISA</a>
                <a href={EXTENSAO_URL}>EXTENSÃO</a>
            </nav>
        </header> 
    )
}

const SlideShow = () => {
    const images = [iceb, ufop, imobilis];
    const [index, setIndex] = useState(0);
    const delay = 2500;
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
    }, [index]);

    return(
        <div className='slideshow'>
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((src, index) => (
                    <div className="slide" key={index}>
                        <picture className='imageCarousel'>
                            <source media="(min-width: 100px)" srcSet={src} className='imageCarousel'/>
                            <img src={src} className='imageCarousel'/>
                        </picture>
                    </div> 
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx); }}></div>
                ))}
            </div>
        </div>
    )
}

const Title = () => {
    const subtitle = ['Departamento de Ciência da Computação', <br/>, 'da Universidade Federal de Ouro Preto'];
    return(
        <div className='title'>
            <h1>Bem vindo ao DECOM!</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

const CardSchedules = ({title, subtitle, image, url}) => {
    return(
        <a href={url} className='linkCard'>
            <button className='cardSchedule'>
                <div className='imageCardDiv'>
                    <picture className='imageCard'>
                        <source media="(min-width: 100px)" srcSet={image} className="imageCard"/>
                        <img src={image} className="imageCard"/>
                    </picture>
                </div>

                <div className='textCard'>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </button>
        </a>
    )
}

const Footer = () => {
    const info = ['Departamento de Computação - ICEB', <br/>, 'Universidade Federal de Ouro Preto',
    <br/>, 'Campus Universitário Morro do Cruzeiro', <br/>, 'CEP 35400-000 | Ouro Preto - MG, Brasil',
    <br/>, 'Telefone: +55 31 3559-1692 | decom@ufop.edu.br'];

    const social = [
        {image: iconFacebook, link: 'https://www.facebook.com/decomufop/?locale=pt_BR'},
        {image: iconInstagram, link: 'https://www.instagram.com/decom.ufop/'},
        {image: iconTwitter, link: 'https://twitter.com/decomufop'},
        {image: iconLinkedin, link: 'https://www.linkedin.com/company/departamento-de-computa%C3%A7%C3%A3o/'},
        {image: iconYoutube, link: 'https://www.youtube.com/channel/UCLyNoJPriWD9s8YaEGjspJw'},
    ]

    return(
        <div className='footer'>
            <div className='footerRight'>
                <picture className='imageFooter'>
                    <source media="(min-width: 100px)" srcSet={logos} className="imageFooter"/>
                    <img src={logos} className="imageFooter"/>
                </picture>

                <div className='rowSocial'>
                    { social.map((item) => (
                        <a className='buttonSocial' href={item.link}>
                            <picture className='imageSocial'>
                                <source media="(min-width: 20px)" srcSet={item.image} className="imageSocial"/>
                                <img src={item.image} className="imageSocial"/>
                            </picture>
                        </a>
                    ))}
                </div>
            </div>
            
            <p>
                {info}
            </p>
        </div>
    )
}

const CardNews = ({title, buttonTitle, list}) => {
    return(
        <div className='cardNews'>
            <h3>{title}</h3>

            {list.map((item) => (
                <div className='list'>
                    <Link to={item.link} className='linkNews'>◾ {item.title}</Link>
                </div>
            ))}

            <a href={NOTICIAS_URL} className='buttonNews'>
                {buttonTitle}
            </a>
        </div>
    )
}

const CardQuickAccess = () => {
    const buttons = [
        {image: iconPresentation, title: 'Defesas', link: NOTICIAS_URL},
        {image: iconCalendar, title: 'Eventos', link: NOTICIAS_URL},
        {image: iconTube, title: 'Laboratórios', link: 'http://www3.decom.ufop.br/decom/pesquisa/labs/'},
        {image: iconPerson, title: 'Pessoal', link: 'http://www3.decom.ufop.br/decom/pessoal/professores/'},
    ]

    return(
        <div className='cardQuick'>
            <h3>Acesso rápido</h3>

            <div className='rowButtons'>
            {buttons.map((item) => (
                <a href={item.link}>
                    <button className='cardButtons'>
                        <picture className='imageButton'>
                            <source media="(min-width: 100px)" srcSet={item.image} className='imageButton'/>
                            <img src={item.image} className='imageButton'/>
                        </picture>
                        <h2>{item.title}</h2>
                    </button>
                </a>
            ))}
            </div>
        </div>
    )
}

const Home = () => {
    const subtitleAulas = ['Datas e horários das disciplinas', <br/>, 'oferecidas pelo DECOM'];
    const subtitleAtendimento = ['Horário dos professores para', <br/>, 'atendimento dos alunos'];

    const listNews = [
        {
            title: 'Processo Seletivo - Vagas com bolsa para doutorado',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/processo-seletivo-vagas-com-bolsa-para-doutorado',
        },
        {
            title: 'Bolsa de pós-doutorado blockchain, IoT e cloud computing',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/bolsa-de-pos-doutorado-no-ppgcc-ufpi',
        },
        {
            title: 'Resultado Final– Edital PROGEP Nº 24/2022 - Metodologias e Técnicas de Computação - Item 08',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/resultado-final-edital-progep-n-242022-metodologia',
        },
        {
            title: 'Edital Tutoria BCC701 (2022-1)',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/edita-tutoria-bcc701-2022-1',
        },
    ];

    const listJobs = [
        {
            title: 'Seleção Monitoria URB126 (Métodos Computacionais), DEURB',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/selecao-monitoria-urb126-metodos-computacionais-de',
        },
        {
            title: 'Aberto o processo seletivo do Programa de Trainnee 2021.1 do laboratório TerraLAB, até 05 de março!',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/aberto-o-processo-seletivo-do-programa-de-trainnee',
        },
        {
            title: 'Vagas de Estágios na Primetals Technologies Brazil',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/vagas-de-estagios-na-primetals-technologies-brazil',
        },
        {
            title: 'Vagas na empresa Skore',
            link: 'http://www3.decom.ufop.br/decom/noticias/acervo/vagas-na-empresa-skore',
        },
    ];

    return(
        <body className='body'>
            <Header />
            <SlideShow />
            
            <Title />

            <div className='row'>
                <CardSchedules title='Horários das Aulas' subtitle={subtitleAulas} image={blackboard} url={AULAS_URL}/>
                <CardSchedules title='Horários de Atendimento' subtitle={subtitleAtendimento} image={calendar} url={ATENDIMENTO_URL}/>
            </div>

            <div className='row'>
                <CardNews title={'Últimas Notícias'} buttonTitle={'Veja todas as notícias'} list={listNews}/>
                <CardNews title={'Estágios e Empregos'} buttonTitle={'Veja todos os empregos'} list={listJobs}/>
            </div>

            <div className='row'>
                <CardQuickAccess />
            </div>
            

            <Footer />
        </body>
    )
}

export default Home;