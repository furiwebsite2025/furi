
import { WhatsApp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton = ({ className }: WhatsAppButtonProps) => {
  return (
    <a
      href="https://wa.me/917416992299"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl",
        className
      )}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsApp className="text-white w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};

export default WhatsAppButton;
