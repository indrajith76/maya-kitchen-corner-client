import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import EditReview from "../pages/EditReview/EditReview";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () =>
          fetch("https://maya-kitchen-corner-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) =>
          fetch(
            `https://maya-kitchen-corner-server.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myreviews/edit/:id",
        element: (
          <PrivateRoutes>
            <EditReview></EditReview>
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://maya-kitchen-corner-server.vercel.app/myreview/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path:'/*',
        element:<ErrorPage></ErrorPage>
      }
    ],
  },
]);
