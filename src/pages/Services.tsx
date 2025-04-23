
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Services = () => {
  const services = [
    {
      id: "brand-strategy",
      title: "Brand Strategy & Design",
      description: "Create a compelling brand identity that resonates with your audience and stands out in the market.",
      icon: "✏️",
      offerings: [
        "Brand Positioning",
        "Brand Personality",
        "Identity & Packaging",
        "Brand Guidelines"
      ],
      image: "/lovable-uploads/branddesign.jpg"
    },
    {
      id: "brand-communication",
      title: "Brand Communication",
      description: "Communicate your brand message effectively across all channels to build meaningful connections.",
      icon: "💬",
      offerings: [
        "Content Creation",
        "Social Media Marketing",
        "Influencer Collaborations",
        "Online Reputation Management",
        "WhatsApp Marketing"
      ],
      image: "/lovable-uploads/brandcom.jpg"
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing",
      description: "Accelerate your business growth with data-driven marketing strategies and campaigns.",
      icon: "📈",
      offerings: [
        "Paid Search & Social Campaigns",
        "SEO",
        "E-commerce Marketing",
        "Ad Campaign Management & Analytics"
      ],
      image: "/lovable-uploads/growth.jpg"
    },
    {
      id: "video-production",
      title: "Video Production",
      description: "Create engaging video content that captures attention and drives conversions.",
      icon: "🎬",
      offerings: [
        "Brand Films & Explanatory Videos",
        "Short-form Content (IG Reels, YouTube Shorts)",
        "Multi-language Podcasts"
      ],
      image: "/lovable-uploads/videoproduction.jpg"
    },
    {
      id: "creative-technology",
      title: "Creative Technology",
      description: "Leverage cutting-edge technology to create innovative digital experiences.",
      icon: "💻",
      offerings: [
        "WhatsApp Chatbots",
        "Conversational AI",
        "Generative AI Campaigns",
        "Web & App Development"
      ],
      image: "/lovable-uploads/creative.jpg"
    },
    {
      id: "smart-campaigns",
      title: "SmartCampaigns™ by FURI",
      description: "Our proprietary AI-powered campaign orchestration platform for predictive performance optimization.",
      icon: "🧠",
      offerings: [
        "AI-powered targeting & automation",
        "Predictive performance optimization",
        "Cross-platform campaign orchestration"
      ],
      image: "/lovable-uploads/smart.jpg"
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 md:pt-28">
      {/* Services Header */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Our Services"
              subtitle="Comprehensive digital marketing solutions powered by AI and driven by human creativity"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-12 sm:py-16 md:py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <AnimatedElement
                animation="fade-in"
                className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{service.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{service.title}</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-start">
                      <Check
                        size={18} 
                        className="text-furi-red mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base">{offering}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>

              <AnimatedElement
                animation="slide-up"
                className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9} className="bg-gray-100">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <CallToAction
              title="Ready to Elevate Your Marketing Strategy?"
              description="Let's create data-intelligent, emotionally resonant campaigns that drive real results for your business."
              buttonText="Contact Us"
              buttonLink="/contact"
              className="neumorphic"
            />
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Services;
