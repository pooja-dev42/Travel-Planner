export default function TagSelector({ options = [], selected = [], onToggle }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((option) => {
        const label = typeof option === "object" ? option.label : option;

        const value =
          typeof option === "object" ? option.id || option.value : option;

        const isSelected = selected.includes(value);

        return (
          <button
            key={value}
            type='button'
            onClick={() => onToggle(value)}
            className={
              isSelected
                ? "rounded-lg bg-wander-600 px-3 py-2 text-sm text-white"
                : "rounded-lg border border-border bg-white px-3 py-2 text-sm text-charcoal hover:bg-wander-50"
            }>
            {label}
          </button>
        );
      })}
    </div>
  );
}
