const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">
        Directly Write to us{" "}
      </h2>
      <div className="lg:w-1/2 container px-2 mx-auto space-y-5">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Your Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="Your Email" />
        </label>
        <textarea
          className="textarea textarea-bordered w-full "
          placeholder="Write your thoughts about Book Vibe"
        ></textarea>
        <button className="btn w-1/2 bg-[#23BE0A] text-white text-lg font-bold">
          Send
        </button>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold ">Contact Information</h2>
        <p className="text-lg font-medium mt-4">
          Email: info@bookvibe.com <br />
           Phone: +1 (555) 123-4567 <br />
            Address: 123 Main
          Street, Anytown, USA
        </p>
      </div>
    </div>
  );
};

export default Contact;
