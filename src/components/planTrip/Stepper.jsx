export default function Stepper({ label, value, onChange, min = 0, max }) {
  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    if (max === undefined || value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className='flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3'>
      <span className='text-sm font-medium text-charcoal'>{label}</span>

      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={decrease}
          disabled={value <= min}
          className='flex h-7 w-7 items-center justify-center rounded-full border border-border text-charcoal hover:bg-wander-50 disabled:opacity-40'>
          −
        </button>

        <span className='w-5 text-center text-sm font-semibold text-charcoal'>
          {value}
        </span>

        <button
          type='button'
          onClick={increase}
          disabled={max !== undefined && value >= max}
          className='flex h-7 w-7 items-center justify-center rounded-full border border-border text-charcoal hover:bg-wander-50 disabled:opacity-40'>
          +
        </button>
      </div>
    </div>
  );
}
