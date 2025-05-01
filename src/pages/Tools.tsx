import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Copy, Download, QrCode, Upload } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";
import { useToast } from "@/hooks/use-toast";

const Tools = () => {
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState("whatsapp");

  // WhatsApp Chat Link Generator
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  // Google Reviews QR Code Generator
  const [placeId, setPlaceId] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  // Email Signature Generator
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("FURI");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("furiglobal.in");
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleWhatsappGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedNumber = whatsappNumber.replace(/[^0-9]/g, "");
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const link = `https://wa.me/${formattedNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
    setWhatsappLink(link);
  };

  const handleQrCodeGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (placeId) {
      const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(reviewUrl)}`);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: message,
        variant: "default"
      });
    });
  };

  return <div className="pt-28">
      {/* Tools Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading title="Marketing Tools" subtitle="Free tools to help you streamline your marketing efforts" />
          </AnimatedElement>
        </div>
      </section>
      
      {/* Tools Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setActiveTab("whatsapp")} className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "whatsapp" ? "bg-furi-red text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
              WhatsApp Chat Link
            </button>
            <button onClick={() => setActiveTab("reviews")} className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "reviews" ? "bg-furi-red text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
              Google Reviews QR Code
            </button>
            <button onClick={() => setActiveTab("email")} className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "email" ? "bg-furi-red text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
              Email Signature
            </button>
          </div>
        </div>
      </section>
      
      {/* Tool Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* WhatsApp Chat Link Generator */}
            {activeTab === "whatsapp" && 
              <AnimatedElement animation="fade-in">
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">WhatsApp Chat Link Generator</h2>
                  <p className="text-gray-600 mb-8">
                    Create a direct WhatsApp chat link that your customers can click to start a conversation with you instantly.
                  </p>
                  
                  <form onSubmit={handleWhatsappGenerate} className="space-y-6">
                    <div>
                      <label htmlFor="whatsapp-number" className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number (with country code)
                      </label>
                      <input type="text" id="whatsapp-number" value={whatsappNumber} onChange={e => setWhatsappNumber(e.target.value)} placeholder="e.g., 919876543210" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Pre-filled Message (optional)
                      </label>
                      <textarea id="whatsapp-message" value={whatsappMessage} onChange={e => setWhatsappMessage(e.target.value)} placeholder="e.g., Hi, I'm interested in your services." rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"></textarea>
                    </div>
                    <div>
                      <button type="submit" className="w-full bg-furi-red text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                        Generate Link
                      </button>
                    </div>
                  </form>
                  
                  {whatsappLink && <div className="mt-8 p-4 bg-white border border-gray-200 rounded-md">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Your WhatsApp Link:</h3>
                        <button onClick={() => copyToClipboard(whatsappLink, "WhatsApp link copied to clipboard!")} className="text-furi-red hover:text-opacity-80 transition-colors">
                          <Copy size={18} />
                        </button>
                      </div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 hover:underline break-all">
                        {whatsappLink}
                      </a>
                      <div className="mt-4">
                        <button onClick={() => window.open(whatsappLink, "_blank")} className="w-full bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                          Test Link
                        </button>
                      </div>
                    </div>}
                </div>
              </AnimatedElement>}
            
            {/* Google Reviews QR Code Generator */}
            {activeTab === "reviews" && 
              <AnimatedElement animation="fade-in">
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Google Reviews QR Code Generator</h2>
                  <p className="text-gray-600 mb-8">
                    Create a QR code that your customers can scan to leave a Google review for your business.
                  </p>
                  
                  <form onSubmit={handleQrCodeGenerate} className="space-y-6">
                    <div>
                      <label htmlFor="place-id" className="block text-sm font-medium text-gray-700 mb-1">
                        Google Place ID
                      </label>
                      <input type="text" id="place-id" value={placeId} onChange={e => setPlaceId(e.target.value)} placeholder="e.g., ChIJN1t_tDeuEmsRUsoyG83frY4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      <p className="mt-1 text-sm text-gray-500">
                        Don't know your Place ID?{" "}
                        <a href="https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder" target="_blank" rel="noopener noreferrer" className="text-furi-red hover:underline">
                          Find it here
                        </a>
                      </p>
                    </div>
                    <div>
                      <button type="submit" className="w-full bg-furi-red text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                        Generate QR Code
                      </button>
                    </div>
                  </form>
                  
                  {qrCodeUrl && <div className="mt-8 p-4 bg-white border border-gray-200 rounded-md text-center">
                      <h3 className="font-bold mb-4">Your Google Reviews QR Code:</h3>
                      <div className="flex justify-center mb-4">
                        <img src={qrCodeUrl} alt="Google Reviews QR Code" className="w-48 h-48" />
                      </div>
                      <div className="flex justify-center">
                        <a href={qrCodeUrl} download="google-review-qr-code.png" className="inline-flex items-center bg-furi-red text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                          <Download size={18} className="mr-2" /> Download QR Code
                        </a>
                      </div>
                    </div>}
                </div>
              </AnimatedElement>}
            
            {/* Email Signature Generator */}
            {activeTab === "email" && <AnimatedElement animation="fade-in">
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Email Signature Generator</h2>
                  <p className="text-gray-600 mb-8">
                    Create a professional email signature that represents your brand and provides all the necessary contact information.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                          Position
                        </label>
                        <input type="text" id="position" value={position} onChange={e => setPosition(e.target.value)} placeholder="e.g., Marketing Director" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g., FURI" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g., john@furiglobal.in" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="e.g., +91 98765 43210" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                          Website
                        </label>
                        <input type="text" id="website" value={website} onChange={e => setWebsite(e.target.value)} placeholder="e.g., furiglobal.in" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Logo
                      </label>
                      <div className="flex items-center">
                        <input 
                          type="file" 
                          accept="image/png, image/jpeg" 
                          className="hidden" 
                          ref={logoInputRef}
                          onChange={handleLogoUpload}
                        />
                        <button 
                          type="button" 
                          onClick={() => logoInputRef.current?.click()}
                          className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                        >
                          <Upload size={16} />
                          Upload Logo
                        </button>
                        {logoImage && (
                          <div className="ml-4 flex items-center">
                            <img 
                              src={logoImage} 
                              alt="Company logo" 
                              className="h-10 w-auto object-contain"
                            />
                            <button
                              type="button"
                              onClick={() => setLogoImage(null)}
                              className="ml-2 text-gray-400 hover:text-gray-500"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-gray-500">Recommended: PNG format with transparent background</p>
                    </div>
                  </form>
                  
                  <div className="mt-8 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="font-bold mb-4">Preview:</h3>
                    <div className="border-t border-gray-200 pt-4">
                      <table cellPadding="0" cellSpacing="0" style={{
                    fontFamily: "Arial, sans-serif"
                  }}>
                        <tbody>
                          <tr>
                            <td valign="top" style={{
                          paddingRight: "15px"
                        }}>
                              {logoImage ? (
                                <img src={logoImage} alt="Company Logo" width="80" style={{
                              display: "block"
                            }} />
                              ) : (
                                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                                  No logo
                                </div>
                              )}
                            </td>
                            <td style={{
                          borderLeft: "2px solid #C00404",
                          paddingLeft: "15px",
                          color: "#333333"
                        }}>
                              <div style={{
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: "#000000"
                          }}>
                                {name || "Your Name"}
                              </div>
                              <div style={{
                            fontSize: "14px",
                            color: "#C00404"
                          }}>
                                {position || "Your Position"} | {company}
                              </div>
                              <div style={{
                            fontSize: "13px",
                            marginTop: "5px"
                          }}>
                                {email && <div>
                                    Email:{" "}
                                    <a href={`mailto:${email}`} style={{
                                color: "#1a73e8",
                                textDecoration: "none"
                              }}>
                                      {email}
                                    </a>
                                  </div>}
                                {phone && <div>Phone: {phone}</div>}
                                {website && <div>
                                    Web:{" "}
                                    <a href={`https://${website}`} style={{
                                color: "#1a73e8",
                                textDecoration: "none"
                              }}>
                                      {website}
                                    </a>
                                  </div>}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-center">
                      <button onClick={() => {
                    const signature = document.querySelector(".border-t") as HTMLElement;
                    if (signature) {
                      const signatureHTML = signature.innerHTML;
                      copyToClipboard(signatureHTML, "Email signature copied to clipboard! Paste it into your email client's signature settings.");
                    }
                  }} className="bg-furi-red text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                        Copy Signature HTML
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedElement>}
          </div>
        </div>
      </section>
      
      {/* Tool Recommendation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Advanced Marketing Tools?</h2>
              <p className="text-gray-600 mb-8">These free tools are just the beginning. Explore our SmartCampaigns platform for AI-powered marketing automation and campaign orchestration.</p>
              <Link to="/services#smart-campaigns" className="inline-block bg-furi-red text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">Explore SmartCampaigns</Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>;
};

export default Tools;
