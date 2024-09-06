// Importando Bibliotecas
import styled from "styled-components"

// Definicao dos estilos
const Circle = styled.span`
    box-sizing: border-box;
    color: #a5a4a3;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #a5a4a3;
    border-radius: 100px;
    padding: 10px;
    cursor: pointer;

    &:hover{
        color: #fff;
        border-color: #fff;
    }
`

const CircleCardButton = ({materialIcon}) => {
    return(
        <Circle className="material-symbols-outlined">
            {materialIcon}
        </Circle>
    )
}

export default CircleCardButton;