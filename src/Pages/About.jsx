import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-[#131313B2] p-12">
          <img
            src="/8680379.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center text-lg text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 mb-8 sm:mb-12 text-[#131313B2]">
            Welcome to Book Vibe, your ultimate destination for discovering,
            exploring, and embracing the world of literature. At Book Vibe, we
            believe that every book has a unique energy—a distinct vibe—that
            resonates with readers in profound and personal ways. Our mission is
            simple: to connect readers with the books that speak to their souls.
            Whether youre a seasoned bibliophile or a casual reader looking for
            your next literary adventure, Book Vibe is your trusted companion on
            the journey through the vast landscape of written word.
            <br />
            <br />
            We curate a diverse selection of titles across genres, from timeless
            classics to contemporary bestsellers, ensuring theres something for
            every taste and interest. Our platform empowers you to browse,
            discover, and engage with books that match your mood, preferences,
            and aspirations. But Book Vibe is more than just a repository of
            titles—its a vibrant community of book lovers, united by our shared
            passion for storytelling and exploration. Connect with fellow
            readers, share your thoughts and recommendations, and embark on
            discussions that celebrate the transformative power of literature.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 bg-[#50B1C9] text-white"
            >
              Write to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
