import { Link } from "react-router-dom";
import Beach from "../../assets/Beach.png";

const Hero = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-charcoal'>
      {/* Background Image Container */}
      <div className='absolute inset-0 z-0'>
        <img
          src={Beach}
          alt='Home Page Picture'
          className='h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-charcoal/40' />
      </div>

      {/* Hero Content */}
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Plan a trip you'll remember.
          </h1>

          <p className='mt-4 text-base font-normal text-white/90 sm:text-lg md:text-xl'>
            Build a day-by-day travel plan based on your destination, time,
            interests, and budget.
          </p>

          <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
            <Link
              to='/plan-trip'
              className='w-full rounded-full bg-wander-700 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-wander-800 sm:w-auto'>
              Start planning
            </Link>

            {/* Link to Destinations Section / Page */}
            <Link
              to='/#destinations'
              className='w-full rounded-full border border-white/70 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto'>
              Explore destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
