export function Controls(handleAddSeat, handleAddMonth, handleReset) {
  return <div className="flex gap-4">
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
      className="cursor-pointer rounded-lg border-2 border-[#EEEEEF] px-8 py-3 text-xl font-bold"
      onClick={handleReset}
    >
      Reset
    </button>
  </div>;
}
