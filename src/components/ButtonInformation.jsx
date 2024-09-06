// Importacao da biblioteca
import styled from "styled-components"

// Criacao dos estilos
const InformationButton = styled.button`
    box-sizing: content-box;
    color: #fff;
    background-color: #535452;
    font-size: ${props => props.fontzise ? props.fontzise : "16px"};
    font-weight: 600;
    padding: ${props => props.heigth ? props.heigth : '10px'} 0;
    padding-right: 5px;
    width: ${props => props.width ? props.width : '220px'};
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
        background-color: #414040;
    }
`

const ButtonInformation = ({...props}) => {
    return(
        <InformationButton {...props}>
            <span className="material-symbols-outlined">info</span>
            Mais informações
        </InformationButton>
    )
}

export default ButtonInformation;