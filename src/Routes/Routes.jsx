import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path: '/',
            element :<Home></Home>
        },
        {
            path :'/listed-books',
            element : <ListedBooks></ListedBooks>
        },
        {
            path: '/pages-to-read',
            element : <PagesToRead></PagesToRead>
        }
      ]
    },
  ]);

  export default router ;