// Importando bibliotecas
import styled from "styled-components";

// Hooks
import { useEffect, useState } from "react";

// Imagens
import Logo from "../assets/logo.png"
import PictureProfile from "../assets/netflix-profile.jpg"

// Definicao dos estilos
const CNavbarCatalogo = styled.nav`
    background: ${props => props.isblack ? "rgba(1, 1, 1, 0.95)" : "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.10) 80%, rgba(0,0,0,0) 90%)"};
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0 20px;
    position: fixed;
    z-index: 10000;

    transition: background 0.8s;

    h1 {
        margin: 0;
        text-indent: -10000px;
        background-image: url(${Logo});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 150px;
        height: 100%;
        cursor: pointer;
    }
`

const Gadgets = styled.div`
    display: flex;
    gap: 20px;
`

const Gadget = styled.span`
    color: #fff;
    cursor: pointer;
    font-size:28px;
`

const ProfilePicture = styled.img`
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
`

const NavBarCatalogo = () => {
    // Estado para definir se a barra deve ser transparente ou não
    const [isBlack, setIsBlack] = useState(false);
    
    useEffect(() => {
        // Evento para quando rolar a pagina
        window.addEventListener('scroll', () => setIsBlack(window.scrollY > 10));

        //Tira o evento quando a pagina é desmontada
        return () => {
            window.removeEventListener('scroll', () => setIsBlack(window.scrollY > 10))
        }
    }, [])

    return(
        <CNavbarCatalogo isblack={isBlack}>
            <h1>NetFlix</h1>
            <Gadgets>
                <Gadget className="material-symbols-outlined">search</Gadget>
                <Gadget className="material-symbols-outlined">notifications</Gadget>
                <ProfilePicture src={PictureProfile}/>
            </Gadgets>
        </CNavbarCatalogo>
    )
}

export default NavBarCatalogo;