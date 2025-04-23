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
      image: "/lovable-uploads/89c8697d-47fa-4b32-9085-33a1a7764cc0.png"
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
      image: "/lovable-uploads/a58dddeb-4ada-4a79-9bee-aded894e21cf.png"
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
      image: "/lovable-uploads/bb0c3df7-4561-4500-9184-27a9f49d1b3d.png"
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
      image: "/lovable-uploads/2042851a-ad27-4357-82bf-a8bbd6c7b754.png"
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
      image: "/lovable-uploads/f276d028-8aaa-45a2-a6b9-3be5b43d01dc.png"
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
      image: "/lovable-uploads/4923fc3d-b81b-4399-83a7-ad892f18e5f7.png"
    }
  ];

  return (
    <div className="pt-28">
      {/* Services Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
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
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedElement
                animation="fade-in"
                className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-start">
                      <Check
                        size={20}
                        className="text-furi-red mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{offering}</span>
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
                    />
                  </AspectRatio>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
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
