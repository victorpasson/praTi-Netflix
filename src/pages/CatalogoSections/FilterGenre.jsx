// Hooks
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

// Componentes
import FilmesSection from "../../components/FilmesSection";


const FilterGenre = ({title, id, setIsLoading}) => {
    // Setando os dados
    const { request, data } = useFetch();

    // Executa quando carregar a página
    useEffect(() => {
        // Requisitando os dados
        async function fetchData() {
            try{
                setIsLoading(true);
                await request(1, `&sort_by=vote_count.desc&with_genres=${id}&vote_count.gte=200`)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
            
        }
        fetchData();

    }, [request, id, setIsLoading])

    return(
        <FilmesSection sectionTitle={title} heightCard={"250px"} data={data}/>
    )
}

export default FilterGenre;