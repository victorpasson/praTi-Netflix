// Componentes
import Loading from "../components/Loading";
import NavBarCatalogo from "../components/NavBarCatalogo";
import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";

// Sessões
import EmAlta from "./CatalogoSections/EmAlta";
import MaisAssistidos from "./CatalogoSections/MaisAssistidos";
import MelhoresAvaliados from "./CatalogoSections/MelhoresAvaliados";
import FilterGenre from "./CatalogoSections/FilterGenre";
import { useState } from "react";

const Catalogo = () => {
    const [isLoading, setIsLoading] = useState(null)

    return(
        <>
            {isLoading ? 
                (<Loading/>)
                :
                (   <>
                    <NavBarCatalogo/>
                    <BannerSection setIsLoading={setIsLoading}/>
                    <EmAlta setIsLoading={setIsLoading}/>
                    <MaisAssistidos setIsLoading={setIsLoading}/>
                    <MelhoresAvaliados setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Animação"} id={"16"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Ação"} id={"28"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Comédia"} id={"35"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Drama"} id={"18"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Romance"} id={"10749"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Ficção Científica"} id={"878"} setIsLoading={setIsLoading}/>
                    <FilterGenre title={"Documentário"} id={"99"} setIsLoading={setIsLoading}/>
                    <Footer/>
                    </>
                )
            }
        </>
    )
}

export default Catalogo;