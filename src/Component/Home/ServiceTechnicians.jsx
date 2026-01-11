import React, { useState, useMemo } from 'react';
import { Star, Search, X,  Calendar, ShieldCheck,  Check } from 'lucide-react';
import { technicians } from '../../Data/technicians';

const ServiceTechnicians = ({ selectedCategory, onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState(1000);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [activeAvailability, setActiveAvailability] = useState('Today');

    // Filter Logic
    const filteredTechnicians = useMemo(() => {
        return technicians.filter(tech => {
            const matchesCategory = selectedCategory ? tech.category === selectedCategory : true;
            const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tech.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesPrice = tech.rate <= priceRange;
            const matchesRating = tech.rating >= ratingFilter;
            return matchesCategory && matchesSearch && matchesPrice && matchesRating;
        });
    }, [selectedCategory, searchTerm, priceRange, ratingFilter]);

    // Grouping Logic for "Show groups > 3 members"
    const largeGroups = useMemo(() => {
        const groups = technicians.reduce((acc, tech) => {
            if (!tech.team) return acc;
            if (!acc[tech.team]) acc[tech.team] = [];
            acc[tech.team].push(tech);
            return acc;
        }, {});

        return Object.entries(groups)
            .map(([name, members]) => ({ name, members, count: members.length }));
    }, []);

    return (
        <section className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 md:px-8 lg:px-12 animate-fade-in mt-16 pb-24">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header Navigation & Title */}
      

                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">

                    {/* 2. Sidebar Filters (Inspired by uploaded image) */}
                    <aside className="space-y-10 order-2 lg:order-1">
                        <div className="bg-slate-900/40 p-10 rounded-4xl border border-white/5 space-y-12 backdrop-blur-xl sticky top-28 shadow-2xl">

                            {/* Categories (Mini View) */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-orange-500 rounded-full" /> Categories
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
                                        {selectedCategory || 'All Services'}
                                    </div>
                                    <div className="text-xs font-bold text-slate-500 pl-4 cursor-pointer hover:text-orange-400 transition-colors" onClick={onBack}>Change Category</div>
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-orange-500 rounded-full" /> Price Range
                                </h3>
                                <div className="space-y-6 px-1">
                                    <div className="flex justify-between font-black text-xl text-white">
                                        <span>₹{priceRange}/hr</span>
                                        <span className="text-orange-500 opacity-50">₹5000/hr</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="30"
                                        max="1000"
                                        className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-orange-500"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    />
                                  
                                </div>
                            </div> 

                            {/* Ratings Filter */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-orange-500 rounded-full" /> Ratings
                                </h3>
                                <div className="space-y-3">
                                    {[4.5, 4.0].map((rate) => (
                                        <label key={rate} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all cursor-pointer group">
                                            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${ratingFilter === rate ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/50' : 'border-slate-700 bg-slate-800'}`}>
                                                {ratingFilter === rate && <Check size={14} className="text-white" />}
                                            </div>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={ratingFilter === rate}
                                                onChange={() => setRatingFilter(ratingFilter === rate ? 0 : rate)}
                                            />
                                            <div className="flex items-center gap-2">
                                                <Star className={`w-4 h-4 ${ratingFilter >= rate ? 'text-orange-500 fill-orange-500' : 'text-slate-600'}`} />
                                                <span className={`font-black text-sm uppercase ${ratingFilter === rate ? 'text-white' : 'text-slate-500'}`}>{rate} & Up</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Availability (As seen in your image) */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-orange-500 rounded-full" /> Availability
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {['Today', 'Tomorrow', 'This Weekend'].map(day => (
                                        <button
                                            key={day}
                                            onClick={() => setActiveAvailability(day)}
                                            className={`py-4 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${activeAvailability === day ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' : 'border-white/5 text-slate-500 hover:text-slate-300'}`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* 3. Main Content Area */}
                    <div className="order-1 lg:order-2 space-y-8">

                        {/* Elite High-Demand Groups Section */}
                        {largeGroups.length > 0 && !searchTerm && (
                            <div className="space-y-8 animate-slide-up">
                              
                            
                            </div>
                        )}

                        {/* Search Bar - Responsive */}
                        <div className="relative group max-w-2xl">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors" size={24} />
                            <input
                                type="text"
                                placeholder="Search by name, specialist or skill..."
                                className="w-full bg-slate-900 border border-white/10 rounded-3xl py-3 pl-16 pr-8 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all font-bold text-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Technicians Grid */}
                        {filteredTechnicians.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredTechnicians.map((tech, index) => (
                                    <div key={tech.id} className="group relative bg-slate-900/50 rounded-4xl border border-white/5 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_80px_rgba(0,0,0,0.4)] flex flex-col h-full animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>

                                        {/* Status & Price Header */}
                                        <div className="absolute top-6 left-6 z-20 flex flex-col gap-3">
                                            <div className={`px-4 py-2 rounded-full backdrop-blur-3xl border border-white/10 shadow-2xl flex items-center gap-2 ${tech.status === 'online' ? 'bg-green-500/20' : 'bg-slate-500/20'}`}>
                                                <div className={`w-2 h-2 rounded-full ${tech.status === 'online' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-slate-500'}`} />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white">{tech.status}</span>
                                            </div>
                                        </div>

                                        <div className="relative h-64 overflow-hidden pt-4">
                                            <img src={tech.image} alt={tech.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-900 to-transparent" />
                                            <div className="absolute bottom-6 right-6 z-20">
                                                <div className="bg-orange-500 text-white font-black px-6 py-3 rounded-2xl text-2xl shadow-2xl shadow-orange-500/20">
                                                    ${tech.rate}<span className="text-[10px] opacity-80 uppercase tracking-tighter">/hr</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-1 space-y-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">
                                                    <ShieldCheck size={14} /> Master Professional
                                                </div>
                                                <div className="space-y-1">
                                                    <h3 className="  font-bold text-white  tracking-tighter group-hover:text-orange-400 transition-colors text-xl">{tech.name}</h3>
                                                    <div className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
                                                        <Star size={12} className="text-orange-500 fill-orange-500" /> {tech.rating} <span className="opacity-30">|</span> {tech.reviews} Reviews
                                                    </div>
                                                </div>
                                            </div>

                                        

                                            <button className="w-full mt-auto relative overflow-hidden group/btn bg-white text-slate-950 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all hover:scale-[1.03] active:scale-95 shadow-2xl flex items-center justify-center gap-3">
                                                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                                <Calendar className="relative z-10 group-hover/btn:text-white transition-colors" size={18} />
                                                <span className="relative z-10 group-hover/btn:text-white transition-colors">Book Now</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-40 bg-slate-900/30 rounded-4xl border border-white/5 border-dashed space-y-10">
                                <div className="w-32 h-32 bg-orange-500/10 rounded-full flex items-center justify-center animate-pulse">
                                    <X size={48} className="text-orange-500" />
                                </div>
                                <div className="text-center space-y-4">
                                    <h3 className="text-4xl font-black uppercase tracking-tighter text-white">No Results Found</h3>
                                    <p className="text-slate-500 font-bold max-w-xs mx-auto">Try adjusting your filters to find your perfect expert.</p>
                                </div>
                                <button
                                    onClick={() => { setSearchTerm(''); setPriceRange(1000); setRatingFilter(0); }}
                                    className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-500 hover:text-white transition-all shadow-2xl"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceTechnicians;
