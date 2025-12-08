import React from 'react';
import { CheckCircle, Printer, Monitor, ShoppingCart, Projector, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from './Button';

interface ServicesDetailProps {
    onNavigateToOffer: (serviceId?: string) => void;
}

const IconMap: Record<string, React.ReactNode> = {
    'Printer': <Printer size={32} />,
    'Monitor': <Monitor size={32} />,
    'ShoppingCart': <ShoppingCart size={32} />,
    'Projector': <Projector size={32} />
};

export const ServicesDetail: React.FC<ServicesDetailProps> = ({ onNavigateToOffer }) => {
    return (
        <section id="services-list" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Services Détaillés</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Des solutions technologiques complètes pour moderniser votre entreprise et optimiser votre productivité.
                    </p>
                </div>

                <div className="space-y-24">
                    {SERVICES.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className={`absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-20 blur-lg transition duration-500 group-hover:opacity-40`}></div>
                                    <div className="relative rounded-2xl shadow-2xl w-full h-[400px] bg-white overflow-hidden flex items-center justify-center">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center text-red-700 shadow-xl z-10 border border-gray-100">
                                        {IconMap[service.iconName]}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                        {service.title}
                                        <span className="h-px flex-1 bg-red-200 ml-4"></span>
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="text-red-600 shrink-0 mt-1" size={18} />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                        <Button onClick={() => onNavigateToOffer(service.title)}>
                                            Demande d'offre {service.title}
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};