export default function DayTabs({ days, activeDay, setActiveDay }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {days.map((day) => (
        <button
          key={day.id}
          onClick={() => setActiveDay(day.id)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm ${
            activeDay === day.id
              ? "bg-wander-600 text-white"
              : "border border-border bg-white text-muted"
          }`}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
}