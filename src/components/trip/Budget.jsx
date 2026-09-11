import { Navigate } from "react-router-dom";

function getAmount(price) {
  if (!price || price.toLowerCase().includes("free")) {
    return 0;
  }

  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function isFreeActivity(price) {
  return !price || price.toLowerCase().includes("free");
}

export default function BudgetPage() {
  const savedTrip = localStorage.getItem("generatedTrip");
  const trip = savedTrip ? JSON.parse(savedTrip) : null;

  if (!trip || !trip.days_data?.length) {
    return <Navigate to='/plan-trip' replace />;
  }

  const activities = trip.days_data.flatMap((day) => day.activities || []);

  const total = activities.reduce(
    (sum, activity) => sum + getAmount(activity.price),
    0,
  );

  const freeActivities = activities.filter((activity) =>
    isFreeActivity(activity.price),
  ).length;

  //Calculate total cost per category
  const breakdown = {};
  activities.forEach((activity) => {
    const category = activity.category || "Other";
    const amount = getAmount(activity.price);

    breakdown[category] = (breakdown[category] || 0) + amount;
  });

  return (
    <main className='mx-auto max-w-6xl px-4 py-8 sm:px-6'>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-semibold tracking-tight text-charcoal'>
          Trip Budget
        </h1>

        <p className='mt-1 text-sm text-muted'>
          A simple estimate based on your planned itinerary.
        </p>
      </div>

      {/* Summary and Category Breakdown */}
      <div className='mt-8 grid gap-6 lg:grid-cols-5'>
        {/* Three Summary Cards */}
        <div className='grid gap-4 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1'>
          {/* Estimated Total */}
          <div className='rounded-xl bg-wander-700 p-5 text-cream'>
            <p className='text-xs font-medium uppercase tracking-wide text-wander-200'>
              Estimated Total
            </p>

            <p className='mt-2 text-3xl font-semibold'>
              ${total.toLocaleString()}
            </p>
          </div>

          {/* Total Activities */}
          <div className='rounded-xl border border-border bg-white p-5'>
            <p className='text-xs font-medium uppercase tracking-wide text-muted'>
              Total Activities
            </p>

            <p className='mt-2 text-3xl font-semibold text-charcoal'>
              {activities.length}
            </p>
          </div>

          {/* Free Experiences */}
          <div className='rounded-xl border border-border bg-white p-5'>
            <p className='text-xs font-medium uppercase tracking-wide text-muted'>
              My Budget
            </p>

            <p className='mt-2 text-3xl font-semibold text-charcoal'>
              {trip.budget || "Not set"}
            </p>
          </div>
        </div>

        {/* Category Breakdown */}
        <section className='rounded-xl border border-border bg-white p-5 lg:col-span-2'>
          <h2 className='text-lg font-semibold text-charcoal'>
            Category Breakdown
          </h2>

          <div className='mt-5 space-y-4'>
            {Object.entries(breakdown).map(([category, amount]) => {
              const percentage =
                total > 0 ? Math.round((amount / total) * 100) : 0;

              return (
                <div key={category}>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='font-medium text-charcoal'>
                      {category}
                    </span>

                    <span className='font-semibold text-charcoal'>
                      ${amount.toLocaleString()}
                    </span>
                  </div>

                  <div className='mt-2 h-2 overflow-hidden rounded-full bg-wander-50'>
                    <div
                      className='h-full rounded-full bg-wander-500 transition-all duration-300'
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Activity Details */}
      <section className='mt-6 rounded-xl border border-border bg-white p-5'>
        <h2 className='text-lg font-semibold text-charcoal'>
          Activity Details
        </h2>

        <div className='mt-4 divide-y divide-border'>
          {activities.map((activity, index) => {
            const free = isFreeActivity(activity.price);

            return (
              <div
                key={`${activity.title}-${index}`}
                className='flex items-center justify-between gap-4 px-2 py-3'>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-charcoal'>
                    {activity.title}
                  </p>

                  <p className='mt-0.5 text-xs text-muted'>
                    {activity.category || "General"}
                    {activity.location && ` · ${activity.location}`}
                  </p>
                </div>

                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                    free
                      ? "bg-wander-100 text-wander-800"
                      : "border border-border bg-wander-50 text-charcoal"
                  }`}>
                  {activity.price || "Free"}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
