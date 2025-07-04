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
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#terms" className="text-primary hover:text-primary/80 transition-colors font-inter">
                Terms and Services
              </a>
              <a href="#privacy" className="text-primary hover:text-primary/80 transition-colors font-inter">
                Privacy Policy
              </a>
              <a href="#acceptable" className="text-primary hover:text-primary/80 transition-colors font-inter">
                Acceptable Use Policy
              </a>
              <a href="#security" className="text-primary hover:text-primary/80 transition-colors font-inter">
                Security Policy
              </a>
            </div>

            {/* Terms and Services */}
            <div id="terms" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Channex Customer Agreement
              </h2>
              <p className="text-sm text-muted-foreground font-inter italic">
                Effective starting: June 20, 2020
              </p>
              
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  This Channex Customer Agreement (the "Agreement") is between you and buuqit.com Ltd (09250795) Trading as Channex ("Channex"). If you are agreeing to this Agreement not as an individual but on behalf of your company, then "Customer" or "you" means your company, and you are binding your company to this Agreement. Channex may modify this Agreement from time to time, subject to the terms in Section 26 (Changes to this Agreement) below.
                </p>
                
                <p>
                  By clicking on the "I agree" (or similar button) that is presented to you at the time of your Order, or by using or accessing Channex products, you indicate your assent to be bound by this Agreement.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Scope of the Agreement</h3>
                <p>
                  This Agreement governs your initial purchase as well as any future purchases made by you that reference this Agreement. This Agreement includes our Privacy Policy, our Acceptable Use Policy, any Orders, and any other referenced policies and attachments. This Agreement applies to Channex add-ons or plugins that you purchase from the Channex Marketplace.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Types of Channex Products</h3>
                <p>
                  This Agreement governs (a) Channex's commercially available downloadable software products (currently designated as "Server" or "Data Center" deployments) ("Software"), (b) Channex's hosted or cloud-based solutions (currently designated as "Cloud" deployments) ("Hosted Services"), and (c) any related support or maintenance services provided by Channex.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Account Registration</h3>
                <p>
                  You may need to register for a Channex account in order to place orders or access or receive any Products. Any registration information that you provide to us must be accurate, current and complete. You are responsible for all actions taken through your accounts.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Orders</h3>
                <p>
                  Channex's Product ordering documentation or purchase flow ("Order") will specify your authorised scope of use for the Products, which may include: (a) number and type of Authorised Users, (b) storage or capacity (for Hosted Services), (c) numbers of licenses, copies or instances (for Software), or (d) other restrictions or billable units.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div id="privacy" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Privacy Policy
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Channex is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, company information, and usage data.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>

            {/* Acceptable Use Policy */}
            <div id="acceptable" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Acceptable Use Policy
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  This Acceptable Use Policy describes prohibited uses of Channex services. The examples described in this policy are not exhaustive.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Prohibited Activities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using our services for any illegal activities</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with or disrupting our services</li>
                  <li>Transmitting malware or malicious code</li>
                  <li>Violating the privacy or rights of others</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Enforcement</h3>
                <p>
                  We may take any action we deem appropriate to address violations of this policy, including suspending or terminating your access to our services.
                </p>
              </div>
            </div>

            {/* Security Policy */}
            <div id="security" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-inter">
                Security Policy
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Security is a top priority at Channex. We implement comprehensive security measures to protect our systems and your data.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data encryption in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Continuous monitoring and threat detection</li>
                  <li>Incident response procedures</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Reporting Security Issues</h3>
                <p>
                  If you discover a security vulnerability, please report it to our security team at <a href="mailto:security@channex.io" className="text-primary hover:text-primary/80">security@channex.io</a>.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Your Responsibilities</h3>
                <p>
                  You are responsible for maintaining the security of your account credentials and ensuring that your use of our services complies with applicable security requirements.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
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