import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
      />

      <div className="min-h-[70vh] bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-6">
              <Search className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for seems to have wandered off. It might have been moved,
              deleted, or never existed in the first place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors"
            >
              Browse Blog
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Here are some helpful links instead:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/portfolio" className="text-blue-600 hover:text-blue-700 font-medium">
                Portfolio
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
