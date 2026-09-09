import {
  Coffee,
  Camera,
  ShoppingBag,
  Moon,
  Ticket,
  MapPin,
  Wallet,
} from "lucide-react";

const icons = {
  Breakfast: Coffee,
  Lunch: Coffee,
  Dinner: Coffee,
  Sightseeing: Camera,
  Shopping: ShoppingBag,
  Nightlife: Moon,
  Activity: Ticket,
};

export default function ActivityTimeline({ activities }) {
  return (
    <div className='mt-6 space-y-4'>
      {activities.map((activity, index) => {
        const Icon = icons[activity.category] || Ticket;

        return (
          <div key={`${activity.title}-${index}`} className='flex gap-4'>
            <div className='w-16 pt-4 text-right text-xs text-muted'>
              {activity.time}
            </div>

            <div className='flex-1 rounded-xl border border-border bg-white p-4'>
              <div className='flex gap-3'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wander-50 text-wander-600'>
                  <Icon size={16} />
                </div>

                <div>
                  <p className='text-xs text-muted'>{activity.category}</p>

                  <p className='font-medium text-charcoal'>{activity.title}</p>

                  {activity.location && (
                    <p className='mt-1 flex items-center gap-1 text-xs text-muted'>
                      <MapPin size={12} />
                      {activity.location}
                    </p>
                  )}

                  <p className='mt-2 flex items-center gap-1 text-xs text-muted'>
                    <Wallet size={12} />
                    {activity.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
