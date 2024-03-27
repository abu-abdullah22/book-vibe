import { useLoaderData } from "react-router-dom";
import ReadList from "./ReadList";
import Wishlist from "./Wishlist";
import { useEffect, useState } from "react";
import { getStored } from "../Utils/localStorage";
import { getStoredWish } from "../Utils/localStorage2";

const ListedBooks = () => {
  const books = useLoaderData();
  const [reads, setReads] = useState([]);

 

  useEffect(() => {
    const stroedBooks = getStored();
    if (books.length) {
      const readBooks = books.filter((book) =>
        stroedBooks.includes(book.bookId)
      );
      setReads(readBooks);
   
    }
  }, [books]);

  const [wishBook, setWishBook] = useState([]);

  useEffect(() => {
    const stroedWishBooks = getStoredWish();
    if (books.length) {
      const wishBooks = books.filter((book) =>
        stroedWishBooks.includes(book.bookId)
      );
      setWishBook(wishBooks);
    }
  }, [books]);

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
              <a>Year</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg text-[#131313CC]"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadList reads={reads}></ReadList>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-[#131313CC] text-lg font"
          aria-label="Wishlist"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Wishlist wishBook={wishBook}></Wishlist>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
