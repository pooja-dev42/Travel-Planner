import TripCard from "../components/trip/TripCard";
import NewTripCard from "../components/trip/NewTripCard";
import { useTrip } from "../context/TripContext";

export default function MyTripsPage() {
  const { trips } = useTrip();

  return (
    <main className='min-h-screen bg-cream px-6 py-10'>
      <div className='mx-auto max-w-7xl'>
        <div>
          <h1 className='text-3xl font-semibold text-charcoal'>My Trips</h1>

          <p className='mt-1 text-sm text-muted'>Your saved travel plans.</p>
        </div>
        {trips.length === 0 && (
          <p className='mt-8 text-center text-sm text-muted'>
            You have not saved any trips yet.
          </p>
        )}

        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}

          <NewTripCard />
        </div>
      </div>
    </main>
  );
}
