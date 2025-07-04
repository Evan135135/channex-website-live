const PrivacyPolicy = () => {
  return (
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
  );
};

export default PrivacyPolicy;