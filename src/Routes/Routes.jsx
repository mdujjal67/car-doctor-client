import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Pages/Booking/Booking";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'booking/:id',
          element: <Booking></Booking>,
          loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
        },
        {
          path: "*",
          element: <NotFoundPage></NotFoundPage> // Catch-all route for 404 Not Found
        },
      ]
    },
  ]);

  export default router