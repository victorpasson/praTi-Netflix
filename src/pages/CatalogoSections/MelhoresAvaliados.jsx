// Hooks
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// Componentes
import FilmesSection from "../../components/FilmesSection";


const MelhoresAvaliados = ({setIsLoading}) => {
    // Setando os dados
    const { request, data } = useFetch();

    // Executa quando inicia a pagina
    useEffect(() => {
        // Fazendo requisicao
        async function fetchData() {
            try{
                setIsLoading(true);
                await request(1, "&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200")
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
            
        }
        fetchData();

    }, [request, setIsLoading])

    return(
        <FilmesSection sectionTitle={"Melhores Avaliados"} heightCard={"250px"} data={data}/>
    )
}

export default MelhoresAvaliados;