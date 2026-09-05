export default function TripSubNav({ activeTab, setActiveTab }) {
  return (
    <nav className='mt-6 flex gap-8 border-b border-border'>
      <button
        type='button'
        onClick={() => setActiveTab("itinerary")}
        className={`border-b-2 pb-3 text-sm ${
          activeTab === "itinerary"
            ? "border-wander-600 font-medium text-charcoal"
            : "border-transparent text-muted"
        }`}>
        Itinerary
      </button>

      <button
        type='button'
        onClick={() => setActiveTab("budget")}
        className={`border-b-2 pb-3 text-sm ${
          activeTab === "budget"
            ? "border-wander-600 font-medium text-charcoal"
            : "border-transparent text-muted"
        }`}>
        Budget
      </button>
    </nav>
  );
}
