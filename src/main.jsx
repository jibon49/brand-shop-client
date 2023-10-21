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
import AllProducts from './Components/AllProducts/AllProducts';
import UpdateDetails from './Components/UpdateDetails/UpdateDetails';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { ThemeProvider } from './ThemeContext/ThemeContext';

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
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/cart')
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
        path: "/update/:id",
        element: <UpdateDetails></UpdateDetails>,
        loader: () => fetch(`https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/products`)

      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch(`https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/products`)

      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
        loader: () => fetch('https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/products')
      },

      {
        path: "/brand/:brandName",
        element: <Brand></Brand>,
        loader: ({ params }) => fetch(`https://techbay-assignment-server-8drflemwz-jibon49.vercel.app/products/${params.brandName}`)

      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </ThemeProvider>
  </React.StrictMode>,
)
