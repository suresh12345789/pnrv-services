import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0 scale-105 animate-[ken-burns_20s_linear_infinite]"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2070")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-1 backdrop-blur-[2px]" />

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
                <div className="space-y-8 animate-slide-up">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-bold tracking-widest uppercase animate-fade-in">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Certified Professionals At Your Service
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight">
                        Expert Care for Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                            Perfect Home
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-300 font-medium leading-relaxed opacity-90 delay-300">
                        Book reliable technicians for plumbing, electrical work, AC repair, and 50+ other home services in just a few clicks.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-2xl transition-all shadow-2xl shadow-indigo-600/40 transform hover:-translate-y-1 active:scale-95">
                            Book A Service
                        </button>
                        <button className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-2xl transition-all active:scale-95">
                            Our Pricing
                        </button>
                    </div>

                    {/* Stats or Trust Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-12 opacity-80 max-w-4xl mx-auto">
                        <div className="text-center group">
                            <h4 className="text-white text-3xl font-black group-hover:text-indigo-400 transition-colors">15k+</h4>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Happy Clients</p>
                        </div>
                        <div className="text-center group">
                            <h4 className="text-white text-3xl font-black group-hover:text-indigo-400 transition-colors">500+</h4>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Technicians</p>
                        </div>
                        <div className="text-center group">
                            <h4 className="text-white text-3xl font-black group-hover:text-indigo-400 transition-colors">4.8★</h4>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Service Rating</p>
                        </div>
                        <div className="text-center group">
                            <h4 className="text-white text-3xl font-black group-hover:text-indigo-400 transition-colors">24/7</h4>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Availability</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Scroll Down Element */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer flex flex-col items-center gap-2">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Explore</span>
                <div className="w-px h-10 bg-linear-to-b from-indigo-500 to-transparent" />
            </div>

            <style jsx>{`
                @keyframes ken-burns {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
