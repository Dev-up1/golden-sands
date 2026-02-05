import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import goldenSandsLogo from 'figma:asset/c809d97e42722cf65550cb3db56564c34e65b9ae.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الغرف', href: '#rooms' },
    { name: 'القاعات', href: '#halls' },
    { name: 'الحجز', href: '#booking' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const services = [
    'خدمة الغرف 24/7',
    'مسبح ونادي صحي',
    'قاعات مؤتمرات',
    'خدمة النقل',
    'مطعم فاخر',
    'خدمة الواي فاي'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'فيسبوك' },
    { icon: Twitter, href: '#', label: 'تويتر' },
    { icon: Instagram, href: '#', label: 'إنستغرام' },
    { icon: Linkedin, href: '#', label: 'لينكد إن' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary text-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
              <img 
                src={goldenSandsLogo} 
                alt="فندق الرمال الذهبية" 
                className="h-24 sm:h-28 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
              فندق الرمال الذهبية - وجهتك المثالية للفخامة والراحة في قلب عدن. 
              نوفر تجربة إقامة استثنائية مع أفضل الخدمات والضيافة العربية الأصيلة.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">تابعونا على</h4>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-right">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-accent">روابط سريعة</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-right">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-accent">خدماتنا</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">اتصل بنا</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">+967 2 345 678</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">البريد الإلكتروني</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">info@goldensands-aden.com</p>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-end gap-3 mb-3">
                <div>
                  <h4 className="font-bold text-sm sm:text-base">العنوان</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">عدن، كريتر، شارع أروى</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 فندق الرمال الذهبية. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">الشروط والأحكام</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">سياسة الإلغاء</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}