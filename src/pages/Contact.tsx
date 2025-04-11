
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // This function will be used to handle form submission
  // In a real app, you would connect this to your backend
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1000);
  };

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

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedElement animation="fade-in">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you as soon as possible.
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
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-furi-red text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-furi-red text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              {/* Embed a Google Maps iframe or use a map library here */}
              <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Map Integration Placeholder</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* JotForm Embed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Contact Form"
              subtitle="You can also reach us using the form below"
            />
            <div className="max-w-4xl mx-auto">
              <div id="jotform-embed" className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <script
                  type="text/javascript"
                  src="https://form.jotform.com/jsform/251001055179447"
                ></script>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Contact;
