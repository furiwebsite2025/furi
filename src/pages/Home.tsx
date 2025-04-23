
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import AnimatedElement from "@/components/AnimatedElement";

const Home = () => {
  const servicesData = [{
    title: "Brand Strategy & Design",
    description: "Create a compelling brand identity that resonates with your audience and stands out in the market.",
    icon: "✏️",
    link: "/services#brand-strategy"
  }, {
    title: "Brand Communication",
    description: "Communicate your brand message effectively across all channels to build meaningful connections.",
    icon: "💬",
    link: "/services#brand-communication"
  }, {
    title: "Growth Marketing",
    description: "Accelerate your business growth with data-driven marketing strategies and campaigns.",
    icon: "📈",
    link: "/services#growth-marketing"
  }, {
    title: "Video Production",
    description: "Create engaging video content that captures attention and drives conversions.",
    icon: "🎬",
    link: "/services#video-production"
  }, {
    title: "Creative Technology",
    description: "Leverage cutting-edge technology to create innovative digital experiences.",
    icon: "💻",
    link: "/services#creative-technology"
  }, {
    title: "SmartCampaigns™",
    description: "Our AI-powered campaign orchestration platform for predictive performance optimization.",
    icon: "🧠",
    link: "/services#smart-campaigns"
  }];
  const industriesData = ["Hospitality", "Education", "Health & Wellness", "SaaS", "E-commerce", "Real Estate", "Fashion & Beauty", "Nonprofits"];
  const testimonials = [{
    quote: "FURI transformed our digital presence with their AI-powered approach. The results speak for themselves - 40% increase in qualified leads!",
    author: "Sarah Johnson",
    position: "Marketing Director, TechSolutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }, {
    quote: "The team at FURI doesn't just execute marketing campaigns - they create data-intelligent strategies that deliver real business results.",
    author: "Michael Chen",
    position: "CEO, Horizon Hospitality",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }, {
    quote: "Working with FURI has been transformative for our brand. Their emotionally intelligent approach helped us connect with our audience in ways we never imagined possible.",
    author: "Priya Sharma",
    position: "Founder, Wellness Collective",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }];
  
  return <div className="pt-16 sm:pt-18 md:pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedElement animation="fade-in" className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Feed UR Idea. <br className="hidden sm:block" />
                We'll Fire It Into the Future.
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={200} className="mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                FURI is your AI-powered digital marketing partner — creating data-intelligent, emotionally resonant campaigns.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={400}>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <Link to="/contact" className="bg-furi-red text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all hover:shadow-md text-sm sm:text-base w-full sm:w-auto">
                  Let's Fire It Up
                </Link>
                <Link to="/services" className="bg-gray-100 text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition-all text-sm sm:text-base w-full sm:w-auto mt-3 sm:mt-0">
                  Explore Services
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="Our Services" subtitle="Comprehensive digital marketing solutions powered by AI and driven by human creativity" />
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => <AnimatedElement key={service.title} animation="slide-up" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover-scale h-full flex flex-col">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-furi-red font-medium hover:underline text-sm sm:text-base">
                    Learn more <ArrowRight size={16} className="ml-1 sm:ml-2" />
                  </Link>
                </div>
              </AnimatedElement>)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="Industries We Serve" subtitle="We specialize in helping businesses across diverse sectors achieve their marketing goals" />
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={200}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {industriesData.map(industry => <Link key={industry} to="/industries" className="bg-gray-50 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-gray-800 transition-colors text-xs sm:text-sm md:text-base">
                  {industry}
                </Link>)}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* SmartCampaigns Feature */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <AnimatedElement animation="fade-in">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Introducing SmartCampaigns</h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                  Our proprietary AI-powered campaign orchestration platform that helps you achieve better results with less effort.
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {["AI-powered targeting & automation", "Predictive performance optimization", "Cross-platform campaign orchestration"].map(feature => <li key={feature} className="flex items-start">
                      <Check size={18} className="text-furi-red mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>)}
                </ul>
                <Link to="/services#smart-campaigns" className="inline-block bg-furi-red text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base">
                  Learn More
                </Link>
              </AnimatedElement>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <AnimatedElement animation="slide-up">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img alt="SmartCampaigns Dashboard" className="w-full h-auto" src="/lovable-uploads/193df489-968c-4f5e-9695-d31f3575c43c.jpg" />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="Client Success Stories" subtitle="Hear from businesses who have transformed their digital presence with FURI" />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => <AnimatedElement key={index} animation="slide-up" delay={index * 150}>
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm h-full flex flex-col">
                  <div className="text-xl sm:text-2xl text-gray-400 mb-3 sm:mb-4">"</div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{testimonial.author}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <CallToAction title="Ready to Fire Up Your Digital Presence?" description="Let's collaborate to create AI-powered, emotionally resonant campaigns that drive real results for your business." buttonText="Get Started" buttonLink="/contact" className="neumorphic" />
          </AnimatedElement>
        </div>
      </section>
    </div>;
};

export default Home;
