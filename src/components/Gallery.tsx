import { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, Star, Bed, Users, Wifi, Car } from "lucide-react";

interface GalleryProps {
  type: 'rooms' | 'halls' | 'all';
}

export function Gallery({ type }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rooms' | 'halls'>('all');

  const roomImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1563418536438-e08af0d644ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzU3Nzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "جناح ملكي",
      description: "جناح فاخر بإطلالة بانورامية على المدينة",
      price: "850 ريال/ليلة",
      features: ['سرير كبير', 'واي فاي مجاني', 'إفطار مجاني'],
      rating: 4.9,
      category: 'rooms'
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1674043502516-19ba589d6cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlfGVufDF8fHx8MTc1NzgyNzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "جناح تنفيذي", 
      description: "مساحة واسعة مع منطقة معيشة منفصلة",
      price: "650 ريال/ليلة",
      features: ['منطقة معيشة', 'حمام رخامي', 'إطلالة خاصة'],
      rating: 4.8,
      category: 'rooms'
    }
  ];

  const hallImages = [
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1666177497950-d271b613e8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc1Nzg1NTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "قاعة المؤتمرات الكبرى",
      description: "قاعة مجهزة بأحدث التقنيات للمؤتمرات والعروض",
      capacity: "500 شخص",
      features: ['أجهزة عرض', 'نظام صوتي', 'إضاءة احترافية'],
      rating: 4.9,
      category: 'halls'
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1690812304112-df39679c5797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGhhbGx8ZW58MXx8fHwxNzU3ODU2ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "قاعة الاحتفالات الذهبية",
      description: "قاعة أنيقة مثالية للأفراح والمناسبات الخاصة",
      capacity: "300 شخص",
      features: ['ديكور فاخر', 'إضاءة ملونة', 'مرقص واسع'],
      rating: 4.8,
      category: 'halls'
    }
  ];

  const allImages = [...roomImages, ...hallImages];

  const getFilteredImages = () => {
    if (type === 'rooms') return roomImages;
    if (type === 'halls') return hallImages;
    if (selectedCategory === 'rooms') return roomImages;
    if (selectedCategory === 'halls') return hallImages;
    return allImages;
  };

  const getTitle = () => {
    if (type === 'rooms') return 'غرفنا الفاخرة';
    if (type === 'halls') return 'قاعاتنا المميزة';
    return 'معرض الصور';
  };

  const getDescription = () => {
    if (type === 'rooms') return 'اكتشف مجموعة من الغرف والأجنحة الفاخرة المصممة لراحتكم';
    if (type === 'halls') return 'قاعات متنوعة مجهزة بأحدث التقنيات لمناسباتكم الخاصة';
    return 'استكشف جميع مرافقنا الفندقية الفاخرة';
  };

  const filteredImages = getFilteredImages();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-4 text-sm sm:text-base">
            {type === 'rooms' ? 'الغرف' : type === 'halls' ? 'القاعات' : 'المعرض'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            {getTitle()}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {getDescription()}
          </p>
        </div>

        {type === 'all' && (
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border">
              {[
                { key: 'all', label: 'الكل' },
                { key: 'rooms', label: 'الغرف' },
                { key: 'halls', label: 'القاعات' }
              ].map((category) => (
                <Button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  variant={selectedCategory === category.key ? "default" : "ghost"}
                  className={`rounded-full mx-1 transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                    {image.rating}
                  </Badge>
                </div>
                <Button 
                  size="sm"
                  className="absolute bottom-4 left-4 bg-white/90 text-gray-800 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  عرض التفاصيل
                </Button>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{image.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {image.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-100">
                  {'price' in image ? (
                    <div className="text-center sm:text-left">
                      <div className="text-xl sm:text-2xl font-bold text-primary">{image.price}</div>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm sm:text-base">حتى {image.capacity}</span>
                    </div>
                  )}
                  
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto" asChild>
                    <a href="#booking">احجز الآن</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            عرض المزيد من الخيارات
          </Button>
        </div>
      </div>
    </section>
  );
}