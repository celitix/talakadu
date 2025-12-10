"use client"
import React, { useEffect, useState } from "react";

export default function BrownStats() {
  const stats = [
    { value: 30, label: "OVER TEMPLES" },
    { value: 45, label: "DISTANCE FROM MYSORE" },
    { value: 133, label: "DISTANCE FROM BANGLORE" },
    { value: 29, label: "DISTANCE FROM NARASIPURA" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // trigger once
        }
      },
      { threshold: 0.4 } // 40% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500;
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;

    const interval = setInterval(() => {
      step++;

      setCounts(
        stats.map((item) =>
          Math.min(Math.floor((item.value / steps) * step), item.value)
        )
      );

      if (step === steps) clearInterval(interval);
    }, intervalTime);
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className="w-full py-12 px-4 bg-[#f8f5f1]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center 
                      p-6 rounded-xl bg-white shadow-md hover:shadow-xl 
                      transition-all duration-300 border border-[#e8e1d8]"
          >
            <span className="text-4xl font-bold text-[#7a4a21]">
              {counts[index]}
            </span>

            <span className="mt-2 text-sm tracking-wide font-semibold text-[#8b5e34]">
              {item.label}
            </span>
          </div>
        ))}
        
      </div>
    </div>
  );
}
