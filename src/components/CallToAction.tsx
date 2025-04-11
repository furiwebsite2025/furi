
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  variant?: "light" | "dark";
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  variant = "light",
}: CallToActionProps) => {
  return (
    <div
      className={cn(
        "py-16 px-6 md:py-20 rounded-lg text-center",
        variant === "light" ? "bg-white" : "bg-gray-900 text-white",
        className
      )}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      {description && (
        <p
          className={cn(
            "mb-8 max-w-2xl mx-auto",
            variant === "light" ? "text-gray-600" : "text-gray-300"
          )}
        >
          {description}
        </p>
      )}
      <Link
        to={buttonLink}
        className={cn(
          "inline-block px-8 py-3 rounded-md font-medium transition-all",
          variant === "light"
            ? "bg-furi-red text-white hover:bg-opacity-90"
            : "bg-white text-gray-900 hover:bg-gray-100"
        )}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
