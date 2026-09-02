import { createContext, useContext, useEffect, useState } from "react";

import { trips as initialTrips } from "../data/trips";

const TripContext = createContext();

const emptyTrip = {
  destination: "",
  startDate: "",
  endDate: "",

  travelers: {
    adults: 1,
    children: 0,
  },

  budget: 1500,

  travelStyles: [],

  travelPace: "Balanced",

  notes: "",
};

export function TripProvider({ children }) {
  const [trip, setTrip] = useState(() => {
    const saved = localStorage.getItem("currentTrip");

    return saved ? JSON.parse(saved) : emptyTrip;
  });

  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("trips");

    return saved ? JSON.parse(saved) : initialTrips;
  });

  useEffect(() => {
    localStorage.setItem("currentTrip", JSON.stringify(trip));
  }, [trip]);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const updateTrip = (field, value) => {
    setTrip((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateTravelers = (type, value) => {
    setTrip((prev) => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [type]: value,
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

  const getTrip = (id) => {
    return trips.find((item) => item.id === id);
  };

  const addTrip = (newTrip) => {
    setTrips((prev) => [...prev, newTrip]);
  };

  const removeTrip = (id) => {
    setTrips((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TripContext.Provider
      value={{
        trip,
        trips,
        updateTrip,
        updateTravelers,
        toggleTravelStyle,
        getTrip,
        addTrip,
        removeTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  return useContext(TripContext);
}