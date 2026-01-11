import React from 'react';

// Import support images
import supportImg from '../../assets/images/Support/Support.png';
import trustedImg from '../../assets/images/Support/Trusted.png';
import fastBookingImg from '../../assets/images/Support/Fast and Easy.png';
import secureImg from '../../assets/images/Support/Safe_Secure.png';

const Support = () => {
  const supportFeatures = [
    {
      id: 1,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help you with bookings, service updates, and any questions you may have.",
      image: supportImg,
      color: "from-blue-600/20",
      hoverText: "group-hover:text-blue-500",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "Trusted & Verified Technicians",
      description: "All technicians are background-checked, professionally trained, and verified to ensure safe and high-quality service every time.",
      image: trustedImg,
      color: "from-indigo-600/20",
      hoverText: "group-hover:text-indigo-500",
      borderColor: "group-hover:border-indigo-500/50"
    },
    {
      id: 3,
      title: "Fast and Easy Booking",
      description: "Book your required service in just a few clicks with a smooth, simple, and user-friendly booking process.",
      image: fastBookingImg,
      color: "from-purple-600/20",
      hoverText: "group-hover:text-purple-500",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: 4,
      title: "Safe & Secure",
      description: "Your personal information and payments are protected. Our platform uses advanced measures to keep your data safe and ensure a secure service experience.",
      image: secureImg,
      color: "from-rose-600/20",
      hoverText: "group-hover:text-rose-500",
      borderColor: "group-hover:border-rose-500/50"
    }
  ];

  return (
    <section className="py-16 bg-slate-950 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-5 md:px-10 w-full max-w-8xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Support <span className="text-orange-500">.</span></h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {supportFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative p-8 md:p-10 rounded-3xl bg-gray-900 border border-white/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-slide-up flex flex-col items-center text-center ${feature.borderColor}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Interactive Background Shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] z-10" />

              {/* Dynamic Glow Effect */}
              <div className={`absolute -inset-10 bg-linear-to-br transition-opacity duration-700 opacity-0 group-hover:opacity-100 blur-3xl -z-10 ${feature.color} to-transparent`} />

              {/* Image Holder - Transparent Background */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-8 transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-20 space-y-4">
                <h4 className={`text-xl md:text-2xl font-black text-white leading-tight transition-colors duration-300 ${feature.hoverText}`}>
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium transition-colors group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;