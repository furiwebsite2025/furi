
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";
import { ArrowRight, Star } from "lucide-react";

const Impact = () => {
  const caseStudies = [
    {
      id: "hospitality-rebrand",
      title: "Luxury Hotel Chain Rebrand",
      industry: "Hospitality",
      challenge: "A luxury hotel chain needed to refresh their brand identity to appeal to a younger, affluent demographic while maintaining their heritage.",
      solution: "Comprehensive brand overhaul including new visual identity, website redesign, and social media strategy.",
      results: [
        "42% increase in direct bookings",
        "65% higher engagement on social media",
        "28% growth in average booking value"
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ecommerce-growth",
      title: "Fashion E-commerce Growth Campaign",
      industry: "E-commerce",
      challenge: "An emerging fashion brand needed to scale their online presence and drive sales through their e-commerce platform.",
      solution: "Implemented data-driven paid social campaigns, influencer partnerships, and email marketing automation.",
      results: [
        "137% increase in online sales",
        "47% reduction in customer acquisition cost",
        "93% increase in returning customers"
      ],
      image: "https://images.unsplash.com/photo-1581091226063-a5e2589e544e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "saas-leads",
      title: "SaaS Lead Generation Campaign",
      industry: "SaaS",
      challenge: "A B2B SaaS company struggled to generate qualified leads for their enterprise software solution.",
      solution: "Created targeted content marketing strategy, LinkedIn campaign, and automated lead nurturing workflows.",
      results: [
        "215% increase in qualified leads",
        "53% higher conversion rate from MQL to SQL",
        "31% reduction in sales cycle length"
      ],
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "FURI transformed our digital presence with their AI-powered approach. The results speak for themselves - 40% increase in qualified leads!",
      author: "Sarah Johnson",
      position: "Marketing Director, TechSolutions Inc.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The team at FURI doesn't just execute marketing campaigns - they create data-intelligent strategies that deliver real business results.",
      author: "Michael Chen",
      position: "CEO, Horizon Hospitality",
      stars: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Working with FURI has been transformative for our brand. Their emotionally intelligent approach helped us connect with our audience in ways we never imagined possible.",
      author: "Priya Sharma",
      position: "Founder, Wellness Collective",
      stars: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "FURI's WhatsApp marketing strategy doubled our customer engagement and increased conversions by 35%. Their approach is truly innovative.",
      author: "David Rodriguez",
      position: "Marketing Manager, Global Eats",
      stars: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The SmartCampaigns platform by FURI revolutionized our approach to digital marketing. We're now getting better results with half the effort.",
      author: "Lisa Patel",
      position: "Digital Director, NextGen Solutions",
      stars: 5,
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "FURI's video production team created content that perfectly captured our brand essence. The engagement metrics speak for themselves!",
      author: "Thomas Wright",
      position: "Chief Brand Officer, Urban Styles",
      stars: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const metrics = [
    {
      value: "500+",
      label: "Projects Completed"
    },
    {
      value: "150%",
      label: "Average ROI"
    },
    {
      value: "35%",
      label: "Avg. Conversion Increase"
    },
    {
      value: "98%",
      label: "Client Retention"
    }
  ];

  return (
    <div className="pt-28">
      {/* Impact Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Our Impact"
              subtitle="Real results for real businesses through data-intelligent, emotionally resonant marketing"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Metrics Section */}
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

      {/* Case Studies */}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className={`h-64 lg:h-full ${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? "order-2 lg:order-1" : ""}`}>
                    <div className="text-sm font-medium text-furi-red mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight size={16} className="text-furi-red mr-2 mt-1 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                <div className="bg-gray-50 rounded-lg p-8 neumorphic h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <CallToAction
              title="Ready to Be Our Next Success Story?"
              description="Let's collaborate to create marketing strategies that drive real results for your business."
              buttonText="Get Started"
              buttonLink="/contact"
              className="neumorphic"
            />
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Impact;
