import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Layout from "./Shared/Layout";
import About from "./Components/About";
import Skill from "./Components/Skill";

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
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Skills",
        element:<Skill/>
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
