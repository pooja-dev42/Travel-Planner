import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <Link
      to='/plan-trip'
      state={{
        destination: `${destination.name}, ${destination.country}`,
      }}
      className='group relative block h-56 overflow-hidden rounded-2xl border border-border bg-white'>
      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
        loading='lazy'
        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
      />

      <div className='absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent' />

      <div className='absolute bottom-0 left-0 p-4 text-white'>
        <p className='text-lg font-semibold leading-tight'>
          {destination.name}
        </p>

        <p className='text-sm text-white/80'>{destination.country}</p>
      </div>
    </Link>
  );
};

export default DestinationCard;
