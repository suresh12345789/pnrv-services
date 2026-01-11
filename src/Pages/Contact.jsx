import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
                <p className="text-xl text-gray-600 mb-12">We'd love to hear from you. Drop us a message!</p>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-50 border border-gray-100 text-left">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all transform active:scale-95 shadow-lg shadow-indigo-200">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
