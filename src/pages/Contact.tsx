
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  
  // Load JotForm script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/251001055179447";
    script.async = true;
    
    // Find the container element and append the script
    const jotformContainer = document.getElementById("jotform-container");
    if (jotformContainer) {
      // Clear any existing content
      jotformContainer.innerHTML = "";
      jotformContainer.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      if (jotformContainer && script.parentNode === jotformContainer) {
        jotformContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-28">
      {/* Contact Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Contact Us"
              subtitle="Ready to transform your digital presence? Get in touch with our team."
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Info and JotForm */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedElement animation="fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Use the form to reach out, and our team will get back to you as soon as possible.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Mail className="text-furi-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">admin@furiglobal.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-furi-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-furi-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        123 Innovation Way, <br />
                        Tech District, <br />
                        Mumbai, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm" id="jotform-container">
                {/* JotForm will be loaded here via the useEffect hook */}
                <div className="flex justify-center items-center h-64">
                  <p className="text-gray-500">Loading form...</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
