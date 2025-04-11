
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AnimatedElement from "@/components/AnimatedElement";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="pt-28 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-block bg-furi-red text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Return to Homepage
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
