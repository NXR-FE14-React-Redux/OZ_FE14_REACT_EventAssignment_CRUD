import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "post",
        element: <PostPage />,
      },
    ],
  },
]);

export const ROUTES = {
  ROOT: "/",
  POST: "/post",
  DETAIL: (id = ":id") => `/${id}`,
};
