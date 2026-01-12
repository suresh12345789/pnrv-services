import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Contact Info */}
                    <div className="space-y-8 lg:pr-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                                Get In <span className="text-orange-500">Touch</span>
                            </h1>
                            <p className="text-lg text-slate-500 font-medium max-w-md">
                                Have a question about our services or need a custom quote? Our team is here to help you 24/7.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                                    <p className="font-bold text-slate-800">support@prnvservices.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Center</p>
                                    <p className="font-bold text-slate-800">+1 (234) 567-890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Office</p>
                                    <p className="font-bold text-slate-800">Hi-Tech City, Hyderabad, TS 500081</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-orange-500/5 border border-slate-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full" />

                        <form className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border border-slate-100 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white transition-all text-sm font-bold text-slate-800"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            className="w-full bg-slate-50 border border-slate-100 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white transition-all text-sm font-bold text-slate-800"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="tel"
                                            className="w-full bg-slate-50 border border-slate-100 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white transition-all text-sm font-bold text-slate-800"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Your Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />
                                    <textarea
                                        rows="4"
                                        className="w-full bg-slate-50 border border-slate-100 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white transition-all text-sm font-bold text-slate-800 resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-orange-500 transition-all transform active:scale-95 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em]"
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
