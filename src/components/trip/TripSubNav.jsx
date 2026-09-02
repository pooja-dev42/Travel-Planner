import { NavLink } from "react-router-dom";

export default function TripSubNav({ tripId }) {
  const links = [
    {
      label: "Itinerary",
      to: `/my-trip/${tripId}`,
    },
    {
      label: "Budget",
      to: `/my-trip/${tripId}/budget`,
    },
  ];

  return (
    <nav className='mt-6 flex gap-6 border-b border-border'>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.label === "Itinerary"}
          className={({ isActive }) =>
            `border-b-2 pb-3 text-sm ${
              isActive
                ? "border-wander-600 font-medium text-charcoal"
                : "border-transparent text-muted"
            }`
          }>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
