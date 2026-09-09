import { Link } from "react-router-dom";
import { Clock, Wallet, Trash2 } from "lucide-react";
import { useTrip } from "../../context/TripContext";

export default function TripCard({ trip }) {
  const { removeTrip } = useTrip();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete the ${trip.city} trip?`);

    if (confirmed) {
      removeTrip(trip.id);
    }
  };

  const handleViewTrip = () => {
    localStorage.setItem("generatedTrip", JSON.stringify(trip));
  };

  return (
    <div className='overflow-hidden rounded-2xl border border-border bg-white shadow-sm'>
      <div className='relative h-44'>
        <img
          src={
            trip.cardImage || "https://picsum.photos/seed/wander-trip/640/480"
          }
          alt={trip.destination || trip.city}
          className='h-full w-full object-cover'
        />

        <span className='absolute left-3 top-3 rounded-full bg-wander-600 px-3 py-1 text-xs font-medium text-white'>
          {trip.status || "Saved"}
        </span>

        <button
          type='button'
          onClick={handleDelete}
          aria-label={`Delete ${trip.city} trip`}
          className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-charcoal hover:text-red-500'>
          <Trash2 size={15} />
        </button>
      </div>

      <div className='p-5'>
        <h2 className='text-base font-semibold text-charcoal'>
          {trip.city}, {trip.country}
        </h2>

        <p className='mt-1 text-sm text-muted'>
          {trip.startDate} - {trip.endDate}
        </p>

        <div className='mt-3 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted'>
          <span className='flex items-center gap-1'>
            <Clock size={13} />
            {trip.days || trip.days_data?.length || 0} days
          </span>

          <span className='flex items-center gap-1'>
            <Wallet size={13} />
            ${trip.budget?.estimatedSpending?.toLocaleString() || 0}
          </span>
        </div>

        <Link
          to='/itinerary'
          onClick={handleViewTrip}
          className='mt-4 block w-full rounded-xl bg-wander-600 py-2.5 text-center text-sm font-medium text-white hover:bg-wander-700'>
          View trip
        </Link>
      </div>
    </div>
  );
}
