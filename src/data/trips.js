const tokyoDays = [
  {
    id: 1,
    label: "Day 1",
    date: "Sept 10, 2026",
    title: "Shibuya & Harajuku",
    description:
      "Take it easy and explore some of Tokyo's most popular neighborhoods.",
    activities: [
      {
        time: "9:00 AM",
        category: "Breakfast",
        title: "Local café",
        location: null,
        price: "¥1,500",
      },
      {
        time: "10:00 AM",
        category: "Sightseeing",
        title: "Meiji Shrine",
        location: "Shibuya",
        price: "Free",
      },
      {
        time: "12:00 PM",
        category: "Lunch",
        title: "Takeshita Street food stalls",
        location: "Harajuku",
        price: "¥1,800",
      },
      {
        time: "3:00 PM",
        category: "Sightseeing",
        title: "Shibuya Crossing",
        location: "Shibuya",
        price: "Free",
      },
      {
        time: "7:00 PM",
        category: "Dinner",
        title: "Local Japanese restaurant",
        location: "Shibuya",
        price: "¥4,200",
      },
    ],
  },

  {
    id: 2,
    label: "Day 2",
    date: "Sept 11, 2026",
    title: "Asakusa & Ueno",
    description: "A day of temples, museums, and old Tokyo charm.",
    activities: [
      {
        time: "9:00 AM",
        category: "Sightseeing",
        title: "Senso-ji Temple",
        location: "Asakusa",
        price: "Free",
      },
      {
        time: "11:00 AM",
        category: "Shopping",
        title: "Nakamise shopping street",
        location: "Asakusa",
        price: "¥3,000",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Ueno noodle shop",
        location: "Ueno",
        price: "¥1,600",
      },
      {
        time: "2:30 PM",
        category: "Sightseeing",
        title: "Tokyo National Museum",
        location: "Ueno Park",
        price: "¥1,000",
      },
    ],
  },

  {
    id: 3,
    label: "Day 3",
    date: "Sept 12, 2026",
    title: "Odaiba & Waterfront",
    description:
      "Futuristic architecture and skyline views by the bay.",
    activities: [
      {
        time: "10:00 AM",
        category: "Sightseeing",
        title: "teamLab Planets",
        location: "Odaiba",
        price: "¥3,800",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Waterfront food court",
        location: "Odaiba",
        price: "¥1,900",
      },
      {
        time: "3:00 PM",
        category: "Activity",
        title: "Rainbow Bridge walk",
        location: "Odaiba",
        price: "Free",
      },
    ],
  },

  {
    id: 4,
    label: "Day 4",
    date: "Sept 13, 2026",
    title: "Shinjuku & Nightlife",
    description:
      "Neon streets, skyscraper views, and an evening out.",
    activities: [
      {
        time: "11:00 AM",
        category: "Sightseeing",
        title: "Tokyo Metropolitan Government Building",
        location: "Shinjuku",
        price: "Free",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Omoide Yokocho alley",
        location: "Shinjuku",
        price: "¥2,200",
      },
      {
        time: "8:00 PM",
        category: "Nightlife",
        title: "Golden Gai bar hop",
        location: "Shinjuku",
        price: "¥3,500",
      },
    ],
  },

  {
    id: 5,
    label: "Day 5",
    date: "Sept 14, 2026",
    title: "Ghibli Museum & Farewell",
    description:
      "A relaxed last day, with the Ghibli visit you asked for.",
    activities: [
      {
        time: "10:00 AM",
        category: "Sightseeing",
        title: "Ghibli Museum",
        location: "Mitaka",
        price: "¥1,000",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Kichijoji café",
        location: "Kichijoji",
        price: "¥1,700",
      },
      {
        time: "3:00 PM",
        category: "Shopping",
        title: "Last-minute souvenir shopping",
        location: "Kichijoji",
        price: "¥5,000",
      },
    ],
  },
];

