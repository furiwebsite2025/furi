
import { cn } from "@/lib/utils";

interface FuriLogoProps {
  className?: string;
}

const FuriLogo = ({ className }: FuriLogoProps) => {
  return (
    <img
      src="/lovable-uploads/4e7a23d4-8857-45ab-bd5f-4232e1a0f44a.png"
      alt="FURI Logo"
      className={cn("h-8", className)}
    />
  );
};

export default FuriLogo;
