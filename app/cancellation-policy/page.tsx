import type { Metadata } from "next";
import WildlifeDivider from "@/components/WildlifeDivider";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Sundarban Greenland Tourism",
  description: "Cancellation and Refund policy for Sundarban Greenland Tourism tour packages.",
};

export default function CancellationPolicyPage() {
  return (
    <article className="pt-32 pb-20 bg-mist min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-8 text-center">Cancellation & Refund Policy</h1>
          <WildlifeDivider variant="paws" className="mb-10" />
          
          <div className="prose prose-gray max-w-none prose-p:text-gray-600 prose-headings:text-gray-900 prose-headings:font-[family-name:var(--font-display)]">
            <p>
              In case of cancellation of tour/travel services due to any avoidable/unavoidable reason(s), we must be informed via email or phone. Cancellation charges would be effective from the date we receive the request via email/phone, and the cancellation charges are as follows:
            </p>

            <div className="mt-8">
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                  <div className="font-bold text-red-600 min-w-[120px]">Less than 10 days</div>
                  <div className="text-gray-700">prior to date of travel: <strong>100% of the package cost</strong> as cancellation charge.</div>
                </li>
                <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="font-bold text-amber-600 min-w-[120px]">10 to 20 days</div>
                  <div className="text-gray-700">prior to date of travel: <strong>25% will be refunded</strong> on your advance payment.</div>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="font-bold text-blue-600 min-w-[120px]">21 to 45 days</div>
                  <div className="text-gray-700">prior to date of travel: <strong>50% will be refunded</strong> on your advance payment.</div>
                </li>
                <li className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="font-bold text-green-600 min-w-[120px]">More than 45 days</div>
                  <div className="text-gray-700">prior to date of travel: <strong>Full Refund</strong> on your advance payment (excluding processing fees).</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
