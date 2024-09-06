// Importando Biblioteca
import styled from "styled-components";

// Imagens
import Logo from "../assets/logo.png"
import CircleLoading from "../assets/CircleLoading";

// Definindo estilos
const DivLoading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        width: 300px;
        height: 200px;
    }
`

const LogoImage = styled.img`
    width: 300px;
`

const Loading = () => {
    return(
        <DivLoading>
            <LogoImage src={Logo}/>
            <CircleLoading/>
        </DivLoading>
    )
}

export default Loading;