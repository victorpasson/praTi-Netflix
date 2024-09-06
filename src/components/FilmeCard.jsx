// Importando Bibliotecas
import styled, {css, keyframes} from "styled-components";

// Hooks
import { useState } from "react";

// Importando Componentes
import ButtonPlay from "./ButtonPlay";
import CircleCardButton from "./CircleCardButton";


// Criacao dos estilos
const rOpacity = keyframes`
    to {
        opacity: 1;
        visibility: visible;
        transform: scale(1.1);
    }
`

const Card = styled.article`
    display:flex;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 30px;
    position: relative;
    height: ${props => props.heigth};

    &:hover{
        z-index: 100;
    }
`

const Cartaz = styled.img`
    width: 167px;
    height: ${props => props.heigth};
    border-radius: 2px;

    ${props => props.animated === "animated" ? css`
        transform: scale(1.1);
    `: css``}    
`
const Descricao = styled.div`
    
    background-color: rgba(0, 0, 0, 0.8);
    width: 350px;
    height: ${props => props.heigth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    left: 194px;
    ${props => props.animated === "animated" ? css`
        animation-name: ${rOpacity};
        animation-duration: 0.08s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    ` : css``}
`

const DescricaoTitle = styled.h3`
    margin: 20px 0 0 0;
    font-size: 24px;
    color: #ffff;
    text-align: center;
`

const DescricaoSinopse = styled.p`
    color: #fff;
    text-align: left;
    padding: 0 20px;
`

const ButtonsZone = styled.span`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const FilmeCard = ({filmeImage, filmeTitle , filmeDescription , heigth}) => {
    // Estado para definir se a descricao estara visivel ou nao
    const [visibility, setVisibility] = useState("");

    // Quando passar a mao no card transforma ele em visivel
    const handleSinopse = () => {
        setVisibility(prev => prev === "" ? "animated" : "");
    }

    return(
        <Card onMouseEnter={handleSinopse} onMouseLeave={handleSinopse} heigth={heigth}>
            <Cartaz src={filmeImage} heigth={heigth} animated={visibility}/>
            <Descricao heigth={heigth} animated={visibility}>
                <DescricaoTitle>
                    {filmeTitle}
                </DescricaoTitle>
                <DescricaoSinopse>
                    {filmeDescription.substring(0, 140)}...
                    <ButtonsZone>
                        <ButtonPlay/>
                        <CircleCardButton materialIcon={"add"}/>
                        <CircleCardButton materialIcon={"thumb_up"}/>
                        <CircleCardButton materialIcon={"thumb_down"}/>
                    </ButtonsZone>
                </DescricaoSinopse>
            </Descricao>
        </Card>
    )
}

export default FilmeCard;