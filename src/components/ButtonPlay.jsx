// Importacao da Biblioteca
import styled from "styled-components"

// Criacao dos estilos
const PlayButton = styled.button`
    box-sizing: content-box;
    color: #000000;
    background-color: #fff;
    font-size: ${props => props.fontzise ? props.fontzise : "16px"};
    font-weight: 600;
    padding: ${props => props.heigth ? props.heigth : '10px'} 0;
    padding-right: 5px;
    width: ${props => props.width ? props.width : '120px'};
    border-radius: 5px;
    border-style: none;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 7px 0;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    &:hover {
        background-color: #CDCDCD;
    }
`

const ButtonPlay = ({...props}) => {
    return(
        <PlayButton {...props}>
            <span className="material-symbols-outlined">play_arrow</span>
            Assistir
        </PlayButton>
    )
}

export default ButtonPlay;