import React from "react";

// ===== QUICK START =====
// 1) Replace STRIPE links below with your actual Payment Links or Checkout URLs.
// 2) Swap product name/price, hero image, and copy.
// 3) Publish anywhere (Vercel, Netlify, or paste into your builder that accepts React).
// 4) Add your pixels (Meta/TikTok/Google) in the "Tracking & Pixels" section at the bottom.

const STRIPE_ONE_PACK = "https://buy.stripe.com/test_onepack"; // 1-Pack Payment Link
const STRIPE_TWO_PACK = "https://buy.stripe.com/test_twopack"; // 2-Pack Payment Link (most popular)
const STRIPE_FOUR_PACK = "https://buy.stripe.com/test_fourpack"; // 4-Pack Payment Link (best value)

export default function StickerFinderLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Announcement Bar */}
      <div className="w-full bg-black text-white text-center text-sm py-2">🚀 Launch Special: Free shipping today only</div>

      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black"></div>
          <span className="font-semibold tracking-tight">Sticker Finder</span>
        </div>
        <a href="#buy" className="hidden sm:inline-block rounded-2xl px-4 py-2 bg-black text-white text-sm">Buy Now</a>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-10 md:py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find lost stuff <span className="underline">in seconds</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ultra‑thin Bluetooth sticker that beeps so you can find keys, remotes, wallets, and more. No app required.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Peel‑and‑stick in 2 seconds</li>
            <li>• Built‑in buzzer you can hear across the room</li>
            <li>• Battery lasts months — replaceable coin cell</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={STRIPE_TWO_PACK} className="rounded-2xl px-5 py-3 bg-black text-white font-semibold text-center">Get the 2‑Pack (Most Popular)</a>
            <a href="#how" className="rounded-2xl px-5 py-3 border border-gray-300 text-center">How it works</a>
          </div>
          <div className="mt-4 text-xs text-gray-500">30‑day money‑back guarantee • Secure checkout • Apple Pay & Google Pay supported</div>
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-3xl bg-gray-100 border border-gray-200" />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-3 text-sm border">
            <div className="font-semibold">Super thin</div>
            <div className="text-gray-600">Barely-there profile slides into wallets</div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center text-xs text-gray-500">
          <div className="border rounded-xl p-3 text-center">Fast Shipping</div>
          <div className="border rounded-xl p-3 text-center">30‑Day Guarantee</div>
          <div className="border rounded-xl p-3 text-center">1‑Year Warranty</div>
          <div className="border rounded-xl p-3 text-center">Secure Checkout</div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Stick",
              desc: "Peel backing and stick to your item.",
            },
            {
              step: "02",
              title: "Pair",
              desc: "Hold button to pair to your phone’s Bluetooth.",
            },
            {
              step: "03",
              title: "Beep",
              desc: "Tap ‘Find’ and follow the sound to your item.",
            },
          ].map((c) => (
            <div key={c.step} className="rounded-2xl border p-6">
              <div className="text-gray-400 text-sm">{c.step}</div>
              <div className="font-semibold text-lg">{c.title}</div>
              <div className="mt-2 text-gray-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer / Pricing */}
      <section id="buy" className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Choose your pack</h2>
          <p className="text-center text-gray-600 mt-2">Ships next business day from Utah. Free US shipping today.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* 1 Pack */}
            <div className="rounded-2xl border bg-white p-6 flex flex-col">
              <div className="text-sm font-medium text-gray-500">Starter</div>
              <div className="text-3xl font-extrabold mt-2">$7.99</div>
              <div className="text-xs text-gray-500">1 sticker • Great for keys</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• Ultra‑thin profile</li>
                <li>• Loud buzzer</li>
                <li>• Replaceable battery</li>
              </ul>
              <a href={STRIPE_ONE_PACK} className="mt-6 rounded-2xl px-4 py-3 bg-black text-white text-center font-semibold">Buy 1</a>
            </div>
            {/* 2 Pack */}
            <div className="rounded-2xl border-2 border-black bg-white p-6 flex flex-col shadow-sm">
              <div className="text-sm font-medium text-green-700">Most Popular</div>
              <div className="text-3xl font-extrabold mt-2">$13.99</div>
              <div className="text-xs text-gray-500">2 stickers • Save 12%</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• Everything in Starter</li>
                <li>• Free shipping</li>
                <li>• Priority support</li>
              </ul>
              <a href={STRIPE_TWO_PACK} className="mt-6 rounded-2xl px-4 py-3 bg-black text-white text-center font-semibold">Buy 2</a>
            </div>
            {/* 4 Pack */}
            <div className="rounded-2xl border bg-white p-6 flex flex-col">
              <div className="text-sm font-medium text-gray-500">Best Value</div>
              <div className="text-3xl font-extrabold mt-2">$24.99</div>
              <div className="text-xs text-gray-500">4 stickers • Save 22%</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• Family pack pricing</li>
                <li>• Free shipping</li>
                <li>• 1‑year warranty</li>
              </ul>
              <a href={STRIPE_FOUR_PACK} className="mt-6 rounded-2xl px-4 py-3 bg-black text-white text-center font-semibold">Buy 4</a>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">All orders backed by our 30‑day money‑back guarantee.</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">Why people love it</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Found my TV remote in 10 seconds.", "So thin it fits in my wallet.", "I stick these on remotes and game controllers."].map((quote, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white">
              <div className="text-sm text-gray-600">★★★★★</div>
              <div className="mt-2 font-medium">{quote}</div>
              <div className="mt-3 text-xs text-gray-500">— Verified buyer</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">Does it need an app?</div>
              <div className="text-gray-600 mt-2">No. Pair via Bluetooth and press the button on your phone to make it beep.</div>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">How long does the battery last?</div>
              <div className="text-gray-600 mt-2">Typical use: several months. Replaceable coin cell takes seconds to swap.</div>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">Return policy?</div>
              <div className="text-gray-600 mt-2">30‑day money‑back guarantee. If you don’t love it, send it back.</div>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">Shipping time?</div>
              <div className="text-gray-600 mt-2">Orders ship next business day. US delivery typically 3–5 days.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Sticker Finder Co.</div>
          <div className="flex gap-4">
            <a className="underline" href="#">Refund Policy</a>
            <a className="underline" href="#">Shipping</a>
            <a className="underline" href="#">Privacy</a>
            <a className="underline" href="#">Terms</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-400">
          <strong>Tracking & Pixels:</strong> Insert Meta/TikTok/Google pixels in your deploy platform. Also add UTM parameters to ad links like: <code>?utm_source=meta&utm_campaign=launch&utm_content=video1</code>.
        </div>
      </footer>
    </div>
  );
}
