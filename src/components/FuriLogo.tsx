
import { cn } from "@/lib/utils";

interface FuriLogoProps {
  className?: string;
  color?: string; // Adding the color prop to the interface
}

const FuriLogo = ({ className, color }: FuriLogoProps) => {
  return (
    <img
      src="/lovable-uploads/4e7a23d4-8857-45ab-bd5f-4232e1a0f44a.png"
      alt="FURI Logo"
      className={cn("h-6 w-auto", className)}
      style={color ? { filter: color === "white" ? "brightness(0) invert(1)" : undefined } : undefined}
    />
  );
};

export default FuriLogo;
