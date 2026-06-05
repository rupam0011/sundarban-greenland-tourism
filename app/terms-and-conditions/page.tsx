import type { Metadata } from "next";
import WildlifeDivider from "@/components/WildlifeDivider";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sundarban Greenland Tourism",
  description: "Terms and conditions for booking tours with Sundarban Greenland Tourism.",
};

export default function TermsAndConditionsPage() {
  return (
    <article className="pt-32 pb-20 bg-mist min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">Terms & Conditions</h1>
          <WildlifeDivider variant="paws" className="mb-10" />
          
          <div className="prose prose-gray max-w-none prose-p:text-gray-600 prose-headings:text-gray-900 prose-headings:font-[family-name:var(--font-display)] prose-ul:text-gray-600">
            <p>
              All bookings here are made with Sundarban Greenland Tourism. The booking terms mentioned below comprises the entire agreement between the customer and Company. By making a booking with us and/or by depositing payments with us for a tour you confirm that you have carefully read, understood and accepted the below mentioned 'Terms of Services'.
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Please make all payments before the tour starts.</li>
              <li>No insurance policy is provided for this tour; please be safe on the tour.</li>
              <li>There may be changes in the selection of cars and boats during the tour based on availability and operational needs.</li>
              <li>If you are lucky enough, only then you can spot a tiger in its natural habitat. Wildlife sightings cannot be guaranteed.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">Website Usage Policies</h2>
            <p>
              If you make transactions with the Website, You shall honor the policies that are applicable to the Website for such transactions. By mere use of the Website, You shall be contracting with Sundarban Greenland Tourism and these terms and conditions including the policies constitute your binding obligations. 
            </p>
            <p>
              We have the right, at our sole discretion, to change, modify, add or remove any section of our Terms of Use, at any time without any prior written notice to you. Reviewing these Terms of Use periodically for updates/changes is the client’s responsibility. If you continue to use the Website after changes are made, that will mean that you accept and agree to the revisions. As long as you are associated with these Terms of Use, we grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
