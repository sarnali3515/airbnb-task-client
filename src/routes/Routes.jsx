import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
//import ErrorPage from '../pages/ErrorPage'

//import RoomDetails from '../pages/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        //errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            //   {
            //     path: '/room/:id',
            //     element: <RoomDetails />,
            //   },
        ],
    },

])