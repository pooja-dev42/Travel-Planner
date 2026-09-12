export default function TagSelector({ options, selected, onToggle }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((option) => (
        <button
          key={option}
          type='button'
          onClick={() => onToggle(option)}
          className={
            selected.includes(option)
              ? "rounded-lg bg-wander-600 px-3 py-2 text-sm text-white"
              : "rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal hover:bg-wander-50"
          }>
          {option}
        </button>
      ))}
    </div>
  );
}
