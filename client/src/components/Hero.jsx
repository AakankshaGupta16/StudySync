import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
        Welcome to <span className="text-pink-500">StudySync</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Stay organized, collaborate with friends, and manage your study goals effortlessly.
      </p>
      
      {/* Single "Get Started" button that routes to login */}
      <Link to="/login">
        <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow hover:bg-pink-600 transition-all duration-200">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default Hero;
