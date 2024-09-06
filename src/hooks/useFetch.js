// Importando bibliotecas
import axios from "axios";

// Hooks
import { useCallback, useState } from "react";

// Definicao do URL padrao para requisicao
const URL = "https://api.themoviedb.org/3/discover/movie?api_key=a25de314af03875f280fce3fc8351b3c&language=pt-BR&page="

const useFetch = () => {
    // Estado para os dados e erro
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Importando do contexto

    // Funcao para requisicao
    const request = useCallback(async (pagina, filter, options = null) => {
        // Variavel para a resposta
        let response; 

        try {
            // Comeca setando os estados
            setError(null);
            setLoading(true);

            // Fazendo a requisicao
            response = await axios.get(URL + pagina + filter, options);
        } catch (erro) {
            // Caso ocorra um erro, seta o erro
            setError("Ocorreu um erro durante a requisição." + erro)
        } finally {
            // Finaliza setando os novos estados
            setData(response.data);
            setLoading(false)
        }

        // Se tiver resposta, retorna ela na funcao request
        if (response) {
            return { response }
        }

    }, [])

    return { data, error, loading, request };
}

export default useFetch;