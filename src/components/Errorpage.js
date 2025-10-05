import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 min-h-screen flex items-center justify-center">
      <div className="text-center px-4 animate-fadeInUp">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text-fire mb-4">404</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          Oops! Looks like this page took a rest day. Let's get you back to your fitness journey!
        </p>
        <Link to="/">
          <button className="inline-flex items-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-lg text-lg font-semibold modern-btn shadow-xl transform hover:scale-105 transition-all duration-300">
            Back to Home
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;
