import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserPage from './components/UserPage.jsx';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserPage />
  </StrictMode>,
)
