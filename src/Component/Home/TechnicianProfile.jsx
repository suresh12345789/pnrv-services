import React, { useState } from 'react';
import {
    Star, MapPin, CheckCircle, Share2, Heart, Award, Users,
    ShieldCheck, Clock, Calendar, MessageSquare, ChevronRight,
    ArrowLeft, Map as MapIcon, StarHalf, ThumbsUp
} from 'lucide-react';

const TechnicianProfile = ({ technician, onBack, onBook }) => {
    const [activeTab, setActiveTab] = useState('Overview');

    // Sample data for the profile details (in a real app, this would come from an API or expanded data file)
    const profileDetails = {
        bio: `With over ${technician?.experience || '10+'} of experience in the industry, I specialize in both residential and commercial ${technician?.category || 'service'} systems. My commitment is to provide prompt, high-quality repairs with transparent pricing. I take pride in my work and ensure that every job site is left cleaner than I found it. Whether it's a minor leak or a full system installation, I've got you covered.`,
        specialties: [
            { id: 1, name: "System Diagnostics", desc: "Full inspection and error mapping.", icon: "ShieldCheck" },
            { id: 2, name: "Emergency Repairs", desc: "24/7 rapid response for critical issues.", icon: "Clock" },
            { id: 3, name: "New Installation", desc: "Professional setup of modern hardware.", icon: "Calendar" },
            { id: 4, name: "General Maintenance", desc: "Regular checkups to prevent failures.", icon: "CheckCircle" }
        ],
        reviews: [
            { id: 1, name: "Sarah Richards", date: "2 days ago", rating: 5, text: "Extremely professional! Arrived right on time for the issue and had it fixed within 30 minutes. Highly recommend!", avatar: "https://i.pravatar.cc/100?img=1" },
            { id: 2, name: "Michael Thompson", date: "1 week ago", rating: 5, text: "Excellent service for our property. Expertise and detailed explanation of the work done was evident immediately.", avatar: "https://i.pravatar.cc/100?img=2" }
        ],
        jobsDone: 842,
        serviceArea: ["Kondapur", "Madhapur", "Gachibowli", "Jubilee Hills", "Banjara Hills"]
    };

    if (!technician) return null;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 md:px-8 lg:px-12 animate-fade-in mt-16 pb-24">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Breadcrumbs & Back */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <span className="hover:text-orange-500 cursor-pointer transition-colors" onClick={onBack}>Search</span>
                        <ChevronRight size={12} />
                        <span>{technician.category}</span>
                        <ChevronRight size={12} />
                        <span className="text-orange-500">{technician.name}</span>
                    </div>
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/5 transition-all"
                    >
                        <ArrowLeft size={14} /> Back to List
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">

                    {/* LEFT COLUMN: Main Info */}
                    <div className="space-y-8">

                        {/* 1. Hero Profile Card */}
                        <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {/* Cover Image Placeholder with Gradient */}
                            <div className="h-48 bg-linear-to-r from-orange-600/20 to-blue-600/20 relative">
                                <div className="absolute inset-0 backdrop-blur-3xl opacity-50" />
                            </div>

                            <div className="px-8 pb-10 relative">
                                {/* Profile Picture Overlay */}
                                <div className="absolute -top-16 left-8 group">
                                    <div className="w-10 h-10 rounded-3xl border-8 border-slate-900 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform">
                                        <img src={technician.image} alt={technician.name} className="w-full h-full object-cover" />
                                    </div>
                                    {technician.status === 'online' && (
                                        <div className="absolute bottom-2 -right-1 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full shadow-lg pulse-green" />
                                    )}
                                </div>

                                {/* Info & Actions */}
                                <div className="flex flex-col md:flex-row justify-between items-start pt-20 gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h1 className="text-4xl font-black text-white uppercase tracking-tighter">{technician.name}</h1>
                                                <CheckCircle size={24} className="text-blue-500 fill-blue-500/20" />
                                            </div>
                                            <p className="text-xl font-bold text-orange-500 uppercase tracking-widest">{technician.category} Specialist</p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-400">
                                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 text-xs uppercase tracking-widest">
                                                <MapPin size={14} className="text-orange-500" /> Greater Hyderabad Area
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 text-xs uppercase tracking-widest">
                                                <ShieldCheck size={14} className="text-blue-500" /> Licensed
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 text-xs uppercase tracking-widest">
                                                <Award size={14} className="text-yellow-500" /> Top Rated 2024
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all">
                                            <Share2 size={20} />
                                        </button>
                                        <button className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all text-orange-500">
                                            <Heart size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/5">
                                    <div className="text-center space-y-1 group">
                                        <div className="text-3xl font-black text-white group-hover:text-orange-500 transition-colors">{profileDetails.jobsDone}</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Jobs Done</div>
                                    </div>
                                    <div className="text-center space-y-1 border-x border-white/5 group">
                                        <div className="text-3xl font-black text-white group-hover:text-orange-500 transition-colors">{technician.rating}/5</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rating</div>
                                    </div>
                                    <div className="text-center space-y-1 group">
                                        <div className="text-3xl font-black text-white group-hover:text-orange-500 transition-colors">{technician.experience}</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Exp. Level</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Content Tabs */}
                        <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 space-y-10">
                            <div className="flex gap-8 border-b border-white/5">
                                {['Overview', 'Services', 'Reviews', 'Photos'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-sm font-black uppercase tracking-[0.2em] relative transition-all ${activeTab === tab ? 'text-orange-500' : 'text-slate-500 hover:text-slate-300'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full" />}
                                    </button>
                                ))}
                            </div>

                            {activeTab === 'Overview' && (
                                <div className="space-y-12 animate-fade-in">
                                    {/* About Me */}
                                    <div className="space-y-5">
                                        <h3 className="text-2xl font-black uppercase tracking-tighter">About Me</h3>
                                        <p className="text-slate-400 leading-relaxed font-medium text-lg">
                                            {profileDetails.bio}
                                        </p>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar */}
                    <aside className="space-y-8">

                        {/* Booking Card */}
                        <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-2xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full group-hover:bg-orange-500/20 transition-colors" />

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Starts From</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black text-white tracking-tighter">₹{technician.rate}</span>
                                        <span className="text-sm font-black text-slate-500">/hr</span>
                                    </div>
                                </div>

                                {technician.status === 'online' && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-green-500/20">
                                        <CheckCircle size={14} /> Available Now
                                    </div>
                                )}
                            </div>

                            <div className="space-y-6 pt-10 border-t border-white/5 relative z-10">
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-2xl text-orange-500">
                                        <Calendar size={24} />
                                    </div>
                                    <div>Total
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Next available</div>
                                        <div className="text-sm font-black text-white">Tomorrow, 9:00 AM</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-2xl text-blue-500">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Service Guarantee</div>
                                        <div className="text-sm font-black text-white">30-Day Fix Warranty</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 relative z-10">
                                <button
                                    onClick={() => onBook && onBook(technician)}
                                    className="w-full relative overflow-hidden group/btn bg-orange-500 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3"
                                >
                                    <Calendar size={18} className="relative z-10" />
                                    <span className="relative z-10">Book Appointment</span>
                                </button>
                                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3">
                                    <MessageSquare size={18} />
                                    <span>Message {technician.name.split(' ')[0]}</span>
                                </button>
                                <p className="text-[10px] text-center text-slate-600 font-black uppercase tracking-widest">No payment required until job completion.</p>
                            </div>
                        </div>

                        {/* Service Area Card */}


                    </aside>
                </div>
            </div>
        </div>
    );
};

export default TechnicianProfile;
