import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import EditReview from "../pages/EditReview/EditReview";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

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
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/myreviews/edit/:id",
        element: <EditReview></EditReview>,
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
    ],
  },
]);
