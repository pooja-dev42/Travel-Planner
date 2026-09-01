import { useState } from "react";
import { Navigate } from "react-router-dom";

import TripHeader from "../components/trip/TripHeader";
import TripSubNav from "../components/trip/TripSubNav";
import DayTabs from "../components/trip/DayTabs";
import DayOverview from "../components/trip/DayOverview";
import ActivityTimeline from "../components/trip/ActivityTimeline";
import AddActivityBar from "../components/trip/AddActivityBar";

export default function ItineraryPage() {
  const [activeDay, setActiveDay] = useState(1);

  const savedTrip = localStorage.getItem("generatedTrip");
  const generatedTrip = savedTrip ? JSON.parse(savedTrip) : null;

  if (!generatedTrip || !generatedTrip.days_data?.length) {
  return <Navigate to="/plan-trip" replace />;
}

  const day =
    generatedTrip.days_data.find((item) => item.id === activeDay) ||
    generatedTrip.days_data[0];
  return (
    <main className='mx-auto max-w-7xl px-6 py-10'>
      <TripHeader trip={trip} />

      <TripSubNav tripId={trip.id || "custom-trip"} />

      <div
        className='mt-6 h-64 rounded-xl bg-cover bg-center'
        style={{
          backgroundImage: `url(${trip.heroImage || "https://picsum.photos/1400/500"})`,
        }}
      />

      <div className='mt-6'>
        <h2 className='text-2xl font-semibold text-charcoal'>{trip.city}</h2>
        <p className='text-sm text-muted'>{trip.days_data.length} days</p>
      </div>

      <div className='mt-6'>
        <DayTabs
          days={trip.days_data}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      </div>

      <div className='mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]'>
        <div>
          <DayOverview day={day} />
          <ActivityTimeline activities={day.activities || []} />
          <AddActivityBar />
        </div>
      </div>
    </main>
  );
}
