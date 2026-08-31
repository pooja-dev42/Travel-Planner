import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Wander<span className="text-emerald-600">Trip</span>
            </span>
            <p className="text-sm text-gray-500">
              Discover your next great adventure, plan with AI, and explore the world seamlessly.
            </p>
          </div>

          {/* Popular Cities (Static) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Top Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Tokyo, Japan</li>
              <li>Paris, France</li>
              <li>Bali, Indonesia</li>
              <li>New York, USA</li>
            </ul>
          </div>

          {/* Travel Categories (Static) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Travel Vibe</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Culture & History</li>
              <li>Nature & Wildlife</li>
              <li>Food & Nightlife</li>
              <li>Relaxation & Spa</li>
            </ul>
          </div>

          {/* Contact Info (Static) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Get in Touch</h4>
            <p className="text-sm text-gray-500 mb-1">Support: myathandarko4@gmail.com</p>
            <p className="text-sm text-gray-500 mb-1">Support: poojathiwari52@gmail.com</p>
            <p className="text-sm text-gray-500">Phone: +95 9345785432</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2026 Wander Travel. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-medium text-emerald-700">Crafted for memorable journeys.</p>
        </div>
      </div>
    </footer>
  );
}