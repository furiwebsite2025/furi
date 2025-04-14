
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <Link to="/about" className="text-sm text-gray-600 hover:text-furi-red transition-colors">
              About FURI
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-furi-red transition-colors">
              Privacy Policy
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://in.linkedin.com/company/furiglobal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-furi-red transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/furishorts" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-furi-red transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-furi-red transition-colors">
              <Facebook size={18} />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 FURI. Feed UR Idea.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
