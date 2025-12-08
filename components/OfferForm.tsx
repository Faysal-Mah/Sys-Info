import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, FileText, Send } from 'lucide-react';
import { Button } from './Button';
import { SERVICES } from '../constants';

interface OfferFormProps {
    initialService?: string;
    onBack: () => void;
}

export const OfferForm: React.FC<OfferFormProps> = ({ initialService, onBack }) => {
    const [serviceType, setServiceType] = useState(initialService || SERVICES[0].title);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Reset if prop changes
    useEffect(() => {
        if(initialService) setServiceType(initialService);
    }, [initialService]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 800);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Demande envoyée !</h2>
                    <p className="text-gray-600 mb-8">
                        Merci de votre intérêt. Notre équipe commerciale va analyser votre demande et vous recontactera sous 24h.
                    </p>
                    <Button onClick={onBack} variant="outline" className="w-full justify-center">
                        Retour à l'accueil
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-28">
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-red-700 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Retour au site
                </button>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-red-700 px-8 py-6">
                        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                            <FileText />
                            Demande d'offre personnalisée
                        </h1>
                        <p className="text-red-100 mt-2">
                            Remplissez ce formulaire pour recevoir une proposition adaptée à vos besoins. Gratuit et sans engagement.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Service Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">Service concerné</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {SERVICES.map((s) => (
                                    <div 
                                        key={s.id}
                                        onClick={() => setServiceType(s.title)}
                                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-all ${
                                            serviceType === s.title 
                                            ? 'border-red-600 bg-red-50 text-red-700' 
                                            : 'border-gray-200 hover:border-red-200'
                                        }`}
                                    >
                                        <span className="font-medium text-sm">{s.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Fields */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 animate-fadeIn">
                            <h3 className="font-semibold text-gray-900 mb-4">Détails spécifiques - {serviceType}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {serviceType === 'Bureautique' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Volume d'impression mensuel (est.)</label>
                                            <select className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500 bg-white">
                                                <option>Moins de 1'000</option>
                                                <option>1'000 - 5'000</option>
                                                <option>5'000 - 20'000</option>
                                                <option>Plus de 20'000</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Format requis</label>
                                            <div className="flex gap-4 mt-2">
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> A4</label>
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> A3</label>
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> Grand format</label>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {serviceType === 'Informatique' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Type de matériel</label>
                                            <select className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500 bg-white">
                                                <option>PC / Portable</option>
                                                <option>Serveur / Stockage</option>
                                                <option>Réseau / Wifi</option>
                                                <option>Sécurité / Firewall</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Nombre de postes concernés</label>
                                            <input type="number" min="1" className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500" />
                                        </div>
                                    </>
                                )}
                                {serviceType === 'Caisse Enregistreuse' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Type de commerce</label>
                                            <input type="text" className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500" placeholder="Ex: Boulangerie, Restaurant..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Options requises</label>
                                            <div className="flex flex-col gap-2 mt-1">
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> Balance connectée</label>
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> Douchette code-barre</label>
                                                <label className="flex items-center"><input type="checkbox" className="mr-2 text-red-600" /> Terminaux de paiement</label>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {serviceType === 'Audio-visuel' && (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Type de salle</label>
                                            <select className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500 bg-white">
                                                <option>Salle de conférence</option>
                                                <option>Salle de classe</option>
                                                <option>Affichage dynamique (Hall/Vitrine)</option>
                                                <option>Auditorium</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-1">Taille approximative de la pièce</label>
                                            <input type="text" className="w-full p-2.5 border rounded-md focus:ring-red-500 focus:border-red-500" placeholder="Ex: 50 m2" />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                                <input required type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input required type="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                                <input required type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message complémentaire</label>
                            <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"></textarea>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex justify-end">
                            <Button type="submit" className="w-full md:w-auto text-lg px-8">
                                <Send className="w-5 h-5" />
                                Envoyer ma demande
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};