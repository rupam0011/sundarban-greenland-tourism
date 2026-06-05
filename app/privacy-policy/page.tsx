import type { Metadata } from "next";
import WildlifeDivider from "@/components/WildlifeDivider";

export const metadata: Metadata = {
  title: "Privacy Policy | Sundarban Greenland Tourism",
  description: "Privacy Policy for Sundarban Greenland Tourism. Read about how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-32 pb-20 bg-mist min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">Privacy Policy</h1>
          <WildlifeDivider variant="paws" className="mb-10" />
          
          <div className="prose prose-gray max-w-none prose-p:text-gray-600 prose-headings:text-gray-900 prose-headings:font-[family-name:var(--font-display)]">
            <p>
              We give the most importance to the privacy of our clients. We believe that the personal information of our customers should not be shared with the third party without the prior consent or request from the customer. Every individual has the right to keep their privacy safe and at Sundarban Greenland Tourism we use all the necessary information of the customer such as contact no., email, addresses etc only for the internal purpose.
            </p>
            
            <p>
              We store our client’s contact information in our database and only use to contact with them during the course of travel with us, for sharing the status of their travel bookings with us and for the announcement of our latest deals and news etc. Sundarban Greenland Tourism stands against the unauthorized reach, misuse and discloser of the personal information of the clients strictly. We have strict guidelines and high security features to prevent this kind of mishaps.
            </p>

            <p>
              We give prior notice on our website if there any kind of changes happens in our 'Privacy Policy'. If the customer is in need of any further information on our ‘Privacy Policy’ can feel free to contact us in our email address. We will be happy to reply to the reasonable queries at our earliest possible time.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
