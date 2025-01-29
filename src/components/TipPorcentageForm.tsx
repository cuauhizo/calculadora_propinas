import type { Dispatch, SetStateAction } from 'react';

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
];

type TipPorcentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPorcentageForm({ setTip, tip }: TipPorcentageFormProps) {
  return (
    <div>
      <h2 className="font-black text-2xl">Propina</h2>
      <form>
        {tipOptions.map((tipOption) => (
          <div
            key={tipOption.id}
            className="flex gap-3">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="Tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
