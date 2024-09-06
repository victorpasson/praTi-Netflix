// Importando bibliotecas
import styled from "styled-components";

// Hooks
import { useState } from "react";

// Componentes
import Button from "./Button";
import Input from "./Input";

// Definicao dos estilos
const Link = styled.a`
    text-decoration: none;
    color: white;
    display: block;
    margin: 10px 0;
`

const Novo = styled.p`
    text-align: left;
    color: #B4B4B4;

    span {
        color: #fff;
        font-weight:bold;
        cursor: pointer;
    
        &:hover {
            text-decoration: underline;
        }
    }
`

const Login = () => {
    // Estados para o login
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(null)
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null)

    // Funcao para quando sair do input
    const handleBlur = (type) => {
        if (type === "username") {
            setUsernameError(null);
            if (username == '') {
                setUsernameError("Informe um email ou número de telefone válido")
            }
        }

        if (type === "password") {
            setPasswordError(null);
            if (password == '') {
                setPasswordError('A senha deve ter entre 4 e 60 caracteres.')
            }
        }
    }
    
    return(
        <>
            <h2>Entrar</h2>
            <Input 
                type="text" 
                value={username} 
                setValue={setUsername} 
                placeholder="Email ou número de celular"
                error={usernameError}
                onBlur={() => handleBlur("username")}
            />
            <Input 
                type="password" 
                value={password} 
                setValue={setPassword} 
                placeholder="Senha"
                error={passwordError}
                onBlur={() => handleBlur("password")}
            />
            <Button heigth="10px" width="300px">Entrar</Button>
            <p>OU</p>
            <Button dark heigth="10px" width="300px">Usar um código de acesso</Button>
            <Link href="#">Esqueceu a senha?</Link>
            <Novo>Novo por aqui? <span>Assine agora.</span></Novo>
        </>
    )
}

export default Login;