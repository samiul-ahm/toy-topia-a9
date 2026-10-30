import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import MyProfile from "../pages/MyProfile";
import AllToys from "../pages/AllToys";
import Loading from "../components/Loading";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { PrivateRoute } from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("/toyData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("/toyData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/all-toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/toyData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);
