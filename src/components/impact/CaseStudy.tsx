
import { ArrowRight } from "lucide-react";

export interface CaseStudyProps {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  index: number;
}

const CaseStudy = ({ id, title, industry, challenge, solution, results, image, index }: CaseStudyProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-sm overflow-hidden">
      <div className={`h-64 lg:h-full ${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`p-8 ${index % 2 === 1 ? "order-2 lg:order-1" : ""}`}>
        <div className="text-sm font-medium text-furi-red mb-2">
          {industry}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <h4 className="font-medium mb-1">Challenge:</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-1">Solution:</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        <div>
          <h4 className="font-medium mb-1">Results:</h4>
          <ul className="text-gray-600 space-y-1">
            {results.map((result, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight size={16} className="text-furi-red mr-2 mt-1 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
