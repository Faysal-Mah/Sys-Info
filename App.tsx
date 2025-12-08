import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { ServiceCarousel } from './components/ServiceCarousel';
import { ServicesDetail } from './components/ServicesDetail';
import { AboutSection, PartnersSection, ContactSection } from './components/CommonSections';
import { OfferForm } from './components/OfferForm';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleNavigate = (targetView: ViewState, sectionId?: string) => {
    setView(targetView);
    if (targetView === 'HOME') {
        // Clear preselected service when going home
        setPreselectedService(undefined);
        if (sectionId) {
            // Need a slight delay if we are switching views to allow DOM to mount
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceId: string) => {
      // Find the service title from ID if needed, or just scroll to list
      const element = document.getElementById('services-list');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const handleOfferRequest = (serviceTitle?: string) => {
      setPreselectedService(serviceTitle);
      handleNavigate('OFFER');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {view === 'HOME' ? (
            <div className="animate-fadeIn">
                <Hero 
                    onNavigateToOffer={() => handleOfferRequest()} 
                    onNavigateToServices={() => handleNavigate('HOME', 'services-list')}
                />
                <ServiceCarousel onServiceClick={handleServiceClick} />
                <AboutSection />
                <ServicesDetail onNavigateToOffer={handleOfferRequest} />
                <PartnersSection />
                <ContactSection />
            </div>
        ) : (
            <div className="animate-fadeIn">
                <OfferForm 
                    initialService={preselectedService} 
                    onBack={() => handleNavigate('HOME')} 
                />
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;