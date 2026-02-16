"use client";

import { useState } from "react";
import BillForm from "./BillForm";
import HandleTip from "./HandleTip";
import ShowSummary from "./ShowSummary";

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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-emerald-600">
          Tip Calculator
        </h1>

        <BillForm bill={bill} setBill={setBill} />
        <HandleTip tipPercent={tipPercent} setTipPercent={setTipPercent} />

        <button onClick={calculateTip} className="w-full py-4 bg-emerald-500 text-white rounded-xl mb-8">
          Calculate
        </button>

        <ShowSummary
          tipTotal={tipTotal}
          billTotal={billTotal}
          formatTHB={formatTHB}
        />
      </div>
    </div>
  );
}
