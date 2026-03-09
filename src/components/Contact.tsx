import { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم إرسال رسالتكم بنجاح! سنرد عليكم في أقرب وقت');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+967 2 345 678', '+967 733 000 000'],
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@goldensands-aden.com', 'booking@goldensands-aden.com'],
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['عدن، كريتر، شارع أروى', 'برج الرمال الذهبية'],
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['24/7 خدمة على مدار الساعة', 'استقبال الضيوف في جميع الأوقات'],
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-4 text-sm sm:text-base">
            تواصل معنا
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            نحن هنا لخدمتكم
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            فريق خدمة العملاء لدينا متاح على مدار الساعة للإجابة على استفساراتكم ومساعدتكم
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 px-2">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  معلومات الاتصال
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 sm:gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 sm:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`p-2 sm:p-3 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300`}>
                          <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="p-0 overflow-hidden border-0 shadow-lg">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">موقعنا على الخريطة</h4>
                    <p className="text-gray-600">عدن، كريتر، شارع أروى</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 shadow-2xl bg-white">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  أرسل لنا رسالة
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  نرحب بأسئلتكم واقتراحاتكم، وسنرد عليكم في أقرب وقت ممكن
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">الاسم اكامل</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-gray-200 focus:border-primary rounded-xl h-12"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">رقم الهاتف</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-gray-200 focus:border-primary rounded-xl h-12"
                      placeholder="+967 7xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">البريد الإلكتروني</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-gray-200 focus:border-primary rounded-xl h-12"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">موضوع الرسالة</Label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="border-gray-200 focus:border-primary rounded-xl h-12"
                    placeholder="ما موضوع رسالتك؟"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">الرسالة</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-gray-200 focus:border-primary rounded-xl min-h-32 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white h-14 rounded-xl text-lg font-medium shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">هل تحتاج مساعدة فورية؟</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              تواصل معنا مباشرة عبر الهاتف للحصول على مساعدة فورية
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                <span className="hidden sm:inline">اتصل الآن: 967 2 345 678+</span>
                <span className="sm:hidden">967 2 345 678+</span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                دردشة مباشرة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}