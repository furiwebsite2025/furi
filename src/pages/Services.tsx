import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
                  <img
                    src={
                      service.id === "video-production"
                        ? "/lovable-uploads/e68da18f-67f5-408b-b646-9902b01b0bd7.png"
                        : `https://images.unsplash.com/photo-${
                            index % 6 === 0
                              ? "1581091226825-a6a2a5aee158"
                              : index % 6 === 1
                              ? "1460925895917-afdab827c52f"
                              : index % 6 === 2
                              ? "1498050108023-c5249f4df085"
                              : index % 6 === 3
                              ? "1581090464777-f3220bbe1b8b"
                              : index % 6 === 4
                              ? "1605810230434-7631ac76ec81"
                              : "1526374965328-7f61d4dc18c5"
                          }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=855&q=80`
                    }
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
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
