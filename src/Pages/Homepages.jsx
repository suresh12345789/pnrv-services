import React, { useState } from 'react'
import Support from '../Component/Home/Support'
import Slider from '../Component/Home/Slider'
import Popular from '../Component/Home/popular'
import ProfessionalsSlider from '../Component/Home/ProfessionalsSlider'
import ServiceTechnicians from '../Component/Home/ServiceTechnicians'

const Homepages = () => {
    const [selectedService, setSelectedService] = useState(null);

    // Function to handle service selection from Popular component
    const handleServiceSelect = (serviceName) => {
        setSelectedService(serviceName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to go back to main homepage
    const handleBackToHome = () => {
        setSelectedService(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="overflow-x-hidden">
            {selectedService ? (
                <ServiceTechnicians
                    selectedCategory={selectedService}
                    onBack={handleBackToHome}
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
