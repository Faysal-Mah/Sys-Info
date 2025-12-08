import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServiceCarouselProps {
    onServiceClick: (id: string) => void;
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ onServiceClick }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    };

    const getVisibleServices = () => {
        const prevIndex = (activeIndex - 1 + SERVICES.length) % SERVICES.length;
        const nextIndex = (activeIndex + 1) % SERVICES.length;
        return [
            { ...SERVICES[prevIndex], position: 'left' },
            { ...SERVICES[activeIndex], position: 'center' },
            { ...SERVICES[nextIndex], position: 'right' }
        ];
    };

    const visibleItems = getVisibleServices();

    return (
        <section className="py-20 bg-white overflow-hidden" id="services-carousel">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Nos Domaines d'Expertise</h2>
                <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-6xl mx-auto h-[450px] flex items-center justify-center">
                {/* Controls */}
                <button 
                    onClick={handlePrev}
                    className="absolute left-4 z-30 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                
                <button 
                    onClick={handleNext}
                    className="absolute right-4 z-30 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Cards */}
                <div className="relative w-full h-full flex justify-center items-center">
                    {visibleItems.map((service, index) => {
                        const isCenter = service.position === 'center';
                        const isLeft = service.position === 'left';
                        
                        let transformClass = "";
                        let zIndex = 10;
                        let opacity = "opacity-100";
                        
                        if (isCenter) {
                            transformClass = "scale-100 translate-x-0";
                            zIndex = 20;
                        } else if (isLeft) {
                            transformClass = "scale-85 -translate-x-[60%]";
                            zIndex = 10;
                            opacity = "opacity-60 hover:opacity-80";
                        } else { // right
                            transformClass = "scale-85 translate-x-[60%]";
                            zIndex = 10;
                            opacity = "opacity-60 hover:opacity-80";
                        }

                        return (
                            <div 
                                key={`${service.id}-${index}`}
                                onClick={() => onServiceClick(service.id)}
                                className={`
                                    absolute w-[300px] md:w-[400px] h-[350px] md:h-[400px] 
                                    bg-white rounded-2xl shadow-xl transition-all duration-500 ease-in-out cursor-pointer group
                                    ${transformClass} ${zIndex} ${opacity}
                                    border border-gray-100 overflow-hidden flex flex-col
                                `}
                            >
                                <div className="h-1/2 w-full overflow-hidden relative bg-gray-100">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="h-1/2 p-6 flex flex-col justify-between bg-white">
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${isCenter ? 'text-red-700' : 'text-gray-800'}`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className={`flex items-center text-sm font-semibold mt-4 ${isCenter ? 'text-red-700' : 'text-gray-500'}`}>
                                        En savoir plus <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                                {isCenter && <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};