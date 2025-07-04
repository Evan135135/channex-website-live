import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Policy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
                Terms & Policies
              </h1>
              <p className="text-muted-foreground font-inter">
                Updated on January 3, 2021
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-4 justify-center border-b pb-6">
              <a href="#terms" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
                Terms and Services
              </a>
              <a href="#privacy" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
                Privacy Policy
              </a>
              <a href="#acceptable" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
                Acceptable Use Policy
              </a>
              <a href="#security" className="text-primary hover:text-primary/80 transition-colors font-inter font-medium">
                Security Policy
              </a>
            </div>

            {/* Channex Customer Agreement */}
            <div id="terms" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Channex Customer Agreement
              </h2>
              <p className="text-sm text-muted-foreground font-inter italic">
                Effective starting: June 20, 2020
              </p>
              
              <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
                <p>
                  This Channex Customer Agreement (the "Agreement") is between you and buuqit.com Ltd (09250795) Trading as Channex ("Channex"). If you are agreeing to this Agreement not as an individual but on behalf of your company, then "Customer" or "you" means your company, and you are binding your company to this Agreement. Channex may modify this Agreement from time to time, subject to the terms in Section 26 (Changes to this Agreement) below.
                </p>
                
                <p>
                  By clicking on the "I agree" (or similar button) that is presented to you at the time of your Order, or by using or accessing Channex products, you indicate your assent to be bound by this Agreement.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Scope of the Agreement</h3>
                    <p>
                      This Agreement governs your initial purchase as well as any future purchases made by you that reference this Agreement. This Agreement includes our Privacy Policy, our Acceptable Use Policy, any Orders, and any other referenced policies and attachments. This Agreement applies to Channex add-ons or plugins that you purchase from the Channex Marketplace. However, it does not apply to add-ons or plugins from other vendors on the Channex Marketplace, which are covered under the Channex Marketplace Terms of Use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Types of Channex Products</h3>
                    <p>
                      This Agreement governs (a) Channex's commercially available downloadable software products (currently designated as "Server" or "Data Center" deployments) ("Software"), (b) Channex's hosted or cloud-based solutions (currently designated as "Cloud" deployments) ("Hosted Services"), and (c) any related support or maintenance services provided by Channex. Software and Hosted Services, together with related Documentation, are referred to as "Products".
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Account Registration</h3>
                    <p>
                      You may need to register for a Channex account in order to place orders or access or receive any Products. Any registration information that you provide to us must be accurate, current and complete. You must also update your information so that we may send notices, statements and other information to you by email or through your account. You are responsible for all actions taken through your accounts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Orders</h3>
                    <p>
                      Channex's Product ordering documentation or purchase flow ("Order") will specify your authorised scope of use for the Products, which may include: (a) number and type of Authorised Users, (b) storage or capacity (for Hosted Services), (c) numbers of licenses, copies or instances (for Software), or (d) other restrictions or billable units.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Authorised Users</h3>
                    <p>
                      Only the specific individuals for whom you have paid the required fees and whom you designate through the applicable Product ("Authorised Users") may access and use the Products. You are responsible for compliance with this Agreement by all Authorised Users. All use of Products by you and your Authorised Users must be within the Scope of Use and solely for the benefit of you or your Affiliates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Software Terms</h3>
                    <p>
                      Subject to the terms and conditions of this Agreement, Channex grants you a non-exclusive, non-sublicenseable and non-transferable license to install and use the Software during the applicable License Term. In any use of the Software, you must include the following attribution to Channex on all user interfaces: "Powered by Channex," which must include a hyperlink to https://channex.io.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Hosted Services Terms</h3>
                    <p>
                      Hosted Services are provided on a subscription basis. You must ensure that all Authorised Users keep their user IDs and passwords strictly confidential. Channex implements security procedures to help protect Your Data from security attacks, however we cannot guarantee that our security procedures will be error-free.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">18. Warranty Disclaimer</h3>
                    <p className="uppercase text-sm">
                      All products are provided "as is," and Channex and its suppliers expressly disclaim any and all warranties and representations of any kind, including any warranty of non-infringement, title, fitness for a particular purpose, functionality, or merchantability, whether express, implied, or statutory.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">19. Limitation of Liability</h3>
                    <p className="uppercase text-sm">
                      Neither party shall be liable for any indirect, special, incidental, reliance or consequential damages of any kind, regardless of the form of action. Neither party's aggregate liability to the other shall exceed the amount actually paid by you to us for products and support and maintenance in the 12 months immediately preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div id="privacy" className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Privacy Policy
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  At Channex, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our channel management services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Data Do We Store?</h3>
                <p>
                  Channex only stores metadata about your organisation and your organisation's properties and users.
                </p>

                <div className="space-y-3">
                  <p><strong>For authentication purposes, we store:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Usernames and/or email addresses</li>
                  </ul>

                  <p><strong>For channel management purposes, we store:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Property Details (Name, Address, Email, Facilities, Images, room types, rate plans)</li>
                    <li>Availability, prices and restriction data</li>
                    <li>Booking Metadata (including customer name, guest names, customer address, customer card details when present)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Retention</h3>
                <p>
                  Customer data is not stored for longer than it is needed. We require data about properties, bookings and users to deliver accurate data visualisations, and remove this data either upon request, or after a period (30 days max) after the account is terminated.
                </p>
                
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bookings will be deleted once they reach 2 years after departure date</li>
                  <li>Availability, Rates and Restriction data is removed for past dates daily</li>
                  <li>Credit Card information is held until 7 days after booking departure</li>
                  <li>Account data will be deleted within 30 days of account cancellation or on request</li>
                </ul>
              </div>
            </div>

            {/* Acceptable Use Policy */}
            <div id="acceptable" className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Acceptable Use Policy
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
                <p>
                  This Acceptable Use Policy describes prohibited uses of Channex services. The examples described in this policy are not exhaustive. Use your judgment, and let's be kind to each other so we can keep creating great things.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Disruption</h3>
                  <p>We won't allow:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Compromising the integrity of our systems through probing, scanning, or testing vulnerabilities</li>
                    <li>Tampering with, reverse-engineering, or hacking our services</li>
                    <li>Modifying, disabling, or compromising the integrity or performance of the services</li>
                    <li>Overwhelming our infrastructure by imposing unreasonably large loads</li>
                    <li>Using automated systems to send more requests than a human could reasonably send</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Wrongful Activities</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Misrepresentation of yourself or disguising the origin of content</li>
                    <li>Violating the privacy of others or collecting personal information without permission</li>
                    <li>Stalking, harassing, or posting threats of violence</li>
                    <li>Using services for illegal purposes or violating laws</li>
                    <li>Accessing or searching services by unsupported means</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Inappropriate Communications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Generating or sending unsolicited communications, advertising, or spam</li>
                    <li>Soliciting users for commercial purposes without authorization</li>
                    <li>Disparaging Channex or our partners, vendors, or affiliates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Inappropriate Content</h3>
                  <p>We prohibit posting, uploading, or sharing content that:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Infringes intellectual property or other rights</li>
                    <li>Is deceptive, fraudulent, illegal, obscene, defamatory, or threatening</li>
                    <li>Encourages illegal conduct or is otherwise inappropriate</li>
                    <li>Attacks others based on race, ethnicity, religion, gender, or other protected characteristics</li>
                    <li>Contains viruses, malware, or other harmful materials</li>
                  </ul>
                </div>

                <p className="text-sm bg-muted/50 p-4 rounded-lg">
                  <strong>Note:</strong> Channex may permanently or temporarily terminate or suspend a user's account without notice if we determine that a user has violated this Acceptable Use Policy.
                </p>
              </div>
            </div>

            {/* Security Policy */}
            <div id="security" className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Security Policy
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Executive Overview</h3>
                  <p>
                    The Channex Enterprise Connectivity Platform is designed to help Enterprises and Independent Software Vendors (ISVs) securely connect channels and deliver them to hotels, customers, and partners. Channex realizes that helping to protect our customer's data, ensure proper security regulations, and mitigate any potential risk is essential to building trust and delivering a high-level of service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Security Standards</h3>
                  <p>Our security implementation allows us to adhere to the following best practices:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Abides by the ISO27001 security technical specifications</li>
                    <li>Abides by the PCI DSS security technical specifications</li>
                    <li>Abides by the EU Data Directive by entering into Model Clauses with applicable customers, partners, and suppliers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Defense in Depth</h3>
                  <p>
                    As you'll see from any best-in-class SaaS provider, there is no single layer that protects customer data, but rather a well-architected solution that considers every layer from the physical security measures at the data center, all the way through the access privileges that determine what data an individual user can access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Physical Security</h3>
                  <p>All Channex data centres are certified to major InfoSec standards, including ISO 27001 and PCI DSS. These data centres feature:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Keycard protocols, biometric scanning protocols, and around-the-clock surveillance</li>
                    <li>Access limited to authorised datacenter personnel with prior clearance and appropriate escort</li>
                    <li>Thorough background security checks for all data centre employees</li>
                    <li>N+1 redundant HVAC and UPS systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure Security</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Firewalls:</strong> Multi-layered firewall operating in deny-all mode with database servers behind additional firewalls</li>
                    <li><strong>Networking:</strong> Separate VLANs split production, testing and development environments</li>
                    <li><strong>Systems Hardening:</strong> Unnecessary services are removed/disabled to reduce vulnerabilities</li>
                    <li><strong>Security Patches:</strong> Rigorous policies for updating all platform components with security patches</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Access Control</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>No root access - all customer access is controlled through user interfaces and APIs</li>
                    <li>Username and password required with appropriate privileges</li>
                    <li>All unnecessary ports are shut down</li>
                    <li>Operational access limited to restricted set of Channex operations employees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Training & Compliance</h3>
                  <p>
                    Channex employees authorised to access the platform undergo periodic training focusing on compliance with corporate security policies. DevOps and Professional Services personnel regularly undergo security, auditing, access, and compliance training (e.g. for GDPR).
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Reporting Security Issues</h3>
                  <p>
                    If you discover a security vulnerability, please report it to our security team at{" "}
                    <a href="mailto:security@channex.io" className="text-primary hover:text-primary/80">
                      security@channex.io
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 border-t pt-8">
              <h3 className="text-xl font-semibold text-foreground font-inter">
                Questions About Our Policies?
              </h3>
              <p className="text-muted-foreground font-inter">
                If you have any questions about these terms and policies, please contact us at{" "}
                <a href="mailto:legal@channex.io" className="text-primary hover:text-primary/80">
                  legal@channex.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;