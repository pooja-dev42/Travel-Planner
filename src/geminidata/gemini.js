const API_URL = import.meta.env.VITE_API_URL;

const API_KEY = "YOUR_REAL_GEMINI_API_KEY";

export async function generateItinerary(trip) {
  const prompt = `
Create a travel itinerary for ${trip.destination}.

Start date: ${trip.startDate}
End date: ${trip.endDate}

Adults: ${trip.travelers.adults}
Children: ${trip.travelers.children}

Budget: ${trip.budget} USD

Travel styles:
${trip.travelStyles.join(", ")}

Travel pace:
${trip.travelPace}

Notes:
${trip.notes}

Return ONLY valid JSON.

Use this format:

{
  "city": "Tokyo",
  "country": "Japan",
  "days_data": [
    {
      "id": 1,
      "label": "Day 1",
      "title": "Shibuya & Harajuku",
      "description": "Explore Shibuya and Harajuku.",
      "activities": [
        {
          "time": "9:00 AM",
          "category": "Breakfast",
          "title": "Local cafe",
          "location": "Shibuya",
          "price": "¥1,500"
        }
      ]
    }
  ]
}

Create one days_data object for every day.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],

        generationConfig: {
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Gemini error:", errorText);

    throw new Error(`Gemini error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini did not return anything.");
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Gemini returned invalid JSON.");
  }
}
