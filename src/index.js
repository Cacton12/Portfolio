import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from "./Projects";  // Import your Projects component
import ContactMe from "./Contact"; // Import your ContactMe component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,  // Add Projects route
  },
  {
    path: "/contact",
    element: <ContactMe />,  // Add Contact Me route
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/Cacton12-github.io",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Performance reporting
reportWebVitals();

