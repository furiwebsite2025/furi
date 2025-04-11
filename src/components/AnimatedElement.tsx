
import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: ReactNode;
  animation: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimatedElement = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className,
}: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        animation === "fade-in" && "fade-in-element",
        animation === "slide-up" && "slide-up-element",
        animation === "scale-in" && "opacity-0",
        isVisible && animation === "fade-in" && "fade-in-visible",
        isVisible && animation === "slide-up" && "slide-up-visible",
        isVisible && animation === "scale-in" && "animate-scale-in"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
