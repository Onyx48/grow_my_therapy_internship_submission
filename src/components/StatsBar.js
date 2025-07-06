"use client";

import dynamic from "next/dynamic";

const CountUp = dynamic(
  () => import("react-countup").then((mod) => mod.default),
  { ssr: false }
);

export default function StatsBar() {
  return (
    <section className="bg-dark-teal py-10 sm:py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-white">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              <CountUp end={8} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </h2>
            <p className="mt-2 text-xl font-semibold">Years of Practice</p>
            <p className="mt-3 text-base text-white/70 max-w-sm mx-auto">
              Providing compassionate and effective individual and couples
              therapy.
            </p>
          </div>
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              <CountUp
                end={500}
                duration={2.5}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h2>
            <p className="mt-2 text-xl font-semibold">Client Sessions</p>
            <p className="mt-3 text-base text-white/70 max-w-sm mx-auto">
              Helping individuals and couples heal, grow, and find purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
