import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Summary } from "./components/Summary";
import { PlanCard1 } from "./components/PlanCard1";
import { PlanCard2 } from "./components/PlanCard2";
import { PlanCard3 } from "./components/PlanCard3";



function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      
      {Navbar()}

      <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
        {Summary(seats, months)}

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
            onClick={handleAddSeat}
          >
            Add seat
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
            onClick={handleAddMonth}
          >
            Add month
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        {PlanCard1(seats, months)}
        {PlanCard2(seats, months)}
        {PlanCard3(seats, months)}
      </main>

      {Footer()}
    </div>
  );
}

export default App;







