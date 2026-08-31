export default function TagSelector({ options, selected, onToggle }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((style) => {
        const selectedStyle = selected.includes(style);

        return (
          <button
            key={style}
            type='button'
            onClick={() => onToggle(style)}
            className={
              selectedStyle
                ? "rounded-full bg-wander-600 px-4 py-2 text-white"
                : "rounded-full border border-border bg-white px-4 py-2 text-charcoal"
            }>
            {style}
          </button>
        );
      })}
    </div>
  );
}
