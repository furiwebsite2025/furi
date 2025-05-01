
import AnimatedElement from "@/components/AnimatedElement";
import SectionHeading from "@/components/SectionHeading";
import CaseStudy, { CaseStudyProps } from "./CaseStudy";

interface CaseStudiesSectionProps {
  caseStudies: Omit<CaseStudyProps, 'index'>[];
}

const CaseStudiesSection = ({ caseStudies }: CaseStudiesSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="fade-in">
          <SectionHeading
            title="Case Studies"
            subtitle="Explore how we've helped businesses across industries achieve their marketing goals"
          />
        </AnimatedElement>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <AnimatedElement
              key={study.id}
              animation="fade-in"
              delay={index * 150}
            >
              <CaseStudy {...study} index={index} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
