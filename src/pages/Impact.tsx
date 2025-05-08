
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";
import CaseStudiesSection from "@/components/impact/CaseStudiesSection";
import TestimonialsSection from "@/components/impact/TestimonialsSection";
import MetricsSection from "@/components/impact/MetricsSection";

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
      image: "/lovable-uploads/7dae6233-9d9e-4868-8588-71b3f650ac06.png"
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
      image: "/lovable-uploads/review.png"
    },
    {
      quote: "The team at FURI doesn't just execute marketing campaigns - they create data-intelligent strategies that deliver real business results.",
      author: "Michael Chen",
      position: "CEO, Horizon Hospitality",
      stars: 5,
      image: "/lovable-uploads/review.png"
    },
    {
      quote: "Working with FURI has been transformative for our brand. Their emotionally intelligent approach helped us connect with our audience in ways we never imagined possible.",
      author: "Priya Sharma",
      position: "Founder, Wellness Collective",
      stars: 5,
      image: "/lovable-uploads/review.png"
    },
    {
      quote: "FURI's WhatsApp marketing strategy doubled our customer engagement and increased conversions by 35%. Their approach is truly innovative.",
      author: "David Rodriguez",
      position: "Marketing Manager, Global Eats",
      stars: 5,
      image: "/lovable-uploads/review.png"
    },
    {
      quote: "The SmartCampaigns platform by FURI revolutionized our approach to digital marketing. We're now getting better results with half the effort.",
      author: "Lisa Patel",
      position: "Digital Director, NextGen Solutions",
      stars: 5,
      image: "/lovable-uploads/review.png"
    },
    {
      quote: "FURI's video production team created content that perfectly captured our brand essence. The engagement metrics speak for themselves!",
      author: "Thomas Wright",
      position: "Chief Brand Officer, Urban Styles",
      stars: 5,
      image: "/lovable-uploads/review.png"
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
      <MetricsSection metrics={metrics} />

      {/* Case Studies */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

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
