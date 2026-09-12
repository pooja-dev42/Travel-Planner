import { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { generateItinerary } from "../geminidata/gemini";
import FormField from "../components/planTrip/FormField";
import Stepper from "../components/planTrip/Stepper";
import TagSelector from "../components/planTrip/TagSelector";
import SegmentedControl from "../components/planTrip/SegmentedControl";

import { styles, traveltype } from "../data/destinations";
import { useTrip } from "../context/TripContext";

export default function PlanTripPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { trip, updateTrip, updateTravelers, toggleTravelStyle, addTrip, resetTrip,
  } = useTrip();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const destination = location.state?.destination || "";
    resetTrip(destination);
  }, [location.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const result = await generateItinerary(trip);

      const completeTrip = {
        id: `trip-${Date.now()}`,
        ...result,
        destination: trip.destination || result.city,
        startDate: trip.startDate,
        endDate: trip.endDate,
        budget: trip.budget,
        travelers: trip.travelers,
        travelStyles: trip.travelStyles,
        travelPace: trip.travelPace,
        notes: trip.notes,
      };

      // Save the generated trip to the trips list
      addTrip(completeTrip);
      localStorage.setItem("generatedTrip", JSON.stringify(completeTrip));

      resetTrip();
      navigate("/itinerary");
    } catch (error) {
      console.error("ITINERARY ERROR:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-cream px-4 py-10 sm:px-6'>
      <div className='mx-auto max-w-2xl'>
        <div className='rounded-2xl border border-border bg-white p-6 sm:p-8'>
          <h1 className='text-3xl font-semibold text-charcoal'>
            Where are you going?
          </h1>

          <p className='mt-2 text-sm text-muted'>
            Tell us a little about your trip and we'll help you plan it.
          </p>

          <form onSubmit={handleSubmit} className='mt-8 space-y-7'>
            <FormField label='Destination'>
              <div className='relative'>
                <MapPin
                  size={17}
                  className='absolute left-3.5 top-1/2 -translate-y-1/2 text-wander-600'
                />

                <input
                  type='text'
                  required
                  value={trip.destination || ""}
                  onChange={(e) => updateTrip("destination", e.target.value)}
                  placeholder='City, country'
                  className='w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-charcoal outline-none focus:border-wander-500 focus:ring-2 focus:ring-wander-100'
                />
              </div>
            </FormField>

            <div className='grid gap-5 sm:grid-cols-2'>
              <FormField label='Start Date'>
                <input
                  type='date'
                  required
                  value={trip.startDate || ""}
                  onChange={(e) => updateTrip("startDate", e.target.value)}
                  className='w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-wander-500 focus:ring-2 focus:ring-wander-100'
                />
              </FormField>

              <FormField label='End Date'>
                <input
                  type='date'
                  required
                  min={trip.startDate || undefined}
                  value={trip.endDate || ""}
                  onChange={(e) => updateTrip("endDate", e.target.value)}
                  className='w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-wander-500 focus:ring-2 focus:ring-wander-100'
                />
              </FormField>
            </div>

            <div>
              <p className='text-sm font-medium text-charcoal'>Who's going?</p>

              <div className='mt-2 grid gap-3 sm:grid-cols-2'>
                <Stepper
                  label='Adults'
                  value={trip.travelers?.adults ?? 1}
                  onChange={(value) => updateTravelers("adults", value)}
                  min={1}
                />

                <Stepper
                  label='Children'
                  value={trip.travelers?.children ?? 0}
                  onChange={(value) => updateTravelers("children", value)}
                  min={0}
                />
              </div>
            </div>

            <div>
              <p className='text-sm font-medium text-charcoal'>
                How much would you like to spend?
              </p>

              <select
                value={trip.budget || "Moderate: $500 - $1,000"}
                onChange={(e) => updateTrip("budget", e.target.value)}
                className='mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-wander-500 focus:ring-2 focus:ring-wander-100'>
                <option value='$200 - $500'>Economy: $200 - $500</option>
                <option value='$500 - $1,000'>Moderate: $500 - $1,000</option>
                <option value='$1,000 - $2,500'>
                  Comfortable: $1,000 - $2,500
                </option>
                <option value='$2,500+'>Luxury: $2,500+</option>
              </select>

              <p className='mt-2 text-xs text-muted'>
                Total budget for all travelers, excluding flights.
              </p>
            </div>

            <div>
              <p className='text-sm font-medium text-charcoal'>
                What's your style?
              </p>

              <div className='mt-2'>
                <TagSelector
                  options={styles}
                  selected={trip.travelStyles || []}
                  onToggle={toggleTravelStyle}
                />
              </div>
            </div>

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

            <FormField label='Anything else?'>
              <textarea
                rows={4}
                value={trip.notes || ""}
                onChange={(e) => updateTrip("notes", e.target.value)}
                placeholder='Tell us anything else about your trip...'
                className='w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-wander-500 focus:ring-2 focus:ring-wander-100'
              />
            </FormField>

            <div className='flex items-center justify-between border-t border-border pt-6'>
              <button
                type='button'
                onClick={() => navigate(-1)}
                className='rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-wander-50'>
                Back
              </button>

              <button
                type='submit'
                disabled={loading}
                className='rounded-lg bg-wander-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-wander-700 disabled:opacity-50'>
                {loading ? "Creating itinerary..." : "Create my itinerary"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
