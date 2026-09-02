import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TripHeader({ trip }) {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => navigate("/trips")}
          className='flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white'>
          <ArrowLeft size={16} />
        </button>

        <div>
          <h1 className='text-2xl font-semibold text-charcoal'>
            {trip.destination}
          </h1>

          <p className='mt-1 text-sm text-muted'>
            {trip.startDate} – {trip.endDate}
          </p>
        </div>
      </div>
    </div>
  );
}
