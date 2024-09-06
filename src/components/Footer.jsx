// Importando Bibliotecas
import styled from "styled-components";

// Criacao dos estilos
const RodapeBackground = styled.div`
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rodape = styled.footer`
    max-width: 1200px;
    padding: 50px 100px 80px 100px;
    color: #B3B3B3;

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 30px 0;
        align-self: self-start;
    }
`

const Links = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px
`

const Link = styled.a`
    min-width: 150px;
    color: #B3B3B3;
    margin-right: 100px;
    font-size: 14px;
`

const Footer = () => {
    return(
        <RodapeBackground>
            <Rodape>
                <h3>Dúvidas? Ligue 0800 591 2876</h3>
                <Links>
                    <Link href="#">Perguntas frequentes</Link>
                    <Link href="#">Central de Ajuda</Link>
                    <Link href="#">Termos de Uso</Link>
                    <Link href="#">Privacidade</Link>
                    <Link href="#">Preferência de cookies</Link>
                    <Link href="#">Informações corporativas</Link>
                </Links>
            </Rodape>
        </RodapeBackground>
    )
}

export default Footer;