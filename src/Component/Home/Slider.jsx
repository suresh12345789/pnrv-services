import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import local images from assets
import electricianImg from '../../assets/images/Home/Electrician_Services.png';
import plumbingImg from '../../assets/images/Home/Plumbing_Services.png';
import acRepairImg from '../../assets/images/Home/AC Repair_Installation.png';
import paintingImg from '../../assets/images/Home/House_Painting.png';
import cctvImg from '../../assets/images/Home/CCTV Installation.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const slides = [
        {
            id: 1,
            backgroundImage: electricianImg,
            h1: 'Book Trusted Electricians for Fast and Reliable Home Services',
            h2: 'Expert solutions for all your electrical needs, from minor repairs to full house rewiring.',
            h1Color: 'text-white',
            h2Color: 'text-gray-200',
            gradient: 'from-black/70 via-black/30 to-transparent'
        },
        {
            id: 2,
            backgroundImage: plumbingImg,
            h1: 'Professional Plumbing Services You Can Count On',
            h2: 'From leak repairs to new installations, our certified plumbers ensure your home runs smoothly.',
            h1Color: 'text-white',
            h2Color: 'text-blue-50',
            gradient: 'from-blue-900/70 via-blue-900/40 to-transparent'
        },
        {
            id: 3,
            backgroundImage: acRepairImg,
            h1: 'Beat the Heat with Expert AC Repair & Installation',
            h2: 'Fast, efficient cooling solutions to keep your home comfortable all year round.',
            h1Color: 'text-white',
            h2Color: 'text-gray-100',
            gradient: 'from-indigo-900/70 via-indigo-900/40 to-transparent'
        },
        {
            id: 4,
            backgroundImage: paintingImg,
            h1: 'Premium House Painting for a Fresh New Look',
            h2: 'Transform your living space with our professional painting services and quality finishes.',
            h1Color: 'text-white',
            h2Color: 'text-orange-50',
            gradient: 'from-orange-950/70 via-transparent to-transparent'
        },
        {
            id: 5,
            backgroundImage: cctvImg,
            h1: 'Smart CCTV Installation for Ultimate Home Security',
            h2: 'Protect what matters most with high-definition surveillance and expert setup.',
            h1Color: 'text-white',
            h2Color: 'text-gray-200',
            gradient: 'from-gray-900/80 via-transparent to-transparent'
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    return (
        <section className="relative w-full overflow-hidden bg-gray-900 group mt-20">
            {/* Main Slider Container */}
            <div
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] h-[500px] md:h-[600px] "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="relative min-w-full h-full flex items-center overflow-hidden"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-linear scale-110 group-hover:scale-100"
                            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-linear-to-r ${slide.gradient}`} />

                        {/* Content Container */}
                        <div className="relative container mx-auto px-6 md:px-12 lg:px-20 z-10 text-left">
                            <div className="max-w-4xl space-y-4 md:space-y-6">
                            
                                <h1 className={`${slide.h1Color} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight drop-shadow-2xl`}>
                                    {slide.h1}
                                </h1>
                                <p className={`${slide.h2Color} text-base md:text-xl lg:text-2xl font-medium max-w-2xl drop-shadow-lg opacity-95`}>
                                    {slide.h2}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4 md:pt-8">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-10 py-2 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-orange-500/30 active:scale-95 transform hover:-translate-y-1">
                                        Book Now
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 md:px-10 py-4 rounded-2xl text-lg font-bold transition-all active:scale-95">
                                        View All Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-30">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto bg-black/40 hover:bg-orange-500 backdrop-blur-lg text-white p-4 md:p-5 rounded-3xl transition-all duration-300 hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 border border-white/10"
                    aria-label="Previous slide"
                >
                    <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="pointer-events-auto bg-black/40 hover:bg-orange-500 backdrop-blur-lg text-white p-4 md:p-5 rounded-3xl transition-all duration-300 hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 border border-white/10"
                    aria-label="Next slide"
                >
                    <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 md:space-x-4 z-30 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`group relative h-1.5 md:h-2 rounded-full transition-all duration-500 overflow-hidden ${index === currentSlide ? 'w-10 md:w-16 bg-white' : 'w-2 md:w-3 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentSlide && (
                            <div className="absolute inset-0 bg-orange-500 animate-[progress_6s_linear]" />
                        )}
                    </button>
                ))}
            </div>

            <style jsx>{`
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
};

export default Slider;