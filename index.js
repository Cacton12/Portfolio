import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./src/App";
import reportWebVitals from "./src/reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from "./src/Projects";  // Import your Projects component
import ContactMe from "./src/Contact"; // Import your ContactMe component

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
    path: "/Portfolio",
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

