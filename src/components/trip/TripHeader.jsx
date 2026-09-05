import { useNavigate } from "react-router-dom";
import { Bookmark, ArrowLeft, Check } from "lucide-react";

export default function TripHeader({ trip, handleSaveTrip, saved }) {
  const navigate = useNavigate();

  const destination = trip?.destination || trip?.city || "Trip Itinerary";

  return (
    <div className='flex items-center justify-between gap-4 py-4'>
      {/* Left side: Back button + Title info */}
      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={() => navigate("/plan-trip")}
          className='flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-slate-50'
          aria-label='Go back'>
          <ArrowLeft size={16} />
        </button>

        <div>
          <h1 className='text-2xl font-semibold text-charcoal'>
            {destination}
          </h1>
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={handleSaveTrip}
          disabled={saved}
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium shadow-sm transition-colors ${
            saved
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "border-border bg-white text-charcoal hover:bg-slate-50"
          }`}>
          {saved ? (
            <>
              <Check size={15} />
              Saved
            </>
          ) : (
            <>
              <Bookmark size={15} />
              Save trip
            </>
          )}
        </button>
      </div>
    </div>
  );
}
