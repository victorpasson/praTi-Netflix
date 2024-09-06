// Importando Biliotecas
import styled from "styled-components";

// Hooks
import { useState, useRef } from "react";

// Componentes
import FilmeCard from "./FilmeCard";

// Definicao dos estilos
const Title = styled.h2`
    color: #FFFFFF;
    margin: 20px 0 0 40px;
    font-size: 2.3em;
`

const Rolagem = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 0;
`

const Filmes = styled.div`
    margin-left: 25px;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px;

    &::-webkit-scrollbar{
        display: none;
    }
`

const ButtonScrollLeft = styled.span`
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #ffffff;
    cursor: pointer;
    height: 100%;
    font-size: 28px;
    position: absolute;
    left: 0;
    z-index: 100;
    -webkit-user-select: none;
    -ms-user-select: none; 
    user-select: none;

    ${props => props.scroolposition === 0 ? `
        visibility: hidden;
    ` : ``}

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 38px;
    }
`
const ButtonScrollRigth = styled.span`
    display: flex;
    align-items: center;
    justify-content: start;
    color: #ffffff;
    cursor: pointer;
    height: 100%;
    font-size: 28px;
    position: absolute;
    right: 0;
    z-index: 100;
    -webkit-user-select: none;
    -ms-user-select: none; 
    user-select: none; 

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 38px;
    }
`

const FilmesSection = ({sectionTitle , heightCard, data}) => {
    // Estado para a posição da rolagem
    const [scroolposition, setScroolPosition] = useState(0);

    // Criando a referencia
    const containerRef = useRef();

    // Funcao para quando clicar no botão de scroll
    const handleScroll = (scrollAmount) => {
        // Calculando a nova posição do scroll
        const newScrollPosition = scroolposition + scrollAmount;

        // Atualizando o estado com a nova posição
        setScroolPosition(newScrollPosition);

        // Acessando o container e setando a propriedade scrollLeft;
        containerRef.current.scrollLeft = newScrollPosition;
    }

    return(
        <>
            <Title>{sectionTitle}</Title>
            <Rolagem>
                <ButtonScrollLeft className="material-symbols-outlined" onClick={() => handleScroll(-350)} scroolposition={scroolposition}>arrow_back_ios</ButtonScrollLeft>
                <Filmes ref={containerRef}>
                    {data && data.results.map((movie) => (
                        <FilmeCard key={movie.id} filmeImage={"https://image.tmdb.org/t/p/w200" + movie.poster_path} filmeTitle={movie.title} filmeDescription={movie.overview} heigth={"250px"}/>
                    ))}
                </Filmes>
                <ButtonScrollRigth 
                    className="material-symbols-outlined" onClick={() => handleScroll(350)}>
                        arrow_forward_ios
                </ButtonScrollRigth>
            </Rolagem>
        </>
    )
}

export default FilmesSection;