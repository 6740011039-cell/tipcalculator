"use client";

type Props = {
  bill: string;
  setBill: (value: string) => void;
};

export default function BillForm({ bill, setBill }: Props) {
  return (
    <div className="mb-8">
      <label className="block text-base sm:text-lg font-semibold mb-2 text-slate-700">
        Bill Amount
      </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder="Enter bill amount"
        className="w-full p-4 rounded-xl bg-slate-100"
      />
    </div>
  );
}
