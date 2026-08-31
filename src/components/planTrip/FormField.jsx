
export default function FormField({ label, children }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">
        {label}
      </label>

      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}

