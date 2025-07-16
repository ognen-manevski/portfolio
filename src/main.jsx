import React from 'react';
import './index.css';

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages 
import Home from "./pages/Home.jsx";
import Projects from './pages/Projects.jsx';
import ProjectTemplate from './pages/ProjectTemplate.jsx';

// back to top 
import BackToTop from './components/BackToTop/BackToTop';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Something went wrong on the home page!</div>,
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: <div>Something went wrong on the projects page!</div>,
    },
    {
      path: "/project-template",
      element: <ProjectTemplate />,
    },
    {
      path: "/project/:projectSlug", //spored slug-ot
      element: <ProjectTemplate />,
      errorElement: <div>Project not found!</div>,
    },
  ],
  {
    basename: "/portfolio/"
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BackToTop />
  </React.StrictMode>
)

