import React, { useState, useMemo } from 'react';
import { Star, Search, X, Calendar, ShieldCheck, Check } from 'lucide-react';
import { technicians } from '../../Data/technicians';

const ServiceTechnicians = ({ selectedCategory, onBack, onTechSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState(2000);
    const [ratingFilter, setRatingFilter] = useState(0);

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

    return (
        <section className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 md:px-8 lg:px-12 animate-fade-in mt-16 pb-24">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">

                    {/* Sidebar Filters */}
                    <aside className="space-y-10 order-2 lg:order-1">
                        <div className="bg-slate-900/60 p-8 rounded-[2.5rem] border border-white/5 space-y-10 backdrop-blur-2xl sticky top-28 shadow-2xl">

                            {/* Categories */}
                            <div className="space-y-5">
                                <h3 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3 text-slate-400">
                                    <span className="w-1 h-4 bg-orange-500 rounded-full" /> Categories
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 text-orange-400 font-bold text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        {selectedCategory || 'All Services'}
                                    </div>
                                    <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4 hover:text-orange-500 transition-colors" onClick={onBack}>
                                        Change Category
                                    </button>
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3 text-slate-400">
                                    <span className="w-1 h-4 bg-orange-500 rounded-full" /> Price Range
                                </h3>
                                <div className="space-y-6 px-1">
                                    <div className="flex justify-between font-black text-lg text-white">
                                        <span>₹{priceRange}</span>
                                        <span className="text-slate-600">₹5000</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="300"
                                        max="5000"
                                        step="50"
                                        className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-orange-500"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    />
                                </div>
                            </div>

                            {/* Ratings */}
                            <div className="space-y-5">
                                <h3 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3 text-slate-400">
                                    <span className="w-1 h-4 bg-orange-500 rounded-full" /> Ratings
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[4.5, 4.0].map((rate) => (
                                        <button
                                            key={rate}
                                            onClick={() => setRatingFilter(ratingFilter === rate ? 0 : rate)}
                                            className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 group ${ratingFilter === rate ? 'bg-orange-500 border-orange-500 shadow-xl shadow-orange-500/20' : 'bg-slate-800/50 border-white/5 hover:bg-slate-800'}`}
                                        >
                                            <Star className={`w-4 h-4 ${ratingFilter >= rate ? 'text-white fill-white' : 'text-slate-600'}`} />
                                            <span className={`font-black text-[10px] uppercase tracking-widest ${ratingFilter === rate ? 'text-white' : 'text-slate-500'}`}>{rate}+</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="order-1 lg:order-2 space-y-10">

                        {/* Search Bar */}
                        <div className="relative group max-w-2xl">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-orange-500" size={20} />
                            <input
                                type="text"
                                placeholder="Find your specialized technician..."
                                className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all font-bold text-base"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Technicians Grid */}
                        {filteredTechnicians.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredTechnicians.map((tech, index) => (
                                    <div
                                        key={tech.id}
                                        className="group relative bg-slate-900/40 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 flex flex-col animate-slide-up"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img src={tech.image} alt={tech.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                                            {/* Top Badges */}
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <div className={`px-3 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5 ${tech.status === 'online' ? 'bg-green-500/10' : 'bg-slate-500/10'}`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${tech.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-slate-500'}`} />
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{tech.status}</span>
                                                </div>
                                            </div>

                                            {/* Price Badge */}
                                            <div className="absolute bottom-4 right-4 text-right">
                                                <div className="bg-white text-slate-950 px-4 py-2 rounded-xl shadow-2xl">
                                                    <span className="text-xl font-black">₹{tech.rate}</span>
                                                    <span className="text-[8px] font-black uppercase tracking-tighter ml-1 opacity-60">/hr</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex flex-col flex-1 space-y-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] opacity-80">
                                                    <ShieldCheck size={12} /> {tech.category.split(' ')[0]} Expert
                                                </div>
                                                <h3 className="text-lg font-black text-white tracking-tight group-hover:text-orange-400 transition-colors uppercase">{tech.name}</h3>

                                                <div className="flex items-center justify-between pt-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <Star size={10} className="text-orange-500 fill-orange-500" />
                                                        <span className="text-[10px] font-black text-white">{tech.rating}</span>
                                                        <span className="text-[10px] font-bold text-slate-500 lowercase">({tech.reviews} reviews)</span>
                                                    </div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                        {tech.location.split(',')[0]}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                                                <div className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                                    {tech.experience}
                                                </div>
                                                {tech.verified && (
                                                    <div className="px-3 py-1 bg-blue-500/10 rounded-lg text-[9px] font-black text-blue-400 uppercase tracking-widest">
                                                        Verified
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => onTechSelect && onTechSelect(tech)}
                                                className="w-full mt-auto bg-slate-800 hover:bg-orange-500 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2"
                                            >
                                                <Calendar size={14} />
                                                View Expert Profile
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-40 bg-slate-900/20 rounded-[3rem] border border-white/5 border-dashed space-y-8">
                                <div className="w-24 h-24 bg-orange-500/5 rounded-full flex items-center justify-center">
                                    <X size={32} className="text-orange-500 opacity-50" />
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white">No Specialists Found</h3>
                                    <p className="text-slate-500 font-bold text-sm">Adjust your filters to see more results.</p>
                                </div>
                                <button
                                    onClick={() => { setSearchTerm(''); setPriceRange(2000); setRatingFilter(0); }}
                                    className="px-8 py-4 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-xl"
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
