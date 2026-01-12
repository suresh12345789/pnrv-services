import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle, Shield, Award, Clock, ArrowRight } from 'lucide-react';
import pro1 from '../../assets/images/Professionals/Electrician_Services.jpg';
import pro2 from '../../assets/images/Professionals/Plumbing_Services.jpg';
import pro3 from '../../assets/images/Professionals/painting.jpg';
import pro4 from '../../assets/images/Professionals/Home_Appliance_Repair.jpg';

const professionals = [
    {
        id: 1,
        name: "Ramesh Kumar",
        title: "Master Electrician",
        rating: 4.9,
        reviews: 503,
        experience: "12+ Years",
        description: "Specializing in smart home installations and industrial wiring across Hi-Tech City and Gachibowli. Certified expert delivering safety and precision for Hyderabad's modern homes.",
        tags: ["Smart Home", "Rewiring", "Installation"],
        image: pro1,
        verified: true,
        bgAccent: "from-orange-500/20 to-transparent",
        location: "Hi-Tech City"
    },
    {
        id: 2,
        name: "Anjali Goud",
        title: "Licensed Plumber",
        rating: 4.8,
        reviews: 450,
        experience: "8+ Years",
        description: "Expert in emergency repairs and luxury bathroom fittings in Banjara Hills. Fast, reliable service with deep knowledge of Hyderabad's unique water infrastructure.",
        tags: ["Emergency", "Bathroom", "Leak Repair"],
        image: pro2,
        verified: true,
        bgAccent: "from-blue-500/20 to-transparent",
        location: "Banjara Hills"
    },
    {
        id: 3,
        name: "Ravi Kumar",
        title: "Professional Painter",
        rating: 4.7,
        reviews: 320,
        experience: "10+ Years",
        description: "Transforming homes in Jubilee Hills with premium textures and weather-proof coatings. Known for meticulous detail and timely completion of large-scale projects.",
        tags: ["Texture Paint", "Interior", "Exterior"],
        image: pro3,
        verified: true,
        bgAccent: "from-purple-500/20 to-transparent",
        location: "Jubilee Hills"
    },
    {
        id: 4,
        name: "Priya Sharma",
        title: "Appliance Expert",
        rating: 4.9,
        reviews: 480,
        experience: "6+ Years",
        description: "Specializing in advanced appliance repair for Secunderabad residents. From smart refrigerators to high-end washing machines, I ensure your gadgets work like new.",
        tags: ["Repair", "Installation", "Maintenance"],
        image: pro4,
        verified: true,
        bgAccent: "from-teal-500/20 to-transparent",
        location: "Secunderabad"
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
        <section className="relative py-12 md:py-16 overflow-hidden bg-gray-950">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[200px] bg-orange-500/10 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[200px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 md:w-12 h-1 bg-orange-500 rounded-full" />
                            <span className="text-orange-400 font-extrabold uppercase tracking-[0.2em] text-[10px] md:text-xs">Verified Experts Hyderabad</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none">
                            Elite <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Professionals</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-400 text-base md:text-lg font-medium border-l-2 border-orange-500/50 pl-6">
                        Connect with Hyderabad's top 1% certified technicians. Background-checked and specialized in local home requirements.
                    </p>
                </div>

                {/* Main Slider Content */}
                <div
                    className="relative px-2 md:px-0"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="relative overflow-hidden rounded-3xl md:rounded-[3rem] bg-white/5 shadow-2xl border border-white/5 backdrop-blur-sm">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {professionals.map((pro) => (
                                <div key={pro.id} className="min-w-full flex flex-col lg:flex-row">
                                    {/* Image Column - Top on Mobile */}
                                    <div className="w-full lg:w-[45%] h-[280px] sm:h-[400px] lg:h-[600px] relative group overflow-hidden">
                                        <div className={`absolute inset-0 bg-linear-to-t ${pro.bgAccent} z-10`} />
                                        <img
                                            src={pro.image}
                                            alt={pro.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />

                                        {/* Floating Rating Card */}
                                        <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                                                <div>
                                                    <span className="text-white font-bold text-lg md:text-xl block leading-none">{pro.rating}</span>
                                                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">{pro.reviews} reviews</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Experience Tag */}
                                        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-xs md:text-sm shadow-xl shadow-orange-500/30">
                                            <Clock className="w-4 h-4" />
                                            <span>{pro.experience} EXP</span>
                                        </div>

                                        {/* Location Tag - Mobile Only */}
                                        <div className="absolute top-6 right-6 lg:hidden z-20 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold text-[10px]">
                                            <span>{pro.location}</span>
                                        </div>
                                    </div>

                                    {/* Content Column - Bottom on Mobile */}
                                    <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-10">
                                        <div className="space-y-3 md:space-y-4">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">{pro.name}</h3>
                                                {pro.verified && <CheckCircle className="w-6 h-6 md:w-8 h-8 text-blue-500 fill-blue-500/10" />}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <div className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full">
                                                    <span className="text-orange-400 font-bold text-sm md:text-base uppercase tracking-widest">{pro.title}</span>
                                                </div>
                                                <span className="hidden lg:block text-gray-500 font-bold text-sm bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                                                    {pro.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                                            {pro.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl group/stat hover:bg-white/10 transition-colors">
                                                <Shield className="w-6 h-6 text-orange-500 mb-3 group-hover/stat:scale-110 transition-transform" />
                                                <h4 className="text-white font-bold text-base mb-1">Guaranteed Service</h4>
                                                <p className="text-gray-500 text-xs md:text-sm">Full insurance coverage for your home in {pro.location}</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl group/stat hover:bg-white/10 transition-colors">
                                                <Award className="w-6 h-6 text-blue-500 mb-3 group-hover/stat:scale-110 transition-transform" />
                                                <h4 className="text-white font-bold text-base mb-1">Top Performer</h4>
                                                <p className="text-gray-500 text-xs md:text-sm">Ranked in top 1% across Hyderabad network</p>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-2 md:pt-4">
                                            <button className="group/btn relative w-full overflow-hidden bg-white text-gray-900 font-black py-4 md:py-6 rounded-2xl md:rounded-3xl text-lg md:text-xl transition-all hover:shadow-2xl hover:shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-3">
                                                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">Book Expert in {pro.location}</span>
                                                <ArrowRight className="relative z-10 w-5 h-5 md:w-6 h-6 group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-8 md:absolute md:-bottom-12 md:left-1/2 md:-translate-x-1/2 flex flex-col md:flex-row items-center gap-6 md:gap-12 z-30">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-xl group"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                            </button>

                            <div className="flex gap-2.5">
                                {professionals.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 md:w-12 bg-orange-500' : 'w-1.5 md:w-2 bg-gray-700 hover:bg-gray-600'}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-xl group"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6 md:w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalsSlider;