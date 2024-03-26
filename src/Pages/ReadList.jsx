import propTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { PiBookBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const ReadList = ({ reads }) => {
  return (
    <div className="grid gap-2">
      {reads?.map((read) => (
        <section key={read.bookId}>
          <div className="lg:card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={read.image}
                alt="Movie" className="h-[230px] lg:w-[230px] object-contain rounded-3xl lg:mx-0"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{read.bookName}</h2>
              <p className="font-medium text-[#131313CC] ">By : {read.author}</p>

              <div className="lg:flex items-center w-1/2">
                
              <p className="text-[#131313] font-bold gap-5 flex items-center">Tag  <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-2xl px-2">{read.tags[0]}</span> <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-2xl px-2 ">{read.tags[1]}</span></p>

              <p className="text-[#131313CC] flex items-center"><MdLocationOn /> Year Of Publishing : {read.yearOfPublishing}</p>
              </div>

              <div className="lg:flex items-center text-[#13131399] w-1/2 ">
                <p className="flex items-center gap-1"><MdSupervisorAccount /> Publisher : {read.publisher}</p>
                <p className="flex items-center"><PiBookBold /> Page : {read.totalPages}</p>
              </div>

              <hr />

              <div className="card-actions w-1/3">
               <p className="text-[#328EFF] bg-[#328EFF26] rounded-3xl p-1 text-center">Category : {read.category}</p>
               <p className="text-[#FFAC33] bg-[#FFAC3326] rounded-3xl p-1 text-center">Rating : {read.category}</p>
               <Link to={`/book/${read.bookId}`} className="bg-[#23BE0A] text-white rounded-3xl py-1 px-3 text-center"> View Details</Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

ReadList.propTypes = {
  reads: propTypes.object,
};
export default ReadList;
