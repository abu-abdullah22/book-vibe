const Contact = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-center my-6">Directly Write to us </h2>
      <div className="lg:w-1/2 container px-2 mx-auto space-y-5">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Your Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="Your Email" />
        </label>
        <textarea className="textarea textarea-bordered w-full " placeholder="Write your thoughts about Book Vibe"></textarea>
        <button className="btn w-1/2 bg-[#23BE0A] text-white text-lg font-bold">Send</button>
      </div>
    </div>
  );
};

export default Contact;
