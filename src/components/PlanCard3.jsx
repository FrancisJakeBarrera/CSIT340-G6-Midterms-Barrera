import { Feature1PC3 } from "./Feature1PC3";
import { Feature2PC3 } from "./Feature2PC3";

export function PlanCard3(seats, months) {
  return <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
    <div className="p-8">
      <h3 className="text-3xl font-bold">Business</h3>
      <p className="mt-2 text-xl">PHP 999 per seat each month</p>
      <ul className="mt-6 text-xl">
        {Feature1PC3}
        {Feature2PC3}
      </ul>
    </div>
    <p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
      Total: PHP {999 * seats * months}
    </p>
  </div>;
}
