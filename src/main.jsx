import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Details from "./Pages/Details.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import MyWishlist from "./Pages/MyWishlist.jsx";
import AuthProvider from "./firebase/AuthProvider.jsx";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: <Wishlist />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <MyWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
