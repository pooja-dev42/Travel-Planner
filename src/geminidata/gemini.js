const API_URL = import.meta.env.VITE_API_URL;

export async function generateItinerary(trip) {
  const prompt = `
Create a ${trip.destination} travel itinerary.
Start: ${trip.startDate}
End: ${trip.endDate}
Adults: ${trip.travelers.adults}
Children: ${trip.travelers.children}
Budget: ${trip.budget} USD
Style: ${trip.travelStyles.join(", ")}
Pace: ${trip.travelPace}
Notes: ${trip.notes}

Give me a day-by-day itinerary with activities,
times, locations, and prices.
`;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  const data = await response.json();

  return data.candidates[0].content.parts[0].text;
}
