
import AnimatedElement from "@/components/AnimatedElement";
import SectionHeading from "@/components/SectionHeading";
import Testimonial, { TestimonialProps } from "./Testimonial";

interface TestimonialsSectionProps {
  testimonials: TestimonialProps[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="fade-in">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about working with FURI"
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              animation="slide-up"
              delay={index * 100}
            >
              <Testimonial {...testimonial} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
