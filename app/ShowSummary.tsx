"use client";

type Props = {
  tipTotal: number;
  billTotal: number;
  formatTHB: (amount: number) => string;
};

export default function ShowSummary({
  tipTotal,
  billTotal,
  formatTHB,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-emerald-50 p-5 rounded-xl text-center">
        <p className="font-semibold">Tip Total</p>
        <p className="text-xl font-bold text-emerald-600">
          {formatTHB(tipTotal)}
        </p>
      </div>

      <div className="bg-teal-50 p-5 rounded-xl text-center">
        <p className="font-semibold">Bill Total</p>
        <p className="text-xl font-bold text-teal-600">
          {formatTHB(billTotal)}
        </p>
      </div>
    </div>
  );
}
