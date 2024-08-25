import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import Home from "./Components/Home.jsx";
import BrowseBooks from "./Components/BrowseBooks.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import Categories from "./Components/Categories.jsx";
import App from "./App.jsx"; // Ensure App is imported
import NotFound from "./Components/NotFound.jsx";
import store from "./Utils/Store.js";
import AddBook from "./Components/AddBook.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the root element
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "addbook",
        element: <AddBook />,
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "book/:id",
    element: <BookDetails />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
