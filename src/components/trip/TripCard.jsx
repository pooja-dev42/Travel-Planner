import { Link } from "react-router-dom";
import { Clock, Trash2 } from "lucide-react";
import { useTrip } from "../../context/TripContext";
import toast from "react-hot-toast";

export default function TripCard({ trip }) {
  const { removeTrip } = useTrip();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toast.custom((t) => (
      <div className="rounded-xl bg-white p-4 shadow-lg border border-border">
        <p className="text-sm font-medium text-charcoal">
          Delete the {trip.city} trip?
        </p>

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => {
              removeTrip(trip.id);

              const currentTrip = JSON.parse(
                localStorage.getItem("generatedTrip")
              );

              if (currentTrip?.id === trip.id) {
                localStorage.removeItem("generatedTrip");
              }

              toast.dismiss(t.id);
              toast.success("Trip deleted successfully.");
            }}
            className="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
          >
            Delete
          </button>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-charcoal hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const handleViewTrip = () => {
    localStorage.setItem("generatedTrip", JSON.stringify(trip));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="relative h-44">
        <img
          src={
            trip.cardImage || "https://picsum.photos/seed/wander-trip/640/480"
          }
          alt={trip.destination || trip.city}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-wander-600 px-3 py-1 text-xs font-medium text-white">
          {trip.status || "Saved"}
        </span>

        <button
          type="button"
          onClick={handleDelete}
          aria-label={`Delete ${trip.city} trip`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-charcoal hover:text-red-500"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-base font-semibold text-charcoal">
          {trip.city}, {trip.country}
        </h2>

        <p className="mt-1 text-sm text-muted">
          {trip.startDate} - {trip.endDate}
        </p>

        <div className="mt-3 border-t border-border pt-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {trip.days || trip.days_data?.length || 0} days
          </span>
        </div>

        <Link
          to="/itinerary"
          onClick={handleViewTrip}
          className="mt-4 block w-full rounded-xl bg-wander-600 py-2.5 text-center text-sm font-medium text-white hover:bg-wander-700"
        >
          View trip
        </Link>
      </div>
    </div>
  );
}