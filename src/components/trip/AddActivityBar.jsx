import { Plus } from "lucide-react";

export default function AddActivityBar() {
  return (
    <button className='mt-5 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-charcoal'>
      <Plus size={15} />
      Add activity
    </button>
  );
}
