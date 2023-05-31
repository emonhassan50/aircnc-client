import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/pages/Home/Home'
import Login from '../components/pages/Login/Login'
import SignUp from '../components/pages/SignUp/SignUp'
import RoomDetails from '../components/pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails/></PrivateRoute>
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])
