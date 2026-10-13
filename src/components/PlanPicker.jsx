import { Controls } from "./Controls";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PlanCard1 } from "./PlanCard1";
import { PlanCard2 } from "./PlanCard2";
import { PlanCard3 } from "./PlanCard3";
import { Summary } from "./Summary";

export function PlanPicker(seats, months, handleAddSeat, handleAddMonth, handleReset) {
  return <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">

    {Navbar()}

    <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
      {Summary(seats, months)}

      {Controls(handleAddSeat, handleAddMonth, handleReset)}
    </div>

    <main className="grid grid-cols-3 gap-8 px-20 pt-10">
      {PlanCard1(seats, months)}
      {PlanCard2(seats, months)}
      {PlanCard3(seats, months)}
    </main>

    {Footer()}
  </div>;
}

