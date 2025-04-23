
import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import CallToAction from "@/components/CallToAction";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const teamMembers = [{
    name: "Alex Sharma",
    position: "Founder & CEO",
    bio: "Alex founded FURI with a vision to combine AI technology with human creativity to transform digital marketing.",
    image: "/lovable-uploads/903d3a21-d27e-417c-a46c-dcad2772ab7f.png"
  }, {
    name: "Mia Johnson",
    position: "Creative Director",
    bio: "Mia leads our creative team, ensuring every campaign is visually stunning and emotionally resonant.",
    image: "/lovable-uploads/08ebd681-cd24-49ff-8ff3-15c1da7caa6f.png"
  }, {
    name: "David Chen",
    position: "Head of AI Strategy",
    bio: "David combines his expertise in artificial intelligence with marketing strategy to develop innovative solutions.",
    image: "/lovable-uploads/47a441ac-bbba-49d0-a29e-4fe519329f9b.png"
  }, {
    name: "Priya Patel",
    position: "Client Success Manager",
    bio: "Priya ensures our clients receive exceptional service and achieve their marketing objectives.",
    image: "/lovable-uploads/ad5a2a52-6bef-4be7-951f-1b7cebe9d911.png"
  }, {
    name: "James Wilson",
    position: "Growth Marketing Lead",
    bio: "James specializes in developing data-driven strategies that accelerate business growth.",
    image: "/lovable-uploads/cc4f7821-8758-4e29-a990-47f9bd716334.png"
  }, {
    name: "Sophia Rodriguez",
    position: "Content Strategy Director",
    bio: "Sophia crafts compelling narratives that connect brands with their audiences on a deeper level.",
    image: "/lovable-uploads/e85c9a0a-a3c0-49d9-be3b-b12272846680.png"
  }];
  
  const values = [{
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to stay at the forefront of digital marketing.",
    icon: "💡"
  }, {
    title: "Intelligence",
    description: "We leverage data and AI to make informed decisions that drive measurable results.",
    icon: "🧠"
  }, {
    title: "Creativity",
    description: "We believe in the power of creative thinking to solve complex marketing challenges.",
    icon: "✨"
  }, {
    title: "Collaboration",
    description: "We work closely with our clients, treating their business goals as our own.",
    icon: "🤝"
  }];

  return <div className="pt-20 sm:pt-24 md:pt-28">
      {/* About Header */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="About FURI" subtitle="AI-powered, human-led digital marketing agency transforming ideas into impactful campaigns" />
          </AnimatedElement>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedElement animation="fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                FURI was born from a simple but powerful idea: to combine the analytical power of artificial intelligence with the emotional intelligence of human creativity.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Founded in 2016, we set out to create a new kind of digital marketing agency—one that leverages cutting-edge technology to create campaigns that don't just reach audiences but resonate with them on a deeper level.</p>
              <p className="text-base sm:text-lg text-gray-600">
                Today, we're proud to work with clients across diverse industries, helping them navigate the ever-changing digital landscape and achieve meaningful results that drive business growth.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="slide-up">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/ourstory.jpg"
                    alt="FURI Team collaborating on a project"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/lovable-uploads/5255dd03-2422-4527-a7d4-1b62f2257659.png";
                    }}
                  />
                </AspectRatio>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <AnimatedElement animation="fade-in">
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To create data-intelligent, emotionally resonant digital marketing campaigns that transform ideas into impactful results for our clients.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To lead the evolution of digital marketing by pioneering the perfect balance between AI-powered analytics and human-driven creativity.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="Our Values" subtitle="The principles that guide our work and relationships" />
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => <AnimatedElement key={value.title} animation="slide-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-sm h-full flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              </AnimatedElement>)}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedElement animation="slide-up" className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/hww.jpg"
                    alt="Our collaborative work approach"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/lovable-uploads/6b76ff39-d360-4e35-8510-5c0c27048897.png";
                    }}
                  />
                </AspectRatio>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">How We Work</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Our approach is simple but effective: we combine the analytical power of AI with the emotional intelligence of human creativity.
              </p>
              <ol className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="bg-furi-red text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">1</span>
                  <div>
                    <h4 className="font-bold mb-1 text-base sm:text-lg">Discover</h4>
                    <p className="text-sm sm:text-base text-gray-600">We start by deeply understanding your business, audience, and objectives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-furi-red text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">2</span>
                  <div>
                    <h4 className="font-bold mb-1 text-base sm:text-lg">Analyze</h4>
                    <p className="text-sm sm:text-base text-gray-600">Our AI tools analyze data to uncover insights and opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-furi-red text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">3</span>
                  <div>
                    <h4 className="font-bold mb-1 text-base sm:text-lg">Create</h4>
                    <p className="text-sm sm:text-base text-gray-600">Our creative team develops compelling campaigns based on data insights.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-furi-red text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">4</span>
                  <div>
                    <h4 className="font-bold mb-1 text-base sm:text-lg">Execute</h4>
                    <p className="text-sm sm:text-base text-gray-600">We implement campaigns across channels with precision and care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-furi-red text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">5</span>
                  <div>
                    <h4 className="font-bold mb-1 text-base sm:text-lg">Optimize</h4>
                    <p className="text-sm sm:text-base text-gray-600">We continuously monitor performance and optimize for better results.</p>
                  </div>
                </li>
              </ol>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <CallToAction title="Ready to Work With Us?" description="Let's collaborate to transform your marketing and achieve your business goals." buttonText="Get in Touch" buttonLink="/contact" className="neumorphic" />
          </AnimatedElement>
        </div>
      </section>
    </div>;
};

export default About;
