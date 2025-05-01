
import { cn } from "@/lib/utils";

interface FuriLogoProps {
  className?: string;
  color?: string;
}

const FuriLogo = ({ className, color }: FuriLogoProps) => {
  return (
    <img
      src="/lovable-uploads/4e7a23d4-8857-45ab-bd5f-4232e1a0f44a.png"
      alt="FURI Logo"
      className={cn("h-6 w-auto", className)}
      style={color ? { filter: `opacity(0.9) drop-shadow(0 0 0 ${color})` } : undefined}
    />
  );
};

export default FuriLogo;
