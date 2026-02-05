import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import goldenSandsLogo from 'figma:asset/c809d97e42722cf65550cb3db56564c34e65b9ae.png';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ currentSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'rooms', label: 'الغرف' },
    { id: 'halls', label: 'القاعات' },
    { id: 'booking', label: 'حجز' },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20" dir="rtl">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={goldenSandsLogo} 
              alt="فندق الرمال الذهبية" 
              className="h-20 sm:h-24 lg:h-28 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 xl:px-4 rounded-full transition-all duration-300 font-medium text-sm xl:text-base ${
                  currentSection === item.id 
                    ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg' 
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden sm:block">
            <Button 
              onClick={() => handleNavigate('booking')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-4 py-2 sm:px-6 sm:py-3 lg:px-8 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <Button 
              onClick={() => handleNavigate('booking')}
              className="sm:hidden bg-gradient-to-r from-primary to-accent text-white rounded-full px-4 py-2 text-sm"
            >
              حجز
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80" dir="rtl">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center justify-center mb-8">
                    <img 
                      src={goldenSandsLogo} 
                      alt="فندق الرمال الذهبية" 
                      className="h-28 w-auto"
                    />
                  </div>
                  
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-right px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${
                        currentSection === item.id 
                          ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg' 
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-6">
                    <Button 
                      onClick={() => handleNavigate('booking')}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl py-4 text-lg shadow-lg"
                    >
                      احجز إقامتك الآن
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}