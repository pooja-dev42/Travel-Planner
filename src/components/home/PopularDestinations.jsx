import { destinations } from "../../data/destinations";
import DestinationCard from "./DestinationCard";

const PopularDestinations = () => {
  return (
    <section id='destinations' className='bg-cream py-20 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-content px-6'>
        <div className='flex item-end justify-between'>
          <h2 className='text-2xl font-semibold text-charcoal sm:text-3xl'>
            Popular destinations
          </h2>
        </div>

        <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
