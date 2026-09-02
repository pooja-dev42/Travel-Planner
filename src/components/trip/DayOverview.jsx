export default function DayOverview({ day }) {
  return (
    <div>
      <h2 className='text-xl font-semibold text-charcoal'>{day.title}</h2>

      <p className='mt-1 text-sm text-muted'>{day.description}</p>
    </div>
  );
}
