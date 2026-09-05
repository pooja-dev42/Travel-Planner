import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export default function NewTripCard() {
  return (
    <Link
      to='/plan-trip'
      className='flex min-h-70 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-wander-50 p-8 text-center transition hover:border-wander-500 hover:bg-wander-100'>
      <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-wander-600 text-wander-600'>
        <Plus size={20} />
      </span>

      <p className='mt-3 text-base font-semibold text-charcoal'>
        Plan your next adventure
      </p>

      <p className='mt-1 text-sm text-muted'>Start planning your next trip</p>
    </Link>
  );
}
