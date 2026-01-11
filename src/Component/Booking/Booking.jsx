import React, { useState } from 'react';
import {
  Calendar, Clock, MapPin, ShieldCheck,
  ArrowRight, ChevronLeft, ChevronRight,
  Search, Info, CheckCircle, Shield, ThumbsUp, X
} from 'lucide-react';

const Booking = ({ technician, onBack, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const timeSlots = [
    "9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"
  ];

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const currentMonthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  if (!technician) {
    technician = {
      name: "Sai Kiran Reddy",
      category: "Electrician Services",
      rate: 450,
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=400",
      location: "Kondapur, Hyderabad"
    };
  }

  const serviceFee = technician.rate;
  const taxes = serviceFee * 0.18; // 18% GST for India
  const total = serviceFee + taxes;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-20 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header / Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest hover:translate-x-1 transition-transform mb-4"
            >
              <ChevronLeft size={16} /> Back to Profile
            </button>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Step 2 of 3</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scheduling & Location</span>
            </div>
            <div className="h-1 w-64 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-2/3 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">Book Your Technician</h1>
          <p className="text-slate-500 font-medium">Select your preferred time and tell us where to go.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">

          {/* Main Content Areas */}
          <div className="space-y-8">

            {/* 1. Date & Time Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <h2 className="text-xl font-black text-slate-900">1. Select Date & Time</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Calendar View */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><ChevronLeft size={18} /></button>
                    <span className="font-bold text-slate-900">October 2023</span>
                    <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><ChevronRight size={18} /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {days.map(d => (
                      <div key={d} className="h-8 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">{d}</div>
                    ))}
                    {/* Blank spaces for demo layout */}
                    <div /><div /><div />
                    {currentMonthDays.slice(0, 20).map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-10 w-full rounded-xl flex items-center justify-center text-sm font-bold transition-all
                                                    ${selectedDate === day
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                            : 'hover:bg-slate-50 text-slate-700'}`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Selection */}
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available Times</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all
                                                    ${selectedTime === time
                            ? 'bg-blue-50 border-blue-600 text-blue-600'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p className="flex items-center gap-2 text-[10px] font-bold text-slate-400 italic">
                    <Info size={14} className="text-blue-500" /> Service usually takes 1.5 - 2 hours
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Service Location Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <h2 className="text-xl font-black text-slate-900">2. Service Location</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Street Address</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Start typing your address..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-colors text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 group">
                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=17.4483,78.3915&zoom=14&size=800x400&maptype=roadmap&style=feature:all|element:labels|visibility:on&key=YOUR_API_KEY')] bg-cover opacity-80" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full border border-blue-500/50 animate-pulse" />
                    <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" size={32} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                    <CheckCircle size={16} className="text-green-500" />
                    <p className="text-[11px] font-bold text-slate-700 line-clamp-1">Confirmed: Plot 42, Madhapur, Hyderabad, TS 500081</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Summary Area */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Booking Summary</h2>

              {/* Pro Profile Card */}
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img src={technician.image} alt={technician.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{technician.name}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{technician.category}</p>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 rounded-full w-fit">
                    <CheckCircle size={10} className="text-green-500" />
                    <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Top Rated Pro</span>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date</span>
                  <span className="text-sm font-bold text-slate-900">Oct {selectedDate}, 2023</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Time</span>
                  <span className="text-sm font-bold text-slate-900">{selectedTime} - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Duration</span>
                  <span className="text-sm font-bold text-slate-900">Est. 2 Hours</span>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Service Fee</span>
                  <span>₹{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Taxes & Fees</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t-2 border-dashed border-slate-100">
                  <span className="text-lg font-black text-slate-900">Total</span>
                  <span className="text-xl font-black text-blue-600">₹{total.toFixed(2)}</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onConfirm && onConfirm({ date: selectedDate, time: selectedTime })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                >
                  Confirm Booking <ArrowRight size={18} />
                </button>

                {/* Trust Badge Section */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                    <Shield size={16} className="text-blue-500" /> Secure 256-bit SSL Payment
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                    <ThumbsUp size={16} className="text-blue-500" /> 100% Satisfaction Guarantee
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                    <Calendar size={16} className="text-blue-500" /> Free cancellation up to 24h
                  </div>
                </div>

                <p className="text-center pt-2">
                  <span className="text-xs font-bold text-slate-400">Need help? </span>
                  <button className="text-xs font-black text-blue-600 hover:underline">Chat with Support</button>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Simple Footer Reference */}
      <div className="border-t border-slate-200 mt-20 pt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        FixIt Home Services © 2023 • Privacy Policy • Terms of Service
      </div>
    </div>
  );
};

export default Booking;