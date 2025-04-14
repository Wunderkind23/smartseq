import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Projects', value: 98 },
  { label: 'People', value: 65 },
  { label: 'Years', value: 10 },
  { label: 'Offices', value: 15 },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <div key={index} className="relative">
            {/* Number with label directly above */}
            <h2 className="text-8xl font-bold text-white drop-shadow-lg">{inView ? <CountUp end={stat.value} duration={2} /> : 0}</h2>
            <p className="absolute top-1/2 left-0 right-0 text-2xl text-indigo-900 font-semibold transform -translate-y-1/2">{stat.label}</p>
            
            {/* Divider line */}
            {index !== stats.length - 1 && (
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block">
                <span className="inline-block w-[1px] h-10 bg-white opacity-20"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
