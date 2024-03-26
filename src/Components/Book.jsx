import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import propTypes from 'prop-types'
const Book = ({ book }) => {
  const { bookName, image, rating, tags , author, category, bookId  } = book;
  return (
    <Link to={`/book/${bookId}`} className="card hover:scale-105 bg-base-100 shadow-xl cursor-pointer hover:border border-gray-400 mx-5 lg:mx-0">
      <figure className="pt-10">
        <img
          src={image}
          alt="book"
          className="rounded-xl w-[320px] h-[250px] mx-5"
        />
      </figure>
      <div className="card-body">
        <p className="flex gap-2 items-center"><span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] px-2 rounded-2xl">{tags[0]}</span> <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-2xl px-2">{tags[1]}</span></p>
        <h2 className="card-title">{bookName}</h2>
        <p className="font-medium text-[#131313CC] border-b-2 border-dashed pb-3">By : {author}</p>
        <div className="flex text-[#131313CC] font-medium">
            <p>{category}</p>
            <p className="flex items-center gap-1">{rating} <FiStar /></p>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
    book : propTypes.object
}

export default Book;
