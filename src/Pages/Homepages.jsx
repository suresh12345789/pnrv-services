import React, { useState } from 'react'
import Support from '../Component/Home/Support'
import Slider from '../Component/Home/Slider'
import Popular from '../Component/Home/popular'
import ProfessionalsSlider from '../Component/Home/ProfessionalsSlider'
import ServiceTechnicians from '../Component/Home/ServiceTechnicians'
import TechnicianProfile from '../Component/Home/TechnicianProfile'
import Booking from '../Component/Booking/Booking'
import BookingSuccess from '../Component/Booking/BookingSuccess'

const Homepages = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedTechnician, setSelectedTechnician] = useState(null);
    const [isBooking, setIsBooking] = useState(false);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [bookingInfo, setBookingInfo] = useState(null);

    // Function to handle service selection from Popular component
    const handleServiceSelect = (serviceName) => {
        setSelectedService(serviceName);
        setSelectedTechnician(null);
        setIsBooking(false);
        setBookingConfirmed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to handle technician selection from ServiceTechnicians component
    const handleTechSelect = (tech) => {
        setSelectedTechnician(tech);
        setIsBooking(false);
        setBookingConfirmed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to go back to main homepage from the technician list
    const handleBackToHome = () => {
        setSelectedService(null);
        setSelectedTechnician(null);
        setIsBooking(false);
        setBookingConfirmed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to go back to the technician list from a profile
    const handleBackToTechs = () => {
        setSelectedTechnician(null);
        setIsBooking(false);
        setBookingConfirmed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleStartBooking = (tech) => {
        setSelectedTechnician(tech);
        setIsBooking(true);
        setBookingConfirmed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleConfirmBooking = (details) => {
        setBookingInfo(details);
        setBookingConfirmed(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="overflow-x-hidden">
            {bookingConfirmed ? (
                <BookingSuccess
                    technician={selectedTechnician}
                    bookingDetails={bookingInfo}
                    onBackToHome={handleBackToHome}
                />
            ) : isBooking && selectedTechnician ? (
                <Booking
                    technician={selectedTechnician}
                    onBack={() => setIsBooking(false)}
                    onConfirm={handleConfirmBooking}
                />
            ) : selectedTechnician ? (
                <TechnicianProfile
                    technician={selectedTechnician}
                    onBack={handleBackToTechs}
                    onBook={handleStartBooking}
                />
            ) : selectedService ? (
                <ServiceTechnicians
                    selectedCategory={selectedService}
                    onBack={handleBackToHome}
                    onTechSelect={handleTechSelect}
                />
            ) : (
                <div className="animate-fade-in">
                    <Slider />
                    <Support />
                    <Popular onServiceSelect={handleServiceSelect} />
                    <ProfessionalsSlider />
                </div>
            )}
        </div>
    )
}

export default Homepages
