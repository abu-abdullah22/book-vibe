import { useLoaderData } from "react-router-dom";
import ReadList from "./ReadList";
import Wishlist from "./Wishlist";
import { useEffect, useState } from "react";
import { getStored } from "../Utils/localStorage";

const ListedBooks = () => {
    const books = useLoaderData() ;
    const [reads, setReads] = useState()
    useEffect(()=> {
        const stroedBooks = getStored() ;
        if(books.length) {
            const readBooks = books.filter(book => stroedBooks.includes(book.bookId)) ;
            console.log(books, readBooks);
            setReads(readBooks) ;
        }
    },[books])
  return (
    <section className="container mx-auto">
        <div className="bg-[#1313130D] rounded-2xl">
            <h2 className="text-3xl font-bold text-center my-8 p-5">Book Vibe</h2>
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
         <Wishlist reads={reads}></Wishlist>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
