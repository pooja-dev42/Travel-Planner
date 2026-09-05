import React from "react";

export default function Footer() {
  return (
    <footer className='border-t border-border bg-cream text-muted'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Brand Info */}
          <div className='space-y-3'>
            <span className='text-xl font-semibold tracking-tight text-charcoal'>
              Wander<span className='text-wander-600'>Trip</span>
            </span>

            <p className='text-sm text-muted'>
              Discover your next great adventure, plan with AI, and explore the
              world seamlessly.
            </p>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className='mb-3 text-sm font-semibold uppercase tracking-wider text-charcoal'>
              Top Destinations
            </h4>

            <ul className='space-y-2 text-sm text-muted'>
              <li>Tokyo, Japan</li>
              <li>Paris, France</li>
              <li>Bali, Indonesia</li>
              <li>New York, USA</li>
            </ul>
          </div>

          {/* Travel Categories */}
          <div>
            <h4 className='mb-3 text-sm font-semibold uppercase tracking-wider text-charcoal'>
              Travel Vibe
            </h4>

            <ul className='space-y-2 text-sm text-muted'>
              <li>Culture & History</li>
              <li>Nature & Wildlife</li>
              <li>Food & Nightlife</li>
              <li>Relaxation & Spa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='mb-3 text-sm font-semibold uppercase tracking-wider text-charcoal'>
              Get in Touch
            </h4>

            <p className='mb-1 text-sm text-muted'>
              Support: myathandarko4@gmail.com
            </p>

            <p className='mb-1 text-sm text-muted'>
              Support: poojathiwari52@gmail.com
            </p>

            <p className='text-sm text-muted'>Phone: +95 9345785432</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col items-center justify-between border-t border-border pt-4 text-sm text-muted sm:flex-row'>
          <p>© 2026 Wander Travel. All rights reserved.</p>

          <p className='mt-2 font-medium text-wander-700 sm:mt-0'>
            Crafted for memorable journeys.
          </p>
        </div>
      </div>
    </footer>
  );
}
