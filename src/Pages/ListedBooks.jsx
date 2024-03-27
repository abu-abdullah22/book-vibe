import { useLoaderData } from "react-router-dom";
import ReadList from "./ReadList";
import Wishlist from "./Wishlist";
import { useEffect, useState } from "react";
import { getStored } from "../Utils/localStorage";
import { getStoredWish } from "../Utils/localStorage2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  const books = useLoaderData();
  const [reads, setReads] = useState([]);
  const [sortReads, setSortReads] = useState([]);

  useEffect(() => {
    const stroedBooks = getStored();
    if (books.length) {
      const readBooks = books.filter((book) =>
        stroedBooks.includes(book.bookId)
      );
      setReads(readBooks);
      setSortReads(readBooks);
    }
  }, [books]);

  const [wishBook, setWishBook] = useState([]);
  const [sortWishBook, setSortWishBook] = useState([]);

  useEffect(() => {
    const stroedWishBooks = getStoredWish();
    if (books.length) {
      const wishBooks = books.filter((book) =>
        stroedWishBooks.includes(book.bookId)
      );
      setWishBook(wishBooks);
      setSortWishBook(wishBooks);
    }
  }, [books]);

  const handleSort = (filter) => {
    if (filter === "all") {
      setSortReads([...reads]);
      setSortWishBook([...wishBook]);
    } else if (filter === "year") {
      const temporary = [...reads].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSortReads(temporary);

      const temopary2 = [...wishBook].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSortWishBook(temopary2);
    } else if (filter === "page") {
      const page = [...reads].sort((a, b) => b.totalPages - a.totalPages);
      setSortReads(page);

      const pageWish = [...wishBook].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setSortWishBook(pageWish);
    } else if (filter === "rating") {
      const rating = [...reads].sort((a, b) => b.rating - a.rating);
      setSortReads(rating);

      const ratingWish = [...wishBook].sort((a, b) => b.rating - a.rating);
      setSortWishBook(ratingWish);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="bg-[#1313130D] rounded-2xl">
        <h2 className="text-3xl font-bold text-center my-8 p-5">Book Vibe</h2>
      </div>
      <div className="flex justify-center my-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => handleSort("all")}>All</button>
            </li>
            <li>
              <button onClick={() => handleSort("year")}>Year</button>
            </li>
            <li>
              <button onClick={() => handleSort("page")}>Pages</button>
            </li>
            <li>
              <button onClick={() => handleSort("rating")}>Rating</button>
            </li>
          </ul>
        </details>
      </div>


      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortReads={sortReads}></ReadList>
        </TabPanel>
        <TabPanel>
          <Wishlist sortWishBook={sortWishBook}></Wishlist>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ListedBooks;
