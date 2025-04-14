import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Layout from "./Shared/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[

      {
        path: "",
        element: <Home />,
      },
      {
        path:"Projects",
        element:< Project/>
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
