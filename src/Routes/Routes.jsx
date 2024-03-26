import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import BookDetails from "../Pages/BookDetails";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error> ,
      children : [
        {
            path: '/',
            element :<Home></Home>
        },
        {
            path :'/listed-books',
            element : <ListedBooks></ListedBooks>,
            loader : () => fetch('/public/books.json')
        },
        {
            path: '/pages-to-read',
            element : <PagesToRead></PagesToRead>,
            loader : ()=> fetch('/public/books.json')
        },
        {
          path: '/book/:bookId',
          element: <BookDetails></BookDetails>,
          loader : ()=> fetch('../books.json')
        }
      ]
    },
  ]);

  export default router ;