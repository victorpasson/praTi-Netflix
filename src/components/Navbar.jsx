// Importando Bibliotecas
import styled from "styled-components";

// Imagens
import Logo from "../assets/logo.png"

// Definicao dos estilos
const Navegacao = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin: 0;
        text-indent: -10000px;
        background-image: url(${Logo});
        background-size: cover;
        width: 200px;
        height: 50px;
        cursor: pointer;
    }
`

const Navbar = () => {
    return(
        <Navegacao>
            <h1>Netflix</h1>
        </Navegacao>
    )
}

export default Navbar;