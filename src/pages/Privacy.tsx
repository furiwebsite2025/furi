
import { useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedElement from "@/components/AnimatedElement";

const Privacy = () => {
  // Ensure scroll to top when page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Header Section */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container mx-auto px-6">
          <AnimatedElement animation="fade-in">
            <SectionHeading
              title="Privacy Policy"
              subtitle="Last updated April 14, 2025"
              alignment="center"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <AnimatedElement animation="fade-in" delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                This Privacy Notice for Furi Media Services ('we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
              </p>
              <ul className="mb-8">
                <li>Visit our website at <a href="http://www.furiglobal.in" className="text-furi-red hover:underline">http://www.furiglobal.in</a>, or any website of ours that links to this Privacy Notice</li>
                <li>Use FURI. FURI is an AI-powered digital marketing agency that offers end-to-end marketing solutions for businesses across industries. Our services include brand strategy, creative design, content development, AI chatbot development, performance marketing, website and application development, and data-driven campaign management. We help brands accelerate growth through intelligent, emotionally resonant marketing experiences delivered across digital platforms.</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="mb-8">
                Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:admin@furiglobal.in" className="text-furi-red hover:underline">admin@furiglobal.in</a>.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">SUMMARY OF KEY POINTS</h2>
              <p className="mb-4">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>

              <ul className="space-y-4 mb-8">
                <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
                <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
                <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</li>
                <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
                <li><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</li>
                <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
                <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
              </ul>

              <p className="text-base font-medium">Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-5 mb-12 space-y-2">
                <li>WHAT INFORMATION DO WE COLLECT?</li>
                <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
              </ol>

              <h2 className="text-2xl font-bold mt-12 mb-6">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3 className="text-xl font-semibold mt-8 mb-4">Personal information you disclose to us</h3>
              <p className="italic mb-4">In Short: We collect personal information that you provide to us.</p>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <p className="mb-4"><strong>Personal Information Provided By You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
              </ul>
              <p className="mb-4"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
              <p className="mb-8">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Information automatically collected</h3>
              <p className="italic mb-4">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
              <p className="mb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
              <p className="mb-4">The information we collect includes:</p>
              <ul className="mb-8 space-y-4">
                <li>
                  <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).
                </li>
                <li>
                  <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                </li>
                <li>
                  <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="italic mb-4">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              <p className="mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
              <ul className="list-disc pl-5 mb-8">
                <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
                <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p className="italic mb-4">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
              <p className="mb-4">We may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-5 mb-8">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p className="italic mb-4">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
              <p className="mb-4">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
              <p className="mb-4">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
              <p className="mb-8">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Google Analytics</h3>
              <p className="mb-8">We may share your information with Google Analytics to track and analyse the use of the Services. The Google Analytics Advertising Features that we may use include: Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-furi-red hover:underline">https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include <a href="http://optout.networkadvertising.org/" className="text-furi-red hover:underline">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" className="text-furi-red hover:underline">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
              <p className="italic mb-4">In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
              <p className="mb-4">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our AI Products</h3>
              <p className="mb-4">Our AI Products are designed for the following functions:</p>
              <ul className="list-disc pl-5 mb-8">
                <li>AI bots</li>
                <li>AI applications</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">How We Process Your Data Using AI</h3>
              <p className="mb-8">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="italic mb-4">In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
              <p className="mb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
              <p className="mb-8">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="italic mb-4">In Short: We aim to protect your personal information through a system of organisational and technical security measures.</p>
              <p className="mb-8">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p className="italic mb-4">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
              <p className="mb-8">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:admin@furiglobal.in" className="text-furi-red hover:underline">admin@furiglobal.in</a>.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="italic mb-4">In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
              <p className="mb-4"><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
              <p className="mb-8">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
              <p className="mb-4"><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
              <p className="mb-8">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:admin@furiglobal.in" className="text-furi-red hover:underline">admin@furiglobal.in</a>.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p className="mb-8">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p className="italic mb-4">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
              <p className="mb-8">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p className="mb-4">If you have questions or comments about this notice, you may email us at <a href="mailto:admin@furiglobal.in" className="text-furi-red hover:underline">admin@furiglobal.in</a> or contact us by post at:</p>
              <address className="mb-8 not-italic">
                Furi Media Services<br />
                Balayya Sastry Layout<br />
                Seethamdhara<br />
                Visakhapatnam, Andhra Pradesh 530013<br />
                India
              </address>

              <h2 className="text-2xl font-bold mt-12 mb-6">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <p className="mb-8">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
