export default function SegmentedControl({ options = [], value, onChange }) {
  return (
    <div className='flex w-full rounded-lg border border-border bg-wander-50 p-1'>
      {options.map((option) => {
        const label = typeof option === "object" ? option.label : option;

        const val =
          typeof option === "object" ? option.value || option.id : option;

        const isSelected = value === val;

        return (
          <button
            key={val}
            type='button'
            onClick={() => onChange(val)}
            className={
              isSelected
                ? "flex-1 rounded-md bg-wander-600 px-4 py-2 text-sm text-white"
                : "flex-1 rounded-md px-4 py-2 text-sm text-charcoal hover:bg-wander-50"
            }>
            {label}
          </button>
        );
      })}
    </div>
  );
}
