import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Brands from './Components/Brands/Brands';
import Brand from './Components/Brand/Brand';
import AuthProviders from './AuthProviders/AuthProviders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/my-cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/brands",
        element: <Brands></Brands>
      },

      {
        path: "/brand/:brandName",
        element: <Brand></Brand>,
        loader: () => fetch('/brandJson.js')

      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
