import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useTrip } from "../context/TripContext";
import TripHeader from "../components/trip/TripHeader";
import TripSubNav from "../components/trip/TripSubNav";
import DayTabs from "../components/trip/DayTabs";
import DayOverview from "../components/trip/DayOverview";
import ActivityTimeline from "../components/trip/ActivityTimeline";
import Budget from "../components/trip/Budget";

export default function ItineraryPage() {
  const { addTrip, trips } = useTrip();

  const [activeDay, setActiveDay] = useState(1);
  const [activeTab, setActiveTab] = useState("itinerary");

  const savedTrip = localStorage.getItem("generatedTrip");
  const generatedTrip = savedTrip ? JSON.parse(savedTrip) : null;

  if (!generatedTrip || !generatedTrip.days_data?.length) {
    return <Navigate to='/plan-trip' replace />;
  }

  const cityHeroImage =
    generatedTrip.heroImage || "https://picsum.photos/1400/500";

  const cityCardImage =
    generatedTrip.cardImage || "https://picsum.photos/640/480";

  const isTripSaved = trips.some((trip) => trip.id === generatedTrip.id);

  const handleSaveTrip = () => {
    if (isTripSaved) {
      return;
    }
    addTrip({
      ...generatedTrip,
      status: "Upcoming",
      cardImage: cityCardImage,
      heroImage: cityHeroImage,
    });
  };

  const day =
    generatedTrip.days_data.find((item) => item.id === activeDay) ||
    generatedTrip.days_data[0];

  return (
    <div className='min-h-screen bg-slate-50/50 font-sans text-slate-800 antialiased'>
      <main className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
        {/* Header Section */}
        <div className='mb-8 border-b border-slate-200/80 pb-6'>
          <TripHeader
            trip={generatedTrip}
            handleSaveTrip={handleSaveTrip}
            saved={isTripSaved}
          />
        </div>

        {/* Navigation Tabs */}
        <div className='mb-8'>
          <TripSubNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {activeTab === "itinerary" && (
          <div className='space-y-8 animate-fade-in'>
            {/* Hero Image Card */}
            <div className='relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/5'>
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105'
                style={{
                  backgroundImage: `url(${
                    generatedTrip.heroImage || "https://picsum.photos/1400/500"
                  })`,
                }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent' />

              {/* Overlay Content */}
              <div className='absolute bottom-0 left-0 p-6 md:p-8 text-white'>
                <span className='inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium tracking-wide uppercase text-white/90 mb-2 border border-white/10'>
                  {generatedTrip.days_data.length} Days Itinerary
                </span>
                <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-sm'>
                  {generatedTrip.city}
                </h1>
              </div>
            </div>

            {/* Days Filter / Tabs */}
            <div className='sticky top-4 z-10 bg-slate-50/80 backdrop-blur-md py-2 rounded-xl border border-slate-200/60 shadow-sm'>
              <DayTabs
                days={generatedTrip.days_data}
                activeDay={activeDay}
                setActiveDay={setActiveDay}
              />
            </div>

            {/* Day Details Grid Layout */}
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {/* Main Content Area */}
              <div className='lg:col-span-2 space-y-6'>
                <div className='rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm'>
                  <DayOverview day={day} />
                </div>

                <div className='rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm'>
                  <h3 className='text-lg font-semibold text-slate-900 mb-6 tracking-tight'>
                    Schedule & Activities
                  </h3>
                  <ActivityTimeline activities={day.activities || []} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab View */}
        {activeTab === "budget" && (
          <div className='rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm'>
            <Budget generatedTrip={generatedTrip} />
          </div>
        )}
      </main>
    </div>
  );
}
