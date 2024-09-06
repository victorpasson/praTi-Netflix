// Hooks
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// Componentes
import FilmesSection from "../../components/FilmesSection";


const MaisAssistidos = ({setIsLoading}) => {
    // Setando os dados
    const { request, data } = useFetch();

    // Executa quando carrega a pagina
    useEffect(() => {
        // Requisitando os dados
        async function fetchData() {
            try {
                setIsLoading(true);
                await request(1, "&sort_by=vote_count.desc&without_genres=99,10755&vote_count.gte=200")
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchData();

    }, [request, setIsLoading])

    return(
        <FilmesSection sectionTitle={"Mais Assistidos"} heightCard={"250px"} data={data}/>
    )
}

export default MaisAssistidos;