
import { Star } from "lucide-react";

export interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  stars: number;
  image: string;
}

const Testimonial = ({ quote, author, position, stars, image }: TestimonialProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 neumorphic h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
