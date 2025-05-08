
import AnimatedElement from "@/components/AnimatedElement";

export interface MetricProps {
  value: string;
  label: string;
}

interface MetricsSectionProps {
  metrics: MetricProps[];
}

const MetricsSection = ({ metrics }: MetricsSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedElement
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="text-center p-6 neumorphic h-full">
                <div className="text-4xl md:text-5xl font-bold text-furi-red mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
