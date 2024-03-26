import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStored, saveRead } from "../Utils/localStorage";
import { saveReadWish } from "../Utils/localStorage2";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books?.find((book) => book?.bookId === idInt);
  
  const handleRead = () => {
    saveRead(idInt)
    toast('Added to the readlist successfully!') ;
  } ;

  const handleWish = () => {
    const readData = getStored() ;
    if(!readData.includes(idInt)){
        saveReadWish(idInt) ;
        toast('Added to wishlist successfully') ;
    } else{
        toast('Already read!')
    }
   
  }
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 container">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-around">
        <div className="flex items-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={book.image}
            alt="book"
            className="object-contain rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl text-[#131313] font-bold leading-none sm:text-6xl">
            {book.bookName}
          </h1>
          <p className="mt-6 text-[#131313CC] font-medium mb-8 text-xl sm:mb-12">
           By : {book.author}
          </p>
          <hr />
          <p className="text-xl my-4 font-medium text-[#131313CC]">{book.category}</p>
          <hr />
          <p className="my-4 text-[#131313B2]">
           <span className="font-bold text-[#131313]"> Review :</span> {book.review}
          </p>
          <p className="text-[#131313] font-bold gap-5 flex mb-5 items-center">Tag  <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-2xl px-2">{book.tags[0]}</span> <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-2xl px-2 ">{book.tags[1]}</span></p>
          <hr />

          <div className="text-[#131313B2] my-5">
            <p className="flex gap-5">Number of pages : <span className="font-semibold text-[#131313]">{book.totalPages}</span></p>
            <p className="flex gap-5">Publisher : <span className="font-semibold text-[#131313]"> {book.publisher}</span></p>
            <p className="flex gap-5">Publisher : <span className="font-semibold text-[#131313]">{book.yearOfPublishing}</span></p>
            <p className="flex gap-5"> Publisher : <span className="font-semibold text-[#131313]">{book.rating}</span></p>
          </div>



          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#" onClick={handleRead}
              className="px-8 py-2 text-lg font-semibold rounded-[8px] dark:bg-violet-600 dark:text-gray-50 border-2 border-[#1313134D] btn "
            >
            Read
            </a>
            <a
              rel="noopener noreferrer"
              href="#" onClick={handleWish}
              className="px-8 py-2 btn text-lg font-semibold bg-[#50B1C9] rounded-[8px] dark:border-gray-800"
            >
              Wishlist
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookDetails;
