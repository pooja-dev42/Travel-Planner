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

export default function BudgetPage({ generatedTrip }) {
  const trip = generatedTrip;

  if (!trip || !trip.days_data?.length) {
    return <Navigate to='/plan-trip' replace />;
  }

  // Get all activities from all days
  const activities = trip.days_data.flatMap((day) => day.activities || []);

  // Calculate total cost
  const total = activities.reduce(
    (sum, activity) => sum + getAmount(activity.price),
    0,
  );

  // Count free activities
  const freeActivities = activities.filter((activity) =>
    isFreeActivity(activity.price),
  ).length;

  // Count paid activities
  const paidActivities = activities.length - freeActivities;

  return (
    <main className='mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='border-b border-border pb-5'>
        <h1 className='text-2xl font-bold tracking-tight text-charcoal sm:text-3xl'>
          Trip Budget
        </h1>

        <p className='mt-1 text-sm text-muted'>
          A simple overview of your planned trip expenses.
        </p>
      </div>

      {/* Budget Summary */}
      <div className='mt-6 grid gap-5 sm:grid-cols-2'>
        {/* Estimated Cost */}
        <div className='rounded-xl border border-wander-200 bg-wander-50 p-5'>
          <p className='text-xs font-semibold uppercase tracking-wide text-wander-700'>
            Estimated Cost
          </p>

          <p className='mt-2 text-3xl font-bold tracking-tight text-wander-800'>
            ${total.toLocaleString()}
          </p>

          <p className='mt-1 text-sm text-wander-600'>
            {paidActivities} paid{" "}
            {paidActivities === 1 ? "activity" : "activities"}
          </p>
        </div>

        {/* Target Budget */}
        <div className='rounded-xl border border-border bg-white p-5'>
          <p className='text-xs font-semibold uppercase tracking-wide text-muted'>
            Target Budget
          </p>

          <p className='mt-2 text-3xl font-bold tracking-tight text-charcoal'>
            {trip.budget || "Not set"}
          </p>

          <p className='mt-1 text-sm text-muted'>Your planned budget</p>
        </div>
      </div>

      {/* Activity List */}
      <section className='mt-6 rounded-xl border border-border bg-white p-5'>
        {/* Section Header */}
        <div className='flex items-center justify-between border-b border-border pb-4'>
          <div>
            <h2 className='text-base font-semibold text-charcoal'>
              Activities
            </h2>

            <p className='mt-1 text-xs text-muted'>
              Estimated cost for each activity
            </p>
          </div>

          <span className='rounded-full bg-wander-100 px-3 py-1 text-xs font-medium text-wander-700'>
            {activities.length} {activities.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Activities */}
        <div className='divide-y divide-border'>
          {activities.map((activity, index) => {
            const free = isFreeActivity(activity.price);

            return (
              <div
                key={`${activity.title}-${index}`}
                className='flex items-center justify-between gap-4 py-4'>
                {/* Activity information */}
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-charcoal'>
                    {activity.title}
                  </p>

                  <p className='mt-1 text-xs text-muted'>
                    {activity.category || "Activity"}

                    {activity.location && (
                      <>
                        {" • "}
                        {activity.location}
                      </>
                    )}
                  </p>
                </div>

                {/* Price */}
                <p
                  className={`shrink-0 text-sm font-semibold ${
                    free ? "text-wander-600" : "text-charcoal"
                  }`}>
                  {activity.price || "Free"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className='mt-2 flex items-center justify-between border-t border-border pt-4'>
          <p className='text-sm font-semibold text-charcoal'>Estimated Total</p>

          <p className='text-xl font-bold text-wander-800'>
            ${total.toLocaleString()}
          </p>
        </div>
      </section>

      {/* Free Activities */}
      {freeActivities > 0 && (
        <div className='mt-5 text-center'>
          <p className='text-xs text-muted'>
            {freeActivities} free{" "}
            {freeActivities === 1 ? "activity" : "activities"} included
          </p>
        </div>
      )}
    </main>
  );
}
