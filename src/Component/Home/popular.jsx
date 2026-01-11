import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

// Import service images
import electricianImg from '../../assets/images/Services/Electrician_Services.png';
import plumbingImg from '../../assets/images/Services/Plumbing_Services.png';
import acRepairImg from '../../assets/images/Services/AC Repair_Installation.png';
import computerRepairImg from '../../assets/images/Services/Computer_Laptop_Repair.png';
import applianceRepairImg from '../../assets/images/Services/Home_Appliance_Repair.png';
import cleaningImg from '../../assets/images/Services/Home_Cleaning_Services.png';
import paintingImg from '../../assets/images/Services/House_Painting.png';
import cctvImg from '../../assets/images/Services/CCTV_Installation.png';
import gasStoveImg from '../../assets/images/Services/Gas_Stove_Repair.png';
import bathroomCleaningImg from '../../assets/images/Services/Bathroom_Kitchen _Cleaning.png';

const services = [
    {
        id: 1,
        name: "Electrician Services",
        image: electricianImg
    },
    {
        id: 2,
        name: "Plumbing Services",
        image: plumbingImg
    },
    {
        id: 3,
        name: "AC Repair & Installation",
        image: acRepairImg
    },
    {
        id: 4,
        name: "Computer & Laptop Repair",
        image: computerRepairImg
    },
    {
        id: 5,
        name: "Home Appliance Repair",
        image: applianceRepairImg
    },
    {
        id: 6,
        name: "Home Cleaning Services",
        image: cleaningImg
    },
    {
        id: 7,
        name: "House Painting",
        image: paintingImg
    },
    {
        id: 8,
        name: "CCTV Installation",
        image: cctvImg
    },
    {
        id: 9,
        name: "Gas Stove Repair",
        image: gasStoveImg
    },
    {
        id: 10,
        name: "Bathroom & Kitchen Cleaning",
        image: bathroomCleaningImg
    },
];

const Popular = ({ onServiceSelect }) => {
    return (
        <section
            id="popular-services"
            className="relative  overflow-hidden pb-20"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1581578731522-7b7547961340?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >

            <div className="absolute inset-0 bg-gray-950/95 z-0" />

            <div className="relative z-10 container mx-auto px-5 md:px-10 w-full max-w-8xl">

                <div className="text-center mb-20 space-y-6 animate-fade-in">

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Popular <span className="text-orange-500">Services</span>
                    </h1>
                    <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full" />

                </div>


                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            onClick={() => onServiceSelect && onServiceSelect(service.name)}
                            className={`group relative h-[240px] md:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-orange-500/20 shadow-black animate-slide-up bg-gray-900 border border-white/5 cursor-pointer`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end transform transition-transform duration-500">
                                <div className="space-y-2 md:space-y-4 translate-y-8 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-lg md:text-2xl font-black text-white leading-tight drop-shadow-lg group-hover:text-orange-400 transition-colors">
                                        {service.name}
                                    </h3>

                                    <div className="h-0.5 w-8 md:w-12 bg-orange-500 group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100" />

                                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center space-x-3 text-white font-bold text-[10px] md:text-sm tracking-widest uppercase group/btn">
                                        <span className="whitespace-nowrap bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transform active:scale-95">Book Now</span>
                                        <FaArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 group-hover/btn:translate-x-2" />
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-linear-to-bl from-orange-500/20 to-transparent rounded-bl-[2.5rem] md:rounded-bl-[4rem] transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Popular;