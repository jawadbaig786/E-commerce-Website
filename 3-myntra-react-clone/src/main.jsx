import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bags from "./routes/Bags.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntrastore from "./store/index.js";
import PLaceholder from "./routes/PLaceholder.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bags />,
      },
      {
        path: "/order",
        element: <PLaceholder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntrastore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
