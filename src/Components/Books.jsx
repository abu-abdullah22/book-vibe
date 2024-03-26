import { useEffect, useState } from "react";
import Book from "./Book";
// import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState() ;
    useEffect(()=> {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
   
    
    return (
        <section className="mt-10 mb-28 container mx-auto">
        <h2 className="text-4xl font-bold text-[#131313] text-center mb-5">Books  </h2>
        <div className="grid lg:grid-cols-3 gap-5 lg:mx-10">
            {
                books?.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
 
       
     
      </section>
    );
};

export default Books;