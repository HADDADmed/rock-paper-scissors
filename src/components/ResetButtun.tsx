import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { resetGame } from "../features/gameSlice";
import ResetIcon from "../assets/icons/reset.png";

const ResetButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <button
      onClick={handleReset}
      type="button"
      className="rounded-md p-2.5 text-center text-sm transition-all shadow-sm hover:scale-110 focus:scale-110 text-red-500  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      <img src={ResetIcon} alt="Reset" className="w-18 h-18" />
    </button>
  );
};

export default ResetButton;
