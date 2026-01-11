import React from 'react';
import {
    CheckCircle, Calendar, Clock, MapPin,
    ArrowRight, Home, Download, Share2, Star
} from 'lucide-react';

const BookingSuccess = ({ technician, bookingDetails, onBackToHome }) => {
    // Current date for simulation if not provided
    const date = bookingDetails?.date || "Oct 5, 2023";
    const time = bookingDetails?.time || "11:00 AM";

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 md:px-8 font-sans animate-fade-in">
            <div className="max-w-3xl mx-auto">

                {/* Success Animation & Header */}
                <div className="text-center space-y-6 mb-12">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto animate-bounce-slow">
                            <CheckCircle size={48} fill="currentColor" className="text-white" />
                            <CheckCircle size={48} className="absolute inset-0" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                            <Star size={12} className="text-white fill-current" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Booking Confirmed!</h1>
                        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Service ID: #PRNV-8829310</p>
                    </div>
                </div>

                {/* Main Receipt Card */}
                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-tr-full" />

                    <div className="p-8 md:p-12 space-y-10 relative z-10">

                        {/* 1. Technician Info */}
                        <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border-b border-slate-100">
                            <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl shrink-0">
                                <img
                                    src={technician?.image || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400"}
                                    alt={technician?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left space-y-2">
                                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">Your Professional</div>
                                <h3 className="text-2xl font-black text-slate-900">{technician?.name || "Sai Kiran Reddy"}</h3>
                                <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 font-bold text-sm">
                                    <span className="flex items-center gap-1.5"><Star size={14} className="text-orange-500 fill-orange-500" /> 4.9</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span>{technician?.category || "Electrician Services"}</span>
                                </div>
                            </div>
                            <button className="md:ml-auto w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all text-slate-400 hover:text-blue-600 border border-slate-100">
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* 2. Schedule & Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-slate-400 uppercase tracking-widest font-black text-[10px]">
                                        <Calendar size={14} className="text-blue-500" /> Date & Time
                                    </div>
                                    <p className="text-lg font-black text-slate-800">Thursday, {date}</p>
                                    <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
                                        <Clock size={14} /> At {time} (Today)
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-slate-400 uppercase tracking-widest font-black text-[10px]">
                                        <MapPin size={14} className="text-orange-500" /> Service Location
                                    </div>
                                    <p className="text-lg font-black text-slate-800 leading-tight">Plot 42, Madhapur, Hyderabad</p>
                                    <p className="text-sm font-bold text-slate-500 truncate">Telangana, 500081</p>
                                </div>
                            </div>

                            {/* Payment Summary Box */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6 shadow-xl shadow-slate-900/20">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Amount</span>
                                    <span className="text-xl font-black text-blue-400">₹{(technician?.rate * 1.18).toFixed(2)}</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-[10px] font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-xl w-fit">
                                        <CheckCircle size={12} /> Payment Verified
                                    </div>
                                    <p className="text-xs font-bold text-slate-400 leading-relaxed">Invoice has been sent to your registered email address.</p>
                                </div>
                                <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                                    <Download size={14} /> Download Invoice
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="bg-slate-50 p-8 border-t border-slate-100 flex flex-col md:flex-row gap-4">
                        <button
                            onClick={onBackToHome}
                            className="flex-1 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                        >
                            <Home size={18} /> Back to Homepage
                        </button>
                        <button className="flex-1 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 shadow-blue-600/20 group">
                            Manage Booking <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="mt-12 text-center space-y-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Next?</p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest">
                        <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 px-5 py-3 rounded-2xl">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">1</span>
                            Pro arrives at site
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 px-5 py-3 rounded-2xl">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">2</span>
                            Service completion
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 px-5 py-3 rounded-2xl">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">3</span>
                            Rate your experience
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default BookingSuccess;
