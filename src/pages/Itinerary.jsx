import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useTrip } from "../context/TripContext";
import TripHeader from "../components/trip/TripHeader";
import TripSubNav from "../components/trip/TripSubNav";
import DayTabs from "../components/trip/DayTabs";
import DayOverview from "../components/trip/DayOverview";
import ActivityTimeline from "../components/trip/ActivityTimeline";
import AddActivityBar from "../components/trip/AddActivityBar";
import Budget from "../components/trip/Budget";

export default function ItineraryPage() {
  const { addTrip } = useTrip();

  const [activeDay, setActiveDay] = useState(1);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [saved, setSaved] = useState(false);

  const savedTrip = localStorage.getItem("generatedTrip");
  const generatedTrip = savedTrip ? JSON.parse(savedTrip) : null;

  if (!generatedTrip || !generatedTrip.days_data?.length) {
    return <Navigate to='/plan-trip' replace />;
  }

  // Construct search-based dynamic image URLs using the trip destination
  const destinationQuery = encodeURIComponent(generatedTrip.city || "travel");
  const cityHeroImage =
    generatedTrip.heroImage ||
    `https://source.unsplash.com/1400x500/?${destinationQuery},landmark`;
  const cityCardImage =
    generatedTrip.cardImage ||
    `https://source.unsplash.com/640x480/?${destinationQuery},travel`;

  const handleSaveTrip = () => {
    addTrip({
      ...generatedTrip,
      status: "Upcoming",
      cardImage: cityCardImage,
      heroImage: cityHeroImage,
    });

    setSaved(true);
  };

  const day =
    generatedTrip.days_data.find((item) => item.id === activeDay) ||
    generatedTrip.days_data[0];

  return (
    <main className='mx-auto max-w-7xl px-6 py-10'>
      <TripHeader
        trip={generatedTrip}
        handleSaveTrip={handleSaveTrip}
        saved={saved}
      />

      <TripSubNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "itinerary" && (
        <>
          <div
            className='mt-6 h-64 rounded-xl bg-cover bg-center'
            style={{
              backgroundImage: `url(${
                generatedTrip.heroImage || "https://picsum.photos/1400/500"
              })`,
            }}
          />

          <div className='mt-6'>
            <h2 className='text-2xl font-semibold text-charcoal'>
              {generatedTrip.city}
            </h2>
            <p className='text-sm text-muted'>
              {generatedTrip.days_data.length} days
            </p>
          </div>

          <div className='mt-6'>
            <DayTabs
              days={generatedTrip.days_data}
              activeDay={activeDay}
              setActiveDay={setActiveDay}
            />
          </div>

          <div className='mt-6'>
            <DayOverview day={day} />
            <ActivityTimeline activities={day.activities || []} />
            <AddActivityBar />
          </div>
        </>
      )}

      {activeTab === "budget" && <Budget generatedTrip={generatedTrip} />}
    </main>
  );
}
