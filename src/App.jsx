import { useState } from "react";
import { PlanPicker } from "./components/PlanPicker";



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
    
    PlanPicker(seats, months, handleAddSeat, handleAddMonth, handleReset)
  );
}

export default App;








