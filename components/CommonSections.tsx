import React from 'react';
import { Users, Truck, Wrench, RefreshCw, Send, Mail, Phone, MapPin } from 'lucide-react';
import { PARTNERS, COMPANY_INFO } from '../constants';
import { Button } from './Button';

// --- ABOUT SECTION ---
export const AboutSection: React.FC = () => {
    const values = [
        { icon: <Users size={28} />, title: "Conseil Personnalisé", text: "Une approche humaine pour comprendre vos besoins réels." },
        { icon: <Truck size={28} />, title: "Livraison Rapide", text: "Un stock important pour une réactivité maximale." },
        { icon: <Wrench size={28} />, title: "SAV Flexible", text: "Intervention sur site ou en atelier selon l'urgence." },
        { icon: <RefreshCw size={28} />, title: "Appareils de Remplacement", text: "Continuité de service assurée en cas de panne." }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Qui sommes-nous ?</h2>
                        <div className="w-20 h-1.5 bg-red-700 rounded-full mb-8"></div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Fondée il y a 29 ans, Sys-Info s'est imposée comme le partenaire privilégié des entreprises du canton de Neuchâtel.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Avec nos deux succursales à <span className="font-semibold text-red-700">La Chaux-de-Fonds</span> et <span className="font-semibold text-red-700">Marin-Epagnier</span>, nous garantissons une proximité inégalée.
                        </p>
                    </div>
                    
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-red-100 text-red-700 rounded-lg flex items-center justify-center mb-4">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{val.title}</h3>
                                <p className="text-gray-600">{val.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- PARTNERS SECTION ---
export const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Nos Partenaires de Confiance</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                    {PARTNERS.map((partner, idx) => (
                        <div key={idx} className="group flex justify-center">
                             {/* Since we don't have real SVG logos, we style text to look like logos */}
                            <span className="text-xl md:text-2xl font-bold text-gray-500 group-hover:text-white transition-colors cursor-default select-none uppercase tracking-wider font-mono">
                                {partner.logoText}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CONTACT SECTION (HOMEPAGE) ---
export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-20 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Restons en contact</h2>
                        <p className="text-gray-600 mb-10 text-lg">
                            Une question sur nos services ? Besoin d'un dépannage urgent ? 
                            Nos équipes sont à votre disposition.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Nos Agences</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.address_cdf}</p>
                                    <p className="text-gray-600">{COMPANY_INFO.address_marin}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Téléphone</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Votre nom" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="votre@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Votre message..."></textarea>
                            </div>
                            <Button className="w-full">
                                <Send className="w-4 h-4" />
                                Envoyer le message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};