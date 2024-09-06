// Hooks
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// Componentes
import FilmesSection from "../../components/FilmesSection";


const EmAlta = ({setIsLoading}) => {
    // Setando os dados
    const { request, data } = useFetch();

    // Executa quando carregar a pagina
    useEffect(() => {
        // Requisicao dos dados
        async function fetchData() {
            try{
                setIsLoading(true);
                await request(1, "&sort_by=popularity.desc");
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
            
        }
        fetchData();

    }, [request, setIsLoading])

    return(
        <FilmesSection sectionTitle={"Em alta"} heightCard={"250px"} data={data}/>
    )
}

export default EmAlta;