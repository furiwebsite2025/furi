
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}: CallToActionProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-6 sm:p-8 md:p-12 text-center", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{title}</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
        {description}
      </p>
      <Link
        to={buttonLink}
        className="inline-block bg-furi-red text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium text-sm sm:text-base hover:bg-opacity-90 transition-all hover:shadow-md"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
