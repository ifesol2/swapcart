'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-900 scroll-smooth">
  <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-30">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" className="text-2xl font-extrabold text-green-700 hover:text-green-800 transition-colors" aria-label="SwapCart logo">
        SwapCart
      </a>
      <div className="hidden sm:flex space-x-8 text-gray-700 font-medium">
        <a href="#how-it-works" className="hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded">How It Works</a>
        <a href="#why-swapcart" className="hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded">Why SwapCart</a>
        <a href="#waitlist" className="hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded">Get Early Access</a>
      </div>
      <a
        href="#waitlist"
        className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
      >
        Join the Waitlist
      </a>
    </nav>
  </header>

  <main className="flex-grow">
    {/* Hero Section */}
    <section
      id="hero"
      className="relative bg-white overflow-hidden"
      aria-label="Hero section showcasing SwapCart's main value proposition"
    >
      <div className="container mx-auto px-6 pt-20 pb-16 flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-12">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-green-900 drop-shadow-md">
            Swap What You Don’t Need for What You Do.
          </h1>
          <p className="text-lg sm:text-xl text-green-800 max-w-lg mx-auto md:mx-0">
            A new way to trade everyday items with people near you—no cash, just fair swaps.
          </p>

          <form
            id="waitlist"
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start max-w-md mx-auto md:mx-0 space-y-4 sm:space-y-0 sm:space-x-4"
            onSubmit={e => e.preventDefault()}
            aria-label="Join the waitlist form"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
              aria-required="true"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold shadow-md hover:from-green-700 hover:to-green-900 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
              aria-label="Join the waitlist"
            >
              Get Early Access
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative mb-12 md:mb-0 flex justify-center md:justify-end">
          <div className="relative w-72 sm:w-96 h-96 md:h-[28rem] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-tr from-green-100 to-green-200 animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1512499617640-c2f99912a3e1?auto=format&fit=crop&w=600&q=80"
              alt="Hero background illustration of household items and people trading"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-xl shadow-lg p-6 max-w-xs w-full ring-1 ring-green-300">
              <h3 className="text-lg font-semibold text-green-900 mb-3 text-center">Example Trade</h3>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1580910051071-5a8c8b2c6f3b?auto=format&fit=crop&w=80&q=80"
                    alt="Wireless Earbuds"
                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-green-700">Wireless Earbuds</span>
                </div>
                <span className="text-3xl text-green-600 font-extrabold select-none" aria-hidden="true">⟷</span>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=80&q=80"
                    alt="Blender"
                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-green-700">Blender</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section
      id="how-it-works"
      className="bg-green-50 py-20"
      aria-label="How SwapCart works in three simple steps"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-extrabold text-green-900 text-center mb-12 drop-shadow-sm">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-full mb-6">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 16.5v-9a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3z" />
                <path d="M3 10.5h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-900">List an Item</h3>
            <p className="text-green-800 max-w-xs">
              Upload a photo, add a short description to showcase what you want to swap.
            </p>
          </article>

          <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-full mb-6">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Find a Match</h3>
            <p className="text-green-800 max-w-xs">
              Get AI-powered suggestions for trade matches nearby, tailored to your items.
            </p>
          </article>

          <article className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-full mb-6">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                <path d="M8 12V8a4 4 0 118 0v4" />
                <path d="M12 16h0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Make the Swap</h3>
            <p className="text-green-800 max-w-xs">
              Chat securely and arrange a safe, local exchange with your trade partner.
            </p>
          </article>
        </div>
      </div>
    </section>

    {/* Why SwapCart Section */}
    <section
      id="why-swapcart"
      className="py-20 bg-gradient-to-r from-green-100 to-green-200"
      aria-label="Why choose SwapCart"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-green-900 mb-12 drop-shadow-sm">
          Why SwapCart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-green-900">
            <div className="bg-green-300 text-green-900 p-5 rounded-full mb-6 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1111.21 3" />
                <path d="M12 7v5l4 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">♻️ Eco-Friendly</h3>
            <p className="text-green-800">Reduce waste, reuse more, and make a positive impact on the environment.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-green-900">
            <div className="bg-green-300 text-green-900 p-5 rounded-full mb-6 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">🔄 Cashless Value</h3>
            <p className="text-green-800">Trade fairly with no money involved. Just swap what you need.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-green-900">
            <div className="bg-green-300 text-green-900 p-5 rounded-full mb-6 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 7V3m8 4V3M3 11h18M4 15h16M6 19h12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">🧠 Smart Matching</h3>
            <p className="text-green-800">AI finds the best trade partners nearby for you, hassle-free.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section (Placeholder) */}
    <section className="py-20 bg-white" aria-label="Testimonials">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-green-900 mb-8 drop-shadow-sm">What Early Users Say</h2>
        <p className="text-green-800 italic text-lg opacity-70 select-none">Coming soon...</p>
      </div>
    </section>

    {/* Final CTA Section */}
    <section
      className="sticky bottom-0 bg-gradient-to-r from-green-600 to-green-800 p-6 shadow-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 z-40"
      aria-label="Final call to action"
    >
      <h3 className="text-white text-xl font-extrabold select-none">
        Be the first to trade smarter.
      </h3>
      <form
        className="flex w-full max-w-md space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
        onSubmit={e => e.preventDefault()}
        aria-label="Final waitlist email form"
      >
        <label htmlFor="final-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="final-email"
          name="final-email"
          required
          placeholder="Your email address"
          className="flex-grow px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition shadow-sm"
          aria-required="true"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-white text-green-800 font-semibold shadow-md hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          aria-label="Join the waitlist"
        >
          Join Now
        </button>
      </form>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-green-900 text-green-200 py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div className="text-sm select-none">&copy; {new Date().getFullYear()} SwapCart. All rights reserved.</div>
      <nav className="flex space-x-6 text-sm">
        <a href="#about" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded">About</a>
        <a href="#privacy" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded">Privacy Policy</a>
        <a href="#contact" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/swapcart"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M23 3a10.9 10.9 0 01-3.14.86A5.48 5.48 0 0022.4.37a10.66 10.66 0 01-3.37 1.29A5.36 5.36 0 0016.67 0c-2.9 0-5.26 2.43-5.26 5.43 0 .43.04.85.14 1.25A14.94 14.94 
  )
}