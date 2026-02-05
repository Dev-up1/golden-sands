import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { BookingSystem } from './components/BookingSystem';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rooms', 'halls', 'booking', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== currentSection) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>
        
        <div id="rooms">
          <Gallery type="rooms" />
        </div>
        
        <div id="halls">
          <Gallery type="halls" />
        </div>
        
        <div id="booking">
          <BookingSystem />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}