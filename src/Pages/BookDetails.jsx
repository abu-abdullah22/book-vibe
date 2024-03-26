import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData() ;
    const {bookId} = useParams() ;
    const idInt = parseInt(bookId) ;
    const book = books?.find(book => book?.bookId === idInt) ;
    console.log(books);
    return (
        <div>
            <h2>book details of : {book?.bookName} </h2>
        </div>
    );
};

export default BookDetails;