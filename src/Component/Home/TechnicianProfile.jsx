import React, { useState } from 'react';
import {
    Star, MapPin, CheckCircle, Share2, Heart, Award, Users,
    ShieldCheck, Clock, Calendar, MessageSquare, ChevronRight,
    ArrowLeft, Map as MapIcon, StarHalf, ThumbsUp, Shield, Zap, TrendingUp
} from 'lucide-react';

const TechnicianProfile = ({ technician, onBack, onBook }) => {
    const [activeTab, setActiveTab] = useState('Overview');

    const profileDetails = {
        bio: `With over ${technician?.experience || '10+'} of experience in the industry, I specialize in both residential and commercial ${technician?.category || 'service'} systems. I am committed to delivering excellence through precision and transparency in every project.`,
        specialties: [
            { id: 1, name: "Advanced Diagnostics", icon: <Shield className="w-5 h-5" /> },
            { id: 2, name: "Emergency Response", icon: <Zap className="w-5 h-5" /> },
            { id: 3, name: "Premium Installation", icon: <Award className="w-5 h-5" /> }
        ],
        stats: [
            { label: "Jobs Done", value: "842+", icon: <Users size={16} /> },
            { label: "Success Rate", value: "99%", icon: <TrendingUp size={16} /> },
            { label: "Experience", value: technician?.experience || "10+ Yrs", icon: <Clock size={16} /> }
        ]
    };

    if (!technician) return null;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 md:px-8 lg:px-12 animate-fade-in mt-16 pb-24">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header Actions */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all bg-white/5 px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Experts
                    </button>
                    <div className="flex gap-3">
                        <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-slate-400 hover:text-orange-500 transition-all">
                            <Heart size={20} />
                        </button>
                        <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-slate-400 hover:text-blue-500 transition-all">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Hero Card - 300px Balanced Split */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[300px] rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl overflow-hidden group">

                    {/* Left Side: Profile Identity */}
                    <div className="w-full lg:w-1/2 relative h-[350px] lg:h-full overflow-hidden">
                        <img
                            src={technician.image}
                            alt={technician.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-linear-to-r lg:from-slate-950 lg:via-slate-950/20 lg:to-transparent" />

                        <div className="absolute bottom-8 left-8 lg:left-12 space-y-3">
                            <div className="flex items-center gap-3">
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">{technician.name}</h1>
                                <CheckCircle size={28} className="text-blue-500 bg-white rounded-full border-2 border-white" />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20">
                                    Master {technician.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-orange-400">
                                    <Star size={18} fill="currentColor" />
                                    <span className="text-lg font-black">{technician.rating}</span>
                                    <span className="text-xs font-bold text-slate-500 uppercase">({technician.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        {technician.status === 'online' && (
                            <div className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Active Now</span>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Quick Stats & Call to Action */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {profileDetails.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center p-4 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="text-orange-500 mb-2">{stat.icon}</div>
                                    <div className="text-xl font-black text-white">{stat.value}</div>
                                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => onBook && onBook(technician)}
                                className="flex-1 bg-white text-slate-950 hover:bg-orange-500 hover:text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform active:scale-95 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3"
                            >
                                <Calendar size={18} /> Book Appointment
                            </button>
                            <button className="px-8 bg-white/5 hover:bg-white/10 border border-white/10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                                <MessageSquare size={18} /> Chat
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sub Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Detailed Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-xl">
                            <div className="flex gap-10 border-b border-white/5">
                                {['Overview', 'Specialties', 'Reviews'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-5 text-[10px] font-black uppercase tracking-[0.3em] relative transition-all ${activeTab === tab ? 'text-orange-500' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-orange-500 rounded-full" />}
                                    </button>
                                ))}
                            </div>

                            {activeTab === 'Overview' && (
                                <div className="space-y-8 animate-fade-in">
                                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                        {profileDetails.bio}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex gap-4 items-start p-6 bg-white/5 rounded-3xl border border-white/5">
                                            <ShieldCheck size={28} className="text-blue-500 shrink-0" />
                                            <div>
                                                <h4 className="text-white font-black text-sm uppercase mb-1">Service Guarantee</h4>
                                                <p className="text-xs text-slate-500 font-bold">30-day warranty on all completed repairs and installations.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start p-6 bg-white/5 rounded-3xl border border-white/5">
                                            <MapPin size={28} className="text-orange-500 shrink-0" />
                                            <div>
                                                <h4 className="text-white font-black text-sm uppercase mb-1">Local Reach</h4>
                                                <p className="text-xs text-slate-500 font-bold">Serving Madhapur, Gachibowli, and Jubilee Hills areas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Specialties' && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                                    {profileDetails.specialties.map(spec => (
                                        <div key={spec.id} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 text-center space-y-4 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all">
                                            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mx-auto">
                                                {spec.icon}
                                            </div>
                                            <h4 className="text-white font-black text-sm uppercase tracking-wider">{spec.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pricing & Quick Booking Detail */}
                    <div className="space-y-8">
                        <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-110 transition-transform" />

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Hourly Rate</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black tracking-tighter">₹{technician.rate}</span>
                                        <span className="text-sm font-black opacity-80">/hr</span>
                                    </div>
                                </div>
                                <div className="h-px bg-white/20" />
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                        <span className="opacity-80">Next Available</span>
                                        <span>Tomorrow</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                        <span className="opacity-80">Response Time</span>
                                        <span>&lt; 30 Mins</span>
                                    </div>
                                </div>
                                <button className="w-full bg-white text-orange-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95">
                                    Instant Message
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechnicianProfile;
