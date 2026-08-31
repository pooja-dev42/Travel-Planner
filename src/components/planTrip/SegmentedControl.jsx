export default function SegmentedControl({ options, value, onChange }) {
  return (
    <div className='flex gap-2'>
      {options.map((option) => (
        <button
          key={option}
          type='button'
          onClick={() => onChange(option)}
          className={
            value === option
              ? "rounded-xl bg-wander-600 px-6 py-3 text-white"
              : "rounded-xl border border-border bg-white px-6 py-3 text-charcoal"
          }>
          {option}
        </button>
      ))}
    </div>
  );
}
