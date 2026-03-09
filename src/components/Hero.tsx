import { Button } from "./ui/button";
import { Star, Award, Users, MapPin } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc1Nzg1NjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="فندق الرمال الذهبية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24 max-w-6xl mx-auto" dir="rtl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">فندق خمس نجوم</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-white font-bold leading-tight">
            تجربة فندقية
            <span className="block text-transparent bg-gradient-to-r from-accent to-yellow-300 bg-clip-text">
              استثنائية
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            اكتشف الفخامة والراحة في قلب عدن مع ضيافة عربية أصيلة وخدمة متميزة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => onNavigate('booking')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              احجز إقامتك الآن
            </Button>
            <Button 
              onClick={() => onNavigate('rooms')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-lg backdrop-blur-sm bg-white/10 transition-all duration-300"
            >
              استكشف الغرف
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Award className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-gray-300 text-sm">سنوات من التميز</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-gray-300 text-sm">ضيف راضٍ</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">120</div>
            <div className="text-gray-300 text-sm">غرفة وجناح</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Star className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">4.9</div>
            <div className="text-gray-300 text-sm">تقييم العملاء</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}