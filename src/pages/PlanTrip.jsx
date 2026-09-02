import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { generateItinerary } from "../geminidata/gemini";
import { useState } from "react";
import FormField from "../components/planTrip/FormField";
import Stepper from "../components/planTrip/Stepper";
import TagSelector from "../components/planTrip/TagSelector";
import SegmentedControl from "../components/planTrip/SegmentedControl";

import { styles, traveltype } from "../data/destinations";
import { useTrip } from "../context/TripContext";

export default function PlanTripPage() {
  const navigate = useNavigate();

  const { trip, updateTrip, updateTravelers, toggleTravelStyle } = useTrip();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await generateItinerary(trip);
      console.log("Gemini result:", result);
      localStorage.setItem("generatedTrip", JSON.stringify(result));
      navigate("/itinerary");
    } catch (error) {
      console.error("ITINERARY ERROR:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto max-w-2xl px-6 py-12'>
      <div className='rounded-2xl border border-border bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10'>
        <h1 className='text-3xl font-semibold text-charcoal'>
          Where are you going?
        </h1>
        <p className='mt-2 text-sm text-muted'>
          Tell us a little about your trip and we'll help you plan it.
        </p>
        <form onSubmit={handleSubmit} className='mt-8 space-y-8'>
          <FormField label='Destination'>
            <div className='relative'>
              <MapPin
                size={16}
                className='absolute left-3.5 top-1/2 -translate-y-1/2 text-muted'
              />
              <input
                type='text'
                value={trip.destination}
                onChange={(e) => updateTrip("destination", e.target.value)}
                placeholder='City, country'
                className='w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none focus:border-wander-500'
              />
            </div>
          </FormField>

          {/* Dates */}
          <div className='grid gap-5 sm:grid-cols-2'>
            <FormField label='Start Date'>
              <input
                type='date'
                value={trip.startDate}
                onChange={(e) => updateTrip("startDate", e.target.value)}
                className='w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-charcoal outline-none focus:border-wander-500'
              />
            </FormField>

            <FormField label='End Date'>
              <input
                type='date'
                value={trip.endDate}
                onChange={(e) => updateTrip("endDate", e.target.value)}
                className='w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-charcoal outline-none focus:border-wander-500'
              />
            </FormField>
          </div>

          {/* Travelers */}
          <div>
            <p className='text-sm font-medium text-charcoal'>Who's going?</p>

            <div className='mt-2 grid gap-3 sm:grid-cols-2'>
              <Stepper
                label='Adults'
                value={trip.travelers.adults}
                onChange={(value) => updateTravelers("adults", value)}
                min={1}
              />
              <Stepper
                label='Children'
                value={trip.travelers.children}
                onChange={(value) => updateTravelers("children", value)}
                min={0}
              />
            </div>
          </div>

          <div className='rounded-2xl bg-wander-50 p-5'>
            <p className='text-sm font-medium text-charcoal'>
              How much would you like to spend?
            </p>
            <input
              type='number'
              min='0'
              value={trip.budget}
              onChange={(e) => updateTrip("budget", e.target.value)}
              className='mt-2 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-charcoal outline-none focus:border-wander-500'
            />

            <p className='mt-1.5 text-xs text-muted'>
              Total budget for all travelers, excluding flights.
            </p>
          </div>
          {/* Travel Style */}
          <div>
            <p className='text-sm font-medium text-charcoal'>
              What's your style?
            </p>
            <div className='mt-2'>
              <TagSelector
                options={styles}
                selected={trip.travelStyles}
                onToggle={toggleTravelStyle}
              />
            </div>
          </div>
          {/* Travel Pace */}
          <div>
            <p className='text-sm font-medium text-charcoal'>
              How do you like to travel?
            </p>
            <div className='mt-2'>
              <SegmentedControl
                options={traveltype}
                value={trip.travelPace}
                onChange={(value) => updateTrip("travelPace", value)}
              />
            </div>
          </div>

          {/* Notes */}
          <FormField label='Anything else?'>
            <textarea
              rows={4}
              value={trip.notes}
              onChange={(e) => updateTrip("notes", e.target.value)}
              placeholder='Tell us anything else about your trip...'
              className='w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-wander-500'
            />
          </FormField>

          {/* Buttons */}
          <div className='flex items-center justify-between pt-2'>
            <button
              type='button'
              onClick={() => navigate(-1)}
              className='rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-wander-50'>
              Back
            </button>

            <button
              type='submit'
              className='rounded-xl bg-wander-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-wander-700 disabled:opacity-50'>
              {loading ? "Creating..." : "Create my itinerary"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
