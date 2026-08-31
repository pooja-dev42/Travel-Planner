import { createContext, useContext, useState, useEffect } from "react";

const TripContext = createContext();

const initialTrip = {
  destination: "Tokyo",
  startDate: "2026-09-10",
  endDate: "2026-09-17",

  travelers: {
    adults: 2,
    children: 1,
  },

  budget: "2000",

  travelStyles: ["Food", "Culture", "Nature"],

  travelPace: "balanced",

  notes: "I want local food and less crowded places.",
};

export function TripProvider({ children }) {
  const [trip, setTrip] = useState(() => {
    const savedTrip = localStorage.getItem("trip");

    if (!savedTrip) {
      return initialTrip;
    }

    try {
      return JSON.parse(savedTrip);
    } catch (error) {
      localStorage.removeItem("trip");
      return initialTrip;
    }
  });

  useEffect(() => {
    localStorage.setItem("trip", JSON.stringify(trip));
  }, [trip]);

  const updateTrip = (field, value) => {
    setTrip((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateTravelers = (field, value) => {
    setTrip((prev) => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [field]: value,
      },
    }));
  };

  const toggleTravelStyle = (style) => {
    setTrip((prev) => {
      const exists = prev.travelStyles.includes(style);

      return {
        ...prev,
        travelStyles: exists
          ? prev.travelStyles.filter((item) => item !== style)
          : [...prev.travelStyles, style],
      };
    });
  };

  const resetTrip = () => {
    setTrip(initialTrip);
    localStorage.removeItem("trip");
  };

  return (
    <TripContext.Provider
      value={{
        trip,
        updateTrip,
        updateTravelers,
        toggleTravelStyle,
        resetTrip,
      }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const context = useContext(TripContext);
  return context;
}
