"use client";

import { useState } from "react";

export default function Home() {
  const formatTHB = (amount: number) =>
    amount.toLocaleString("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 2,
    });

  const [bill, setBill] = useState<string>("");
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [tipTotal, setTipTotal] = useState<number>(0);
  const [billTotal, setBillTotal] = useState<number>(0);

  const calculateTip = () => {
    const billNumber = Number(bill) || 0;
    const tip = (billNumber * tipPercent) / 100;
    setTipTotal(tip);
    setBillTotal(billNumber + tip);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 sm:px-6">
      <div className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-2xl p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-emerald-600">
          Tip Calculator
        </h1>

        {/* Bill Input */}
        <div className="mb-8">
          <label className="block text-base sm:text-lg font-semibold mb-2 text-slate-700">
            Bill Amount
          </label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="Enter bill amount"
            className="
              w-full p-4 rounded-xl
              bg-slate-100
              text-base sm:text-lg font-semibold
              focus:outline-none focus:ring-2 focus:ring-emerald-400
            "
          />
        </div>

        {/* Tip */}
        <div className="mb-8">
          <label className="block text-base sm:text-lg font-semibold mb-3 text-slate-700">
            Tip
          </label>
          <button
            onClick={() => setTipPercent(tipPercent === 5 ? 0 : 5)}
            className={`
              w-full sm:w-auto
              px-8 py-4 sm:py-3 rounded-xl
              font-semibold text-base sm:text-lg
              transition-all
              ${
                tipPercent === 5
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-emerald-100 text-emerald-700"
              }
            `}
          >
            5%
          </button>
        </div>

        {/* Calculate */}
        <button
          onClick={calculateTip}
          className="
            w-full py-5 rounded-xl
            text-lg sm:text-xl font-bold
            bg-gradient-to-r from-emerald-500 to-teal-500
            text-white shadow-lg
            hover:from-emerald-600 hover:to-teal-600
            active:scale-95 transition-all mb-10
          "
        >
          Calculate
        </button>

        {/* Result */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-5 rounded-xl text-center">
            <p className="text-slate-600 mb-2 font-semibold text-base sm:text-lg">
              Tip Total
            </p>
            <p className="text-xl sm:text-2xl font-bold text-emerald-600">
              {formatTHB(tipTotal)}
            </p>
          </div>

          <div className="bg-teal-50 p-5 rounded-xl text-center">
            <p className="text-slate-600 mb-2 font-semibold text-base sm:text-lg">
              Bill Total
            </p>
            <p className="text-xl sm:text-2xl font-bold text-teal-600">
              {formatTHB(billTotal)}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
