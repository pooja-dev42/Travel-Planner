
export default function Stepper({
  label,
  value,
  onChange,
  min = 0,
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <p>{label}</p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          -
        </button>

        <span>{value}</span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
