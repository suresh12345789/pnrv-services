import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle, Shield, Award, Clock, ArrowRight } from 'lucide-react';

const professionals = [
    {
        id: 1,
        name: "David Wilson",
        title: "Master Electrician",
        rating: 4.9,
        reviews: 503,
        experience: "7+ Years",
        description: "Specializing in smart home installations and full-house rewiring. Certified and insured expert delivering precision and safety for every modern home project.",
        tags: ["Smart Home", "Rewiring", "Installation"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        bgAccent: "from-orange-500/20 to-transparent"
    },
    {
        id: 2,
        name: "Sarah Chen",
        title: "Licensed Plumber",
        rating: 3.5,
        reviews: 450,
        experience: "3+ Years",
        description: "Expert in emergency leak repairs and modern bathroom fixtures. Fast, reliable service with an eye for detail and sustainable water solutions.",
        tags: ["Emergency", "Bathroom", "Leak Repair"],
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        bgAccent: "from-blue-500/20 to-transparent"
    },
    {
        id: 3,
        name: "Marcus Reed",
        title: "General Handyman",
        rating: 4.8,
        reviews: 560,
        experience: "4+ Years",
        description: "Your go-to expert for furniture assembly, TV mounting, and minor home repairs. Committed to efficient service and high-quality craftsmanship.",
        tags: ["Assembly", "Mounting", "Repairs"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        bgAccent: "from-purple-500/20 to-transparent"
    },
    {
        id: 4,
        name: "Elena Gomez",
        title: "HVAC Specialist",
        rating: 4.9,
        reviews: 480,
        experience: "6+ Years",
        description: "Specializing in energy-efficient AC systems and regular furnace maintenance. Dedicated to ensuring your home climate is perfect all year round.",
        tags: ["HVAC", "AC Systems", "Maintenance"],
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true,
        bgAccent: "from-teal-500/20 to-transparent"
    }
];

const ProfessionalsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % professionals.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + professionals.length) % professionals.length);
    }, []);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="relative py-10 ">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-1 bg-orange-500 rounded-full" />
                            <span className="text-orange-400 font-black uppercase tracking-[0.3em] text-xs">Verified Experts</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            Elite <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Professionals</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-400 text-lg font-medium border-l-2 border-gray-800 pl-6">
                        Work with the top 1% of certified technicians in your area. Every pro is background-checked and rated 4.8+ stars.
                    </p>
                </div>

                {/* Main Slider Content */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl border border-white/5">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {professionals.map((pro) => (
                                <div key={pro.id} className="min-w-full flex flex-col lg:flex-row">
                                    {/* Image Column */}
                                    <div className="w-full lg:w-[45%] h-[400px] lg:h-[550px] relative group overflow-hidden">
                                        <div className={`absolute inset-0 bg-linear-to-t ${pro.bgAccent} z-10`} />
                                        <img
                                            src={pro.image}
                                            alt={pro.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Floating Rating Card */}
                                        <div className="absolute bottom-10 right-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-xl shadow-2xl animate-fade-in">
                                            <div className="flex items-center gap-4">
                                              
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                                                        <span className="text-white font-bold text-xl">{pro.rating}</span>
                                                    </div>
                                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{pro.reviews} reviews</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Experience Tag */}
                                        <div className="absolute top-10 left-10 z-20 flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl shadow-orange-500/40">
                                            <Clock className="w-5 h-5" />
                                            <span>{pro.experience} EXP</span>
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="w-full lg:w-[55%] p-10 md:p-16 flex flex-col justify-center space-y-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-4xl md:text-6xl font-black text-white">{pro.name}</h3>
                                                {pro.verified && <CheckCircle className="w-8 h-8 text-blue-500" />}
                                            </div>
                                            <p className="text-2xl text-orange-400 font-bold uppercase tracking-[0.2em]">{pro.title}</p>
                                        </div>

                                        <p className="text-gray-400 text-xl leading-relaxed font-medium">
                                            {pro.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl group/stat hover:bg-white/10 transition-colors">
                                                <Shield className="w-8 h-8 text-orange-500 mb-4 group-hover/stat:scale-110 transition-transform" />
                                                <h4 className="text-white font-bold text-lg mb-1">Guaranteed</h4>
                                                <p className="text-gray-500 text-sm">Every job is insured up to $1M</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl group/stat hover:bg-white/10 transition-colors">
                                                <Award className="w-8 h-8 text-blue-500 mb-4 group-hover/stat:scale-110 transition-transform" />
                                                <h4 className="text-white font-bold text-lg mb-1">Top Rated</h4>
                                                <p className="text-gray-500 text-sm">Consistently 5-star feedback</p>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-4">
                                            <button className="group/btn relative w-full overflow-hidden bg-white text-gray-900 font-black py-6 rounded-[2rem] text-xl transition-all hover:scale-[1.02] active:scale-95 shadow-2xl flex items-center justify-center gap-4">
                                                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">Book Expert Session</span>
                                                <ArrowRight className="relative z-10 w-6 h-6 group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
                        <button
                            onClick={prevSlide}
                            className="w-16 h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-2xl group"
                        >
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <div className="flex gap-3">
                            {professionals.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-orange-500' : 'w-2 bg-gray-700 hover:bg-gray-600'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-16 h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-2xl group"
                        >
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalsSlider;