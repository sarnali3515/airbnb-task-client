import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
//import 'react-date-range/dist/styles.css'
//import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />

  </HelmetProvider>
)


//https://i.ibb.co.com/xJptzQH/airbnb-removebg-preview.png