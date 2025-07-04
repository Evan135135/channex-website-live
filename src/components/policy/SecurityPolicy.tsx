const SecurityPolicy = () => {
  return (
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
  );
};

export default SecurityPolicy;