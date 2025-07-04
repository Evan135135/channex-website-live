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
                      This Agreement governs (a) Channex's commercially available downloadable software products (currently designated as "Server" or "Data Center" deployments) ("Software"), (b) Channex's hosted or cloud-based solutions (currently designated as "Cloud" deployments) ("Hosted Services"), and (c) any related support or maintenance services provided by Channex. Software and Hosted Services, together with related Documentation, are referred to as "Products". The Products and their permitted use are further described in Channex's standard documentation ("Documentation"). Section 6 (Software Terms) applies specifically to Software, and Section 7 (Hosted Services Terms) applies specifically to Hosted Services, but unless otherwise specified, other provisions of this Agreement apply to all Products.
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
                      4.1 Directly with Channex. Channex's Product ordering documentation or purchase flow ("Order") will specify your authorised scope of use for the Products, which may include: (a) number and type of Authorised Users (as defined below), (b) storage or capacity (for Hosted Services), (c) numbers of licenses, copies or instances (for Software), or (d) other restrictions or billable units (as applicable, the "Scope of Use"). The term "Order" also includes any applicable Product or Support and Maintenance renewal, or purchases you make to increase or upgrade your Scope of Use.
                    </p>
                    <p>
                      4.2 Reseller Orders. This Agreement applies whether you purchase our Products directly from Channex or through authorised resellers (each, a "Reseller"). If you purchase through a Reseller, your Scope of Use shall be as stated in the Order placed by Reseller for you, and Reseller is responsible for the accuracy of any such Order. Resellers are not authorised to make any promises or commitments on Channex's behalf, and we are not bound by any obligations to you other than what we specify in this Agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Authorised Users</h3>
                    <p>
                      Only the specific individuals for whom you have paid the required fees and whom you designate through the applicable Product ("Authorised Users") may access and use the Products. Some Products may allow you to designate different types of Authorised Users, in which case pricing and functionality may vary according to the type of Authorised User. Authorised Users may be you or your Affiliates' employees, representatives, consultants, contractors, agents, or other third parties who are acting for your benefit or on your behalf. You may also permit your customers to have limited access to certain Products as Authorised Users. You may increase the number of Authorised Users permitted to access your instance of the Product by placing a new Order or, in some cases, directly through the Product. In all cases, you must pay the applicable fee for the increased number of Authorised Users. You are responsible for compliance with this Agreement by all Authorised Users. All use of Products by you and your Authorised Users must be within the Scope of Use and solely for the benefit of you or your Affiliates. "Affiliate" means an entity which, directly or indirectly, owns or controls, is owned or is controlled by or is under common ownership or control with a party, where "control" means the power to direct the management or affairs of an entity, and "ownership" means the beneficial ownership of 50% (or, if the applicable jurisdiction does not allow majority ownership, the maximum amount permitted under such law) or more of the voting equity securities or other equivalent voting interests of the entity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Software Terms</h3>
                    <p>
                      6.1 Your License Rights. Subject to the terms and conditions of this Agreement, Channex grants you a non-exclusive, non-sublicenseable and non-transferable license to install and use the Software during the applicable License Term in accordance with this Agreement, your applicable Scope of Use, and the Documentation. The term of each Software license ("License Term") will be specified in your Order. Your License Term will end upon any termination of this Agreement, even if it is identified as "perpetual" or if no expiration date is specified in your Order. The Software requires a license key in order to operate, which will be delivered as described in Section 10.2 (Delivery).
                    </p>
                    <p>
                      6.2 Number of Instances. Unless otherwise specified in your Order, for each Software license that you purchase, you may install one production instance of the Software on systems owned or operated by you (or your third party service providers so long as you remain responsible for their compliance with the terms and conditions of this Agreement). We also make available "developer" licenses free of charge for certain of our Software offerings to allow you to deploy non-production instances, such as for staging or QA purposes. Details for how to request non-production licenses are available on our website.
                    </p>
                    <p>
                      6.3 Your Modifications. Subject to the terms and conditions of this Agreement (including without limitation Section 2 (Combining the Products with Open Source Software) of Third Party Code in Channex Products): (1) for any elements of the Software provided by Channex in source code form, and to the extent permitted in the Documentation, you may modify such source code solely for purposes of developing bug fixes, customizations and additional features for the Software and (2) you may also modify the Documentation to reflect your permitted modifications of the Software source code or the particular use of the Products within your organization. Any modified source code or Documentation constitutes "Your Modifications". You may use Your Modifications solely with respect to your own instances in support of your permitted use of the Software but you may not distribute the code to Your Modifications to any third party. Notwithstanding anything in this Agreement to the contrary, Channex has no support, warranty, indemnification or other obligation or liability with respect to Your Modifications or their combination, interaction or use with our Products. You shall indemnify, defend and hold us harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including reasonable attorneys' fees and costs) arising out of or in connection with any claim brought against us by a third party relating to Your Modifications (including but not limited to any representations or warranties you make about Your Modifications or the Software) or your breach of this Section 6.3. This indemnification obligation is subject to your receiving (i) prompt written notice of such claim (but in any event notice in sufficient time for you to respond without prejudice); (ii) the exclusive right to control and direct the investigation, defense, or settlement of such claim; and (iii) all reasonably necessary cooperation of Channex at your expense.
                    </p>
                    <p>
                      6.4 Attribution. In any use of the Software, you must include the following attribution to Channex on all user interfaces in the following format: "Powered by Channex," which must in every case include a hyperlink to https://channex.io, and which must be in the same format as delivered in the Software.
                    </p>
                    <p>
                      6.5 Third Party Code. The Software includes code and libraries licensed to us by third parties, including open source software. See Third Party Code in Channex Products for additional provisions regarding our use of third party code.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Hosted Services Terms</h3>
                    <p>
                      7.1 Access to Hosted Services. Subject to the terms and conditions of this Agreement, Channex grants you a non-exclusive right to access and use the Hosted Services during the applicable Subscription Term (as defined below) in accordance with this Agreement, your applicable Scope of Use and the Documentation. If Channex offers client software (e.g., a desktop or mobile application) for any Hosted Service, you may use such software solely with the Hosted Service, subject to the terms and conditions of this Agreement. You acknowledge that our Hosted Services are on-line, subscription-based products and that we may make changes to the Hosted Services from time to time.
                    </p>
                    <p>
                      7.2 Subscription Terms and Renewals. Hosted Services are provided on a subscription basis for a set term specified in your Order ("Subscription Term"). Except as otherwise specified in your Order, all subscriptions will automatically renew for periods equal to your initial Subscription Term (and you will be charged at the then-current rates) unless you cancel your subscription through your account. If you cancel, your subscription will terminate at the end of then-current billing cycle, but you will not be entitled to any credits or refunds for amounts accrued or paid prior to such termination.
                    </p>
                    <p>
                      7.3 Credentials. You must ensure that all Authorised Users keep their user IDs and passwords for the Hosted Services strictly confidential and not share such information with any unauthorised person. User IDs are granted to individual, named persons and may not be shared. You are responsible for any and all actions taken using your accounts and passwords, and you agree to immediately notify Channex of any unauthorised use of which you become aware.
                    </p>
                    <p>
                      7.4 Your Data. "Your Data" means any data, content, code, video, images or other materials of any type that you upload, submit or otherwise transmit to or through Hosted Services. You will retain all right, title and interest in and to Your Data in the form provided to Channex. Subject to the terms of this Agreement, you hereby grant to Channex a non-exclusive, worldwide, royalty-free right to (a) collect, use, copy, store, transmit, modify and create derivative works of Your Data, in each case solely to the extent necessary to provide the applicable Hosted Service to you and (b) for Hosted Services that enable you to share Your Data or interact with other people, to distribute and publicly perform and display Your Data as you (or your Authorised Users) direct or enable through the Hosted Service. Channex may also access your account or instance in order to respond to your support requests.
                    </p>
                    <p>
                      7.5 Security. Channex implements security procedures to help protect Your Data from security attacks. However, you understand that use of the Hosted Services necessarily involves transmission of Your Data over networks that are not owned, operated or controlled by us, and we are not responsible for any of Your Data lost, altered, intercepted or stored across such networks. We cannot guarantee that our security procedures will be error-free, that transmissions of Your Data will always be secure or that unauthorised third parties will never be able to defeat our security measures or those of our third party service providers.
                    </p>
                    <p>
                      7.6 Storage Limits. There may be storage limits associated with a particular Hosted Service. These limits are described in the services descriptions on our websites or in the Documentation for the particular Hosted Service. Channex reserves the right to charge for additional storage or overage fees at the rates specified on our website. We may impose new, or may modify existing, storage limits for the Hosted Services at any time in our discretion, with or without notice to you.
                    </p>
                    <p>
                      7.7 Responsibility for Your Data.
                    </p>
                    <p>
                      7.7.1 General. You must ensure that your use of Hosted Services and all Your Data is at all times compliant with our Acceptable Use Policy and all applicable local, state, federal and international laws and regulations ("Laws"). You represent and warrant that: (i) you have obtained all necessary rights, releases and permissions to provide all Your Data to Channex and to grant the rights granted to Channex in this Agreement and (ii) Your Data and its transfer to and use by Channex as authorised by you under this Agreement do not violate any Laws (including without limitation those relating to export control and electronic communications) or rights of any third party, including without limitation any intellectual property rights, rights of privacy, or rights of publicity, and any use, collection and disclosure authorised herein is not inconsistent with the terms of any applicable privacy policies. Other than its security obligations under Section 7.5 (Security), Channex assumes no responsibility or liability for Your Data, and you shall be solely responsible for Your Data and the consequences of using, disclosing, storing, or transmitting it.
                    </p>
                    <p>
                      7.7.2 Sensitive Data. You will not submit to the Hosted Services (or use the Hosted Services to collect): (i) any personally identifiable information, except as necessary for the establishment of your Channex account; (ii) any patient, medical or other protected health information regulated by HIPAA or any similar federal or state laws, rules or regulations; or (iii) any other information subject to regulation or protection under specific laws such as the Gramm-Leach-Bliley Act (or related rules or regulations) ((i) through (iii), collectively, "Sensitive Data"). You also acknowledge that Channex is not acting as your Business Associate or subcontractor (as such terms are defined and used in HIPAA) and that the Hosted Services are not HIPAA compliant. "HIPAA" means the Health Insurance Portability and Accountability Act, as amended and supplemented. Notwithstanding any other provision to the contrary, Channex has no liability under this Agreement for Sensitive Data.
                    </p>
                    <p>
                      7.7.3 Indemnity for Your Data. You will defend, indemnify and hold harmless Channex from and against any loss, cost, liability or damage, including attorneys' fees, for which Channex becomes liable arising from or relating to any claim relating to Your Data, including but not limited to any claim brought by a third party alleging that Your Data, or your use of the Hosted Services in breach of this Agreement, infringes or misappropriates the intellectual property rights of a third party or violates applicable law. This indemnification obligation is subject to your receiving (i) prompt written notice of such claim (but in any event notice in sufficient time for you to respond without prejudice); (ii) the exclusive right to control and direct the investigation, defense, or settlement of such claim; and (iii) all reasonable necessary cooperation of Channex at your expense.
                    </p>
                    <p>
                      7.8 Removals and Suspension. Channex has no obligation to monitor any content uploaded to the Hosted Services. Nonetheless, if we deem such action necessary based on your violation of this Agreement or in response to takedown requests that we receive following our guidelines for Reporting Copyright and Trademark Violations, we may (1) remove Your Data from the Hosted Services or (2) suspend your access to the Hosted Services. We will generally alert you when we take such action and give you a reasonable opportunity to cure your breach, but if we determine that your actions endanger the operation of the Hosted Service or other users, we may suspend your access immediately without notice. You will continue to be charged for the Hosted Service during any suspension period. We have no liability to you for removing or deleting Your Data from or suspending your access to any Hosted Services as described in this section.
                    </p>
                    <p>
                      7.9 Deletion at End of Subscription Term. We may remove or delete Your Data within a reasonable period of time after the termination of your Subscription Term.
                    </p>
                    <p>
                      7.10 Service-Specific Terms. Some of our Hosted Services may be subject to additional terms specific to that service as set forth in our Service-Specific Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Support and Maintenance</h3>
                    <p>
                      Channex will provide the support and maintenance services for the Products described in the Channex Support Policy ("Support and Maintenance") during the period for which you have paid the applicable fee. Support and Maintenance is subject to the terms of the Channex Support Policy and will be provided at the support level and during the support term specified in your Order. The Channex Support Policy may be modified by Channex from time to time to reflect process improvements or changing practices. Support and Maintenance for Software includes access to New Releases, if and when available. You may use any New Releases that we provide to you during a valid support term in the same way that you use Software, and New Releases are included in the definition of Software in that case. "New Releases" are bug fixes, patches, major or minor releases, or any other changes, enhancements, or modifications to the Software that we make generally commercially available.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">9. TAM and Training Services</h3>
                    <p>
                      We will provide Technical Account Manager (TAM) and training services purchased in an Order in accordance with the descriptions and conditions for those services set forth in the Order and the accompanying service descriptions or datasheets ("Ancillary Services"). Channex shall retain all right, title and interest in and to any materials, deliverables, modifications, derivative works or developments related to any training services we provide ("Training Materials"). Any Training Materials provided to you may be used only in connection with the Products subject to the same use restrictions for the Products. If applicable, you will reimburse Channex for reasonable travel and lodging expenses as incurred.
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