
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import FuriLogo from "./FuriLogo";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Impact", path: "/impact" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 md:py-3"
          : "bg-transparent py-3 md:py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <FuriLogo className="h-6 sm:h-7 md:h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium text-sm hover:text-furi-red transition-colors",
                location.pathname === link.path
                  ? "text-furi-red"
                  : "text-gray-800"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/tools"
            className="bg-furi-red text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-md font-medium text-sm transition-all hover:bg-opacity-90 hover:shadow-md"
          >
            Free Tools
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium py-2 block w-full",
                  location.pathname === link.path
                    ? "text-furi-red"
                    : "text-gray-800"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/tools"
              className="bg-furi-red text-white px-5 py-2 rounded-md font-medium text-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
