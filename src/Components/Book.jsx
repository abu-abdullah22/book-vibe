import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookName, image, rating, tags , author, category, bookId  } = book;
  return (
    <Link to={`/job/${bookId}`} className="card w-96 hover:scale-105 bg-base-100 shadow-xl cursor-pointer hover:border border-gray-400">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="book"
          className="rounded-xl w-[300px] h-[250px]"
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

export default Book;
