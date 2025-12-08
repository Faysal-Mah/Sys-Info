import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface LayoutProps {
    children: React.ReactNode;
    onNavigate: (view: 'HOME' | 'OFFER', sectionId?: string) => void;
}

export const Header: React.FC<{ onNavigate: (view: 'HOME' | 'OFFER', sectionId?: string) => void }> = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (id: string) => {
        onNavigate('HOME', id);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => onNavigate('HOME')}
                >
                    <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                        Sys-<span className="text-red-700">Info</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Accueil', 'Services', 'À propos', 'Partenaires'].map((item) => {
                         const id = item === 'Accueil' ? 'home' : 
                                    item === 'Services' ? 'services-list' :
                                    item === 'À propos' ? 'about' : 'partners';
                        return (
                            <button 
                                key={item}
                                onClick={() => handleNav(id)}
                                className="text-gray-600 hover:text-red-700 font-medium transition-colors"
                            >
                                {item}
                            </button>
                        );
                    })}
                    <button 
                        onClick={() => handleNav('contact')}
                         className="text-gray-600 hover:text-red-700 font-medium transition-colors"
                    >
                        Contact
                    </button>
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <button 
                        onClick={() => onNavigate('OFFER')}
                        className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-lg shadow-red-700/20 flex items-center gap-2"
                    >
                        <FileText size={18} />
                        Demande d'offre
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4 md:hidden">
                     {['Accueil', 'Services', 'À propos', 'Partenaires', 'Contact'].map((item) => {
                         const id = item === 'Accueil' ? 'home' : 
                                    item === 'Services' ? 'services-list' :
                                    item === 'À propos' ? 'about' : 
                                    item === 'Partenaires' ? 'partners' : 'contact';
                        return (
                            <button 
                                key={item}
                                onClick={() => handleNav(id)}
                                className="text-left text-lg font-medium text-gray-800 border-b border-gray-50 pb-2"
                            >
                                {item}
                            </button>
                        );
                    })}
                    <button 
                        onClick={() => {
                            onNavigate('OFFER');
                            setIsMenuOpen(false);
                        }}
                        className="mt-4 w-full bg-red-700 text-white py-3 rounded-md font-medium"
                    >
                        Demande d'offre
                    </button>
                </div>
            )}
        </header>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center text-white font-bold">S</div>
                        <span className="text-xl font-bold">Sys-Info</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Partenaire de confiance depuis 29 ans pour les entreprises de l'Arc jurassien. Excellence, réactivité et proximité.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"><Linkedin size={16} /></a>
                        <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"><Instagram size={16} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-red-700 pl-3">Navigation</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-red-500 transition-colors">Accueil</a></li>
                        <li><a href="#services-list" className="hover:text-red-500 transition-colors">Nos Services</a></li>
                        <li><a href="#about" className="hover:text-red-500 transition-colors">Qui sommes-nous</a></li>
                        <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-red-700 pl-3">Contact</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex gap-3">
                            <MapPin className="text-red-600 shrink-0" size={18} />
                            <span>
                                {COMPANY_INFO.address_cdf}<br/>
                                {COMPANY_INFO.address_marin}
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="text-red-600 shrink-0" size={18} />
                            <span>{COMPANY_INFO.phone}</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="text-red-600 shrink-0" size={18} />
                            <span>{COMPANY_INFO.email}</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-red-700 pl-3">Horaires</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex justify-between"><span>Lundi - Jeudi</span> <span>08h00 - 12h00</span></li>
                        <li className="flex justify-between pl-20"><span>13h30 - 17h30</span></li>
                        <li className="flex justify-between mt-2"><span>Vendredi</span> <span>08h00 - 12h00</span></li>
                        <li className="flex justify-between pl-20"><span>13h30 - 17h00</span></li>
                        <li className="flex justify-between mt-2 text-red-500"><span>Samedi - Dimanche</span> <span>Fermé</span></li>
                    </ul>
                </div>
            </div>
            
            <div className="container mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Sys-Info. Tous droits réservés. Design par Senior Engineer.
            </div>
        </footer>
    );
};