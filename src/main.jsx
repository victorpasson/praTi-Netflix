import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

// Components
import { RouterProvider } from 'react-router-dom';
import router from './services/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
