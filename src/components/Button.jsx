// Importando bibliotecas
import styled from "styled-components"

// Criando os estilos
const CButton = styled.button`
    color: #FFFFFF;
    background-color: ${props => props.dark ? "#353739" : "#E50914"};
    font-size: ${props => props.fontzise ? props.fontzise : "16px"};
    font-weight: 600;
    padding: ${props => props.heigth ? props.heigth : '10px'} 0;
    width: ${props => props.width ? props.width : '300px'};
    border-radius: 5px;
    border-style: none;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 7px 0;
    transition: 0.3s;

    &:hover {
        background-color: ${props => props.dark ? "#2b2b2e" : "#C11119"};
    }
`

const Button = ({handleCLick, children, ...props}) => {
    return(
        <CButton onClick={handleCLick} {...props}>
            {children}
        </CButton>
    )
}

export default Button;