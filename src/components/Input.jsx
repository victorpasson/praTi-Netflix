// Importando biblioteca
import styled from "styled-components";

// Definicao dos estilos
const CInput = styled.input`
    background-color: rgba(15, 15, 15, 1);
    color: #B7B7B7;
    font-size: 14px;
    font-weight: 500;
    border-color: ${props => props.bordercolor};
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    padding: 14px 15px;
    width: ${props => props.width ? props.width : "300px"};
    margin: 7px 0;
`
const CError = styled.p`
    margin: 0;
    margin-bottom: 5px;
    color: rgba(220, 22, 9, 1);
    font-size: 12px;
    text-align: left;
`

const Input = ({ id, type, value, setValue, error , placeholder, onBlur, ...props}) => {
    // Variavel para a cor da borda
    let bordercolor;

    // Definindo qual e a cor da borda
    if(error){
        // Se com erro, vermelha
        bordercolor = "rgba(220, 22, 9, 1)";
    } else {
        // Sem erro, cinza
        bordercolor = "rgba(94, 94, 94, 0.5)";
    }

    return (
        <div>
            <CInput 
                id={id} 
                type={type} 
                value={value} 
                onChange={(event) => setValue(event.target.value)} 
                placeholder={placeholder}
                onBlur={onBlur}
                bordercolor={bordercolor}
                {...props}
            />
            {error && <CError><span style={{fontSize: 15, marginRight:3}} className="material-symbols-outlined">cancel</span>{error}</CError>}
        </div>
        
    )
}

export default Input;