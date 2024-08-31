import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import "bootstrap/dist/js/bootstrap.min.js"


createRoot(document.getElementById('root')).render(

    <App />,
)