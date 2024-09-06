// Importando Biblioteca
import styled from "styled-components";

// Imagens
import BackgroundImage from "../assets/netflix-background-home.jpg";

// Components
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Footer from "../components/Footer";

// Definindo os estilos
const Background = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
`

const Container = styled.div`
    height: 100vh;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`
const Formulario = styled.div`
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2em 4em;
    color: #FFFFFF;
    text-align: center;
    height: calc(100% - 20%);

    h2{ 
        text-align: left;
        font-size: 30px;
    }
`

const Home = () => {
    return(
        <Background>
            <Container>
                <Navbar/>
                <Formulario>
                    <Login/>
                </Formulario>
            </Container>
            <Footer/>
        </Background>
    )
}

export default Home;