
import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";

const Contact = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28">
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Contact Us"
              subtitle="Ready to transform your digital presence? Get in touch with our team."
            />
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <AnimatedElement animation="fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Use the form to reach out, and our team will get back to you as soon as possible.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-start">
                    <Mail className="text-furi-red mr-3 sm:mr-4 flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm sm:text-base">Email Us</h3>
                      <p className="text-xs sm:text-sm text-gray-600">admin@furiglobal.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-furi-red mr-3 sm:mr-4 flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm sm:text-base">Call Us</h3>
                      <p className="text-xs sm:text-sm text-gray-600">+91 7416992299</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-furi-red mr-3 sm:mr-4 flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm sm:text-base">Visit Us</h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        TPT Colony, <br />
                        Balayya Sastri Layout, <br />
                        Seethammadara, <br />
                        Visakhapatnam, <br />
                        Andhra Pradesh 530013
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm h-full flex justify-center items-center">
                <div 
                  style={{width:"100%", height:"450px", maxHeight: "85vh"}} 
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
