import type { Metadata } from "next";
import WildlifeDivider from "@/components/WildlifeDivider";

export const metadata: Metadata = {
  title: "Data Security Information | Sundarban Greenland Tourism",
  description: "Information regarding data security and secure online payments.",
};

export default function DataSecurityPage() {
  return (
    <article className="pt-32 pb-20 bg-mist min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">Data Security Information</h1>
          <WildlifeDivider variant="paws" className="mb-10" />
          
          <div className="prose prose-gray max-w-none prose-p:text-gray-600 prose-headings:text-gray-900 prose-headings:font-[family-name:var(--font-display)]">
            <h2 className="text-xl font-bold mt-8 mb-4">Data Security Information</h2>
            <p>
              Our website has an extensive firewall and high-end security system to monitor traffic and financial transactions. We do not entertain any suspicious emails, traffic on the website, and/or financial transactions. If any kind of fault happens, it will be investigated to ensure there is no violation of policy and security. Our customer care executive or other staff may contact you to verify your transaction. The secure connection between your browser and our system for financial transactions uses 128-bit Secure Sockets Layer (SSL) encryption. This technology developed by Netscape, Microsoft, and RSA Inc. is supported by most browsers. It is a trustworthy technology.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Secure Online Payments</h2>
            <p>
              We want to notify the visitors who visit our website that their name, email address, and other personal information submitted on the website may be stored with us and may also appear on the website. Sundarban Greenland Tourism uses a 3rd party secure payment gateway provided by "PayU" for financial transactions by credit card. So the credit card details are 'not stored' with Sundarban Greenland Tourism. The information is securely stored and encrypted with Visa/MasterCard. The ‘online credit card payment gateway’ provided by us for our customers is fully PCI-DSS compliant and to transfer information between Sundarban Greenland Tourism and the credit card bank we use a 128-bit SSL certificate powered by Dialect. It simply means that when the customer makes the transaction using our online payment gateway on our website, these details are being securely stored within Dialect’s fully secure vaults to ensure that the information cannot be used by malicious 3rd parties. Sundarban Greenland Tourism and/or its employees cannot view the credit card’s secure information because Dialect truncates their credit card details.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Payment Related Issues</h2>
            <p>
              Booking Confirmation mail or call will be made after completion of the verification process of payment confirmation.
            </p>
            <p>For payment confirmation these documents will be needed:</p>
            <ul>
              <li>Payment Invoice</li>
              <li>Transaction details for online payment (if required).</li>
            </ul>
            <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 mt-6">
              <strong>Note:</strong> It is an offence to claim by showing a payment invoice by using technology wrongly. In this matter, Sundarban Greenland Tourism may take legal action against these types of customers.
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
