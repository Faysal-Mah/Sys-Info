import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onNavigateToOffer: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToOffer, onNavigateToServices }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-gray-50">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-1/4 right-[10%] w-20 h-20 border-4 border-red-200 rounded-xl rotate-12 hidden lg:block" />
        <div className="absolute bottom-1/4 left-[5%] w-12 h-12 bg-red-600/10 rounded-full hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-700 font-medium rounded-full text-sm border border-red-100 mb-2">
            Depuis 1995 à vos côtés
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
            Expertise & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            29 ans d'expertise à votre service pour vos besoins en bureautique, informatique, encaissement et audio-visuel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={onNavigateToServices} variant="outline">
              Découvrir nos services
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button onClick={onNavigateToOffer}>
              Demande d'offre
              <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:block relative">
             {/* Abstract tech composition */}
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                    src="https://picsum.photos/id/1/800/600" 
                    alt="Workspace Sys-Info" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Solution Clé en Main</p>
                    <p className="text-sm opacity-90">Installation & Maintenance</p>
                </div>
             </div>
             {/* Decorative element behind */}
             <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-red-600 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};