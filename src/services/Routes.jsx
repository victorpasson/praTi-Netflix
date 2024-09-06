// Importando biblioteca
import { createBrowserRouter } from "react-router-dom";

// Paginas
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "catalogo",
        element: <Catalogo/>,
    },
]);

export default router;