const parisDays = [
  {
    id: 1,
    label: "Day 1",
    date: "Oct 4, 2026",
    title: "Louvre & Le Marais",
    description:
      "Art in the morning, wandering cobblestones in the afternoon.",
    activities: [
      {
        time: "9:30 AM",
        category: "Sightseeing",
        title: "The Louvre",
        location: "1st Arrondissement",
        price: "€17",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Le Marais bistro",
        location: "Le Marais",
        price: "€22",
      },
      {
        time: "3:30 PM",
        category: "Sightseeing",
        title: "Place des Vosges",
        location: "Le Marais",
        price: "Free",
      },
    ],
  },

  {
    id: 2,
    label: "Day 2",
    date: "Oct 5, 2026",
    title: "Eiffel Tower & Seine",
    description:
      "Classic Paris views, riverside walks, and a relaxed evening.",
    activities: [
      {
        time: "9:00 AM",
        category: "Breakfast",
        title: "Parisian café",
        location: "7th Arrondissement",
        price: "€12",
      },
      {
        time: "10:30 AM",
        category: "Sightseeing",
        title: "Eiffel Tower",
        location: "Champ de Mars",
        price: "€29",
      },
      {
        time: "1:30 PM",
        category: "Lunch",
        title: "Seine-side café",
        location: "7th Arrondissement",
        price: "€25",
      },
      {
        time: "4:00 PM",
        category: "Activity",
        title: "Seine River Cruise",
        location: "Seine River",
        price: "€18",
      },
    ],
  },

  {
    id: 3,
    label: "Day 3",
    date: "Oct 6, 2026",
    title: "Montmartre & Sacré-Cœur",
    description:
      "Explore artistic streets, local cafés, and beautiful city views.",
    activities: [
      {
        time: "9:30 AM",
        category: "Sightseeing",
        title: "Sacré-Cœur Basilica",
        location: "Montmartre",
        price: "Free",
      },
      {
        time: "11:00 AM",
        category: "Sightseeing",
        title: "Montmartre village",
        location: "Montmartre",
        price: "Free",
      },
      {
        time: "1:00 PM",
        category: "Lunch",
        title: "Montmartre café",
        location: "Montmartre",
        price: "€20",
      },
    ],
  },

  {
    id: 4,
    label: "Day 4",
    date: "Oct 7, 2026",
    title: "Arc de Triomphe & Champs-Élysées",
    description:
      "Finish the trip with iconic landmarks and relaxed shopping.",
    activities: [
      {
        time: "10:00 AM",
        category: "Sightseeing",
        title: "Arc de Triomphe",
        location: "8th Arrondissement",
        price: "€16",
      },
      {
        time: "12:30 PM",
        category: "Lunch",
        title: "Champs-Élysées restaurant",
        location: "Champs-Élysées",
        price: "€25",
      },
      {
        time: "2:00 PM",
        category: "Shopping",
        title: "Champs-Élysées shopping",
        location: "Champs-Élysées",
        price: "€60",
      },
      {
        time: "7:00 PM",
        category: "Dinner",
        title: "Farewell French dinner",
        location: "8th Arrondissement",
        price: "€40",
      },
    ],
  },
];

export const trips = [
  {
    id: "tokyo",
    destination: "Tokyo, Japan",
    city: "Tokyo",
    country: "Japan",
    startDate: "Sept 10, 2026",
    endDate: "Sept 15, 2026",
    days: 5,
    travelers: 2,
    status: "Upcoming",
    heroImage:
      "https://picsum.photos/seed/wander-tokyo-hero/1400/500",
    cardImage:
      "https://picsum.photos/seed/wander-tokyo/640/480",

    budget: {
      total: 1500,
      currency: "USD",
      estimatedSpending: 1320,
      dailyEstimates: [
        { day: "Day 1", amount: 120 },
        { day: "Day 2", amount: 280 },
        { day: "Day 3", amount: 240 },
        { day: "Day 4", amount: 350 },
        { day: "Day 5", amount: 330 },
      ],
    },

    days_data: tokyoDays,
  },

  {
    id: "paris",
    destination: "Paris, France",
    city: "Paris",
    country: "France",
    startDate: "Oct 4, 2026",
    endDate: "Oct 8, 2026",
    days: 4,
    travelers: 1,
    status: "Planned",
    heroImage:
      "https://picsum.photos/seed/wander-paris-hero/1400/500",
    cardImage:
      "https://picsum.photos/seed/wander-paris/640/480",

    budget: {
      total: 1100,
      currency: "USD",
      estimatedSpending: 980,
      dailyEstimates: [
        { day: "Day 1", amount: 260 },
        { day: "Day 2", amount: 230 },
        { day: "Day 3", amount: 270 },
        { day: "Day 4", amount: 220 },
      ],
    },

    days_data: parisDays,
  },
];