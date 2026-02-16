       "use client";

type Props = {
  tipPercent: number;
  setTipPercent: (value: number) => void;
};

export default function HandleTip({ tipPercent, setTipPercent }: Props) {
  return ( 
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
    );
}
