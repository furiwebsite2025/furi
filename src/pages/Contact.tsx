
import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";

const Contact = () => {
  // Load Fillout form when component mounts
  useEffect(() => {
    // Make sure any existing script is removed
    const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Clean up on component unmount
    return () => {
      const script = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
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

      {/* Contact Info and Fillout Form */}
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
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm h-full flex justify-center items-center">
                <div 
                  style={{width:"100%", height:"500px"}} 
                  data-fillout-id="o7DUk3DcUNus" 
                  data-fillout-embed-type="standard" 
                  data-fillout-inherit-parameters 
                  data-fillout-dynamic-resize
                ></div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
