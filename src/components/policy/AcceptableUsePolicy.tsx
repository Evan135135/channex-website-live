const AcceptableUsePolicy = () => {
  return (
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
  );
};

export default AcceptableUsePolicy;