// Importando Bibliotecas
import axios from "axios";
import styled from "styled-components";

// Hooks
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

// Componentes
import ButtonPlay from "./ButtonPlay";
import ButtonInformation from "./ButtonInformation";

// Criação dos estilos
const BackgroundBanner = styled.div`
    box-sizing: border-box;
    min-height: 85vh;
    background-image: url(${props => props.bannerimage});
    background-position: center;
    background-size: cover;
    background-attachment: scroll;
` 
const BannerItens = styled.div`
    background: rgba(0,0,0, 0.5);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.80) 15%, rgba(0,0,0,0.5) 100%);
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center; 
    padding: 0 3em;

    h1{ 
        margin-top: 0;
        color: #fff;
        font-weight: bold;
        font-size: 4em;
    }
`

const Informacoes = styled.section`
    
`

const CRelevancia = styled.span`
    color: #46D369; 
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 2px;
    margin-right: 20px;
`

const Year = styled.span`
    color: #fff; 
    font-size: 1.5em;
    margin-right: 20px;
`

const Temporadas = styled.span`
    color: #fff; 
    font-size: 1.5em;
`
const Sinopse = styled.p`
    margin: 10px 0 10px 0;
    color: #fff; 
    font-size: 1.5em;
    max-width: 560px;
`
const CGeneros = styled.p`
    margin: 0 0 10px 0;
    color: #fff; 
    font-size: 1.5em;
    font-weight: bold;
    max-width: 530px;

    span {
        font-weight: normal;
        color: #B9B2B3;
    }
`
const Buttons = styled.div `
    display: flex;
    gap: 10px;
`

const BannerSection = ({setIsLoading}) => {
    // Estado para guardar a resposta dos filmes
    const [data, setData] = useState(null);

    // Funcao para fazer requisicao
    const { request } = useFetch();
    
    // Quando a pagina for carregada executara
    useEffect(() => {
        // Gerando uma pagina aleatoria
        const sortPage = Math.floor(Math.random() * 20);
        // Item aleatorio dentro de uma pagina
        const sortItem = Math.floor(Math.random() * 20);

        let newResponse;

        // Requisicao dos dados
        async function fetchData() {
            try{
                setIsLoading(true)
                const { response } = await request(sortPage, "")
                const id = response.data.results[sortItem].id
                newResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a25de314af03875f280fce3fc8351b3c&language=pt-BR`);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
                setData(newResponse.data)
            }
            
        }
        fetchData();

    }, [request, setIsLoading])
    
    return(
        <>
            {data && (
                <BackgroundBanner bannerimage={"https://image.tmdb.org/t/p/original" + data.backdrop_path}>
                    <BannerItens>
                        <h1>{data.title}</h1>
                        <Informacoes>
                            <CRelevancia>{Math.floor(data.popularity)}% relevante</CRelevancia>
                            <Year>{data.release_date.substring(0, 4)}</Year>
                            <Temporadas>{Math.floor(data.vote_average * 100) / 100} Rating</Temporadas>
                        </Informacoes>
                        <Sinopse>
                            {data.overview.substring(0, 200)}...
                        </Sinopse>
                        <CGeneros>
                            Gêneros: <span>{data.genres.map((item, index) => {
                                if (index !== 0 ){
                                    return (
                                        <span key={item.id}>, {item.name}</span>
                                    )
                                } else {
                                    return <span key={item.id}>{item.name}</span>
                                }
                            })}</span>
                        </CGeneros>
                        <Buttons>
                            <ButtonPlay width={"150px"} fontzise={"22px"}/>
                            <ButtonInformation width={"250px"} fontzise={"22px"}/>
                        </Buttons>
                    </BannerItens>
                </BackgroundBanner>
            )}
        </>
    )
}

export default BannerSection;