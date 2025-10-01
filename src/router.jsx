import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import DetailPage from "./pages/DetailPage";

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
      {
        path: ":id",
        element: <DetailPage />,
      },
    ],
  },
]);

export const ROUTES = {
  ROOT: "/",
  POST: "/post",
  DETAIL: (id = ":id") => `/${id}`,
};
