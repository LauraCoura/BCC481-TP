// Importando bibliotecas
import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Importando assets
import { PESSOAL_URL, ENSINO_URL, COCIC_URL, PESQUISA_URL, EXTENSAO_URL, NOTICIAS_URL } from '../config';
import logos from '../images/logos.png'
import decom_icone from '../images/decom_icone.png';

const Header = () => {
    return(
        <header className='header'>
            <picture className='imageHeader'>
                <source media="(min-width: 100px)" srcSet={decom_icone} className="imageHeader"/>
                <img src={decom_icone} className="imageHeader"/>
            </picture>

            <nav>
                <a href='/'>DECOM</a>
                <Link to="/noticias" style={{color: '#2EA8AF'}}>NOTÍCIAS</Link>
                <a href={PESSOAL_URL}>PESSOAL</a>
                <a href={ENSINO_URL}>ENSINO</a>
                <a href={COCIC_URL}>COCIC</a>
                <a href={PESQUISA_URL}>PESQUISA</a>
                <a href={EXTENSAO_URL}>EXTENSÃO</a>
            </nav>
        </header> 
    )
}

const Footer = () => {
    const info = ['Departamento de Computação - ICEB', <br/>, 'Universidade Federal de Ouro Preto',
    <br/>, 'Campus Universitário Morro do Cruzeiro', <br/>, 'CEP 35400-000 | Ouro Preto - MG, Brasil',
    <br/>, 'Telefone: +55 31 3559-1692 | decom@ufop.edu.br'];

    return(
        <div className='footer'>
            <picture className='imageFooter'>
                <source media="(min-width: 100px)" srcSet={logos} className="imageFooter"/>
                <img src={logos} className="imageFooter"/>
            </picture>

            <p>
                {info}
            </p>
        </div>
    )
}

const News = () => {
    const newsMar2023 = [
        {title: 'Agenda defesas monografias DECOM 2022-2', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/agenda-defesas-monografias-decom-20222'},
        {title: 'Processo Seletivo - Vagas com bolsa para doutorado', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/processo-seletivo-vagas-com-bolsa-para-doutorado'},
        {title: 'Aula Magna do PPGCC, dia 24/03/2023 as 10:00', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/aula-magna-do-ppgcc-dia-24032023-1000'},
    ]

    const newsFev2023 = [
        {title: 'Defesa de mestrado do discente Guilherme Lopes Silva, dia 07/03/2023, as 14:00', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-mestrado-do-discente-guilherme-lopes-sil'},
        {title: 'Defesa de mestrado do discente Eduardo Chagas, dia 01/03/2023, as 09:00.', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-mestrado-do-discente-eduardo-chagas-dia-'},
        {title: 'Alocação das disciplinas 2023/1', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/alocacao-das-disciplinas-20231'},
        {title: 'Defesa de doutorado do discente Leonardo Cabral, dia 07/03/2023 as 13:30.', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-doutorado-do-discente-leonardo-cabral-di'},
        {title: 'Decisões 125 RO PPGCC', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/decisoes-125-ro-ppgcc'},
        {title: 'Defesa de mestrado do discente João Paulo Alvarenga, dia 10/03/2023, as 10:00.', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-mestrado-do-discente-joao-paulo-alvareng'},
        {title: 'Grade de disciplinas 2023/1 e alocação das disciplinas', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/grade-de-disciplinas-20231-e-datas-de-matricula'},
        {title: 'Defesa de mestrado do discente Wemerson Lima, dia 23/02/2023, as 17:30.', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-mestrado-do-discente-wemerson-lima-dia-2'},
        {title: 'Defesa de mestrado do discente Maycoin Amaro, dia 17/02/2023, as 09:00.', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/defesa-de-mestrado-do-discente-maycoin-amaro-dia-1'},
        {title: 'Bolsa de pós-doutorado blockchain, IoT e cloud computing', link: 'http://www3.decom.ufop.br/decom/noticias/acervo/bolsa-de-pos-doutorado-no-ppgcc-ufpi'},
    ]

    return(
        <body className='body'>
            <Header />
            <h1 className='title-news'>NOTÍCIAS</h1>
            
            <h2 className='subtitle-news'>MARÇO - 2023</h2>
            <div className='news'>
                { newsMar2023.map((item) => (
                    <a href={item.link}  className='link-news'>
                        <p>◾ {item.title}</p>
                    </a>
                ))}
            </div>
            

            <h2 className='subtitle-news'>FEVEREIRO - 2023</h2>
            <div className='news'>
                { newsFev2023.map((item) => (
                    <a href={item.link} className='link-news'>
                        <p>◾ {item.title}</p>
                    </a>
                ))}
            </div>

            <Footer />
        </body>
    )
}

export default News;