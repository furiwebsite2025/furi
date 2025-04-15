import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";

const Industries = () => {
  const industries = [
    {
      id: "hospitality",
      title: "Hospitality",
      description: "Drive bookings and enhance guest experiences through targeted digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "education",
      title: "Education",
      description: "Connect with prospective students and showcase your educational offerings through engaging digital content.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "health",
      title: "Health & Wellness",
      description: "Build trust and attract clients through authentic content and targeted marketing campaigns.",
      image: "/lovable-uploads/d803d1a9-1605-479b-a1d9-6a1083e88edd.png"
    },
    {
      id: "saas",
      title: "SaaS",
      description: "Generate qualified leads and showcase your software's value through compelling marketing strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Drive traffic, increase conversions, and build customer loyalty through effective digital marketing.",
      image: "/lovable-uploads/f3662ae2-236d-4b16-b4f5-0cc114a114f7.png"
    },
    {
      id: "realestate",
      title: "Real Estate",
      description: "Showcase properties and attract potential buyers through visually compelling marketing campaigns.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "fashion",
      title: "Fashion & Beauty",
      description: "Create aspirational content and drive sales through emotionally resonant marketing campaigns.",
      image: "/lovable-uploads/cbbb5ccd-d655-47e2-bb74-7162d93000a0.png"
    },
    {
      id: "nonprofits",
      title: "Nonprofits",
      description: "Amplify your mission and drive donations through compelling storytelling and strategic marketing.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Build trust and showcase your logistical expertise through targeted digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="pt-28">
      {/* Industries Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Industries We Serve"
              subtitle="Tailored marketing solutions for diverse sectors, each with unique challenges and opportunities"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedElement
                key={industry.id}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover-scale h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {industry.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-furi-red font-medium hover:underline"
                    >
                      Discuss your project <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Industry Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                At FURI, we understand that each industry has its unique challenges and opportunities. That's why we take a tailored approach to every client we work with.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team combines industry expertise with AI-powered insights to create marketing strategies that resonate with your specific audience and drive meaningful results for your business.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're in hospitality, education, health & wellness, or any other sector, we have the experience and tools to help you achieve your marketing goals.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="slide-up">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Industry Approach"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <CallToAction
              title="Ready to Transform Your Industry Presence?"
              description="Let's collaborate to create marketing strategies tailored to your industry-specific needs."
              buttonText="Get in Touch"
              buttonLink="/contact"
              className="neumorphic"
            />
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Industries;
