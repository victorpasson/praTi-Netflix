// Hooks
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// Componentes
import FilmesSection from "../../components/FilmesSection";


const Animacao = () => {
    // Setando os dados
    const { request, data} = useFetch();

    // Efeito para quando carregar a pagina
    useEffect(() => {
        // Funcao para requisicao
        async function fetchData() {
            await request(1, "&sort_by=vote_count.desc&with_genres=16&vote_count.gte=200")
        }
        fetchData();

    }, [request])

    return(
        <FilmesSection sectionTitle={"Animação"} heightCard={"250px"} data={data}/>
    )
}

export default Animacao;