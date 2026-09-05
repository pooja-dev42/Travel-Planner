export default function About() {
  return (
    <div className='min-h-screen bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-4xl'>
        {/* Header Section */}
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold tracking-tight text-wander-800 sm:text-5xl'>
            About <span className='text-wander-600'>WanderTrip</span>
          </h1>

          <p className='mx-auto max-w-2xl text-lg text-muted'>
            Your ultimate travel planning companion. We make creating day-by-day
            itineraries, managing budgets, and discovering dream destinations
            easier than ever.
          </p>
        </div>

        <div className='mb-8 rounded-2xl border border-border bg-white p-8'>
          <h2 className='mb-4 text-2xl font-semibold text-wander-800'>
            Our Mission
          </h2>

          <p className='leading-relaxed text-muted'>
            At WanderTrip, we believe that traveling should be about creating
            memories, not stressing over logistics. Our mission is to empower
            every traveler with smart, intuitive tools to craft personalized
            journeys tailored precisely to their time, interests, and budget.
          </p>
        </div>

        <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div className='rounded-xl border border-border bg-white p-6'>
            <h3 className='mb-2 text-lg font-bold text-wander-800'>
              Easy Planning
            </h3>

            <p className='text-sm text-muted'>
              Build comprehensive day-by-day travel schedules effortlessly.
            </p>
          </div>

          <div className='rounded-xl border border-border bg-white p-6'>
            <h3 className='mb-2 text-lg font-bold text-wander-800'>
              Budget Tracking
            </h3>

            <p className='text-sm text-muted'>
              Keep your expenses organized and stay on top of your travel
              budget.
            </p>
          </div>

          <div className='rounded-xl border border-border bg-white p-6'>
            <h3 className='mb-2 text-lg font-bold text-wander-800'>
              Discover Places
            </h3>

            <p className='text-sm text-muted'>
              Explore trending destinations and popular spots around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
