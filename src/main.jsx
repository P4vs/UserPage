import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserPage from './components/UserPage.jsx';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", element: <UserPage/>
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
