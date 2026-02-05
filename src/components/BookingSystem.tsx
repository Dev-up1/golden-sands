import { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Calendar, Users, Clock, CreditCard, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function BookingSystem() {
  const [selectedType, setSelectedType] = useState<'room' | 'hall'>('room');
  const [bookingData, setBookingData] = useState({
    type: 'room',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    hallType: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم إرسال طلب الحجز بنجاح! سنتواصل معكم قريباً');
  };

  const roomTypes = [
    { value: 'standard', label: 'غرفة عادية', price: '350 ريال/ليلة' },
    { value: 'deluxe', label: 'غرفة ديلوكس', price: '500 ريال/ليلة' },
    { value: 'executive', label: 'جناح تنفيذي', price: '650 ريال/ليلة' },
    { value: 'royal', label: 'جناح ملكي', price: '850 ريال/ليلة' }
  ];

  const hallTypes = [
    { value: 'conference', label: 'قاعة مؤتمرات', capacity: '500 شخص', price: '2000 ريال/يوم' },
    { value: 'wedding', label: 'قاعة أفراح', capacity: '300 شخص', price: '3500 ريال/يوم' },
    { value: 'meeting', label: 'قاعة اجتماعات', capacity: '50 شخص', price: '800 ريال/يوم' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-4 text-sm sm:text-base">
            الحجز
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            احجز إقامتك المثالية
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            اختر من بين مجموعة متنوعة من الغرف الفاخرة والقاعات المجهزة لمناسباتكم الخاصة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Booking Type Selector */}
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <div className="bg-white rounded-2xl p-1 sm:p-2 shadow-lg border w-full max-w-md">
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                <Button
                  onClick={() => setSelectedType('room')}
                  variant={selectedType === 'room' ? "default" : "ghost"}
                  className={`rounded-xl px-4 sm:px-8 py-2 sm:py-3 transition-all duration-300 text-sm sm:text-base ${
                    selectedType === 'room'
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                  حجز غرفة
                </Button>
                <Button
                  onClick={() => setSelectedType('hall')}
                  variant={selectedType === 'hall' ? "default" : "ghost"}
                  className={`rounded-xl px-4 sm:px-8 py-2 sm:py-3 transition-all duration-300 text-sm sm:text-base ${
                    selectedType === 'hall'
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                  حجز قاعة
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Date Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {selectedType === 'room' ? 'تاريخ الوصول' : 'تاريخ المناسبة'}
                  </Label>
                  <Input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    className="border-gray-200 focus:border-primary rounded-xl h-12"
                    required
                  />
                </div>
                
                {selectedType === 'room' && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      تاريخ المغادرة
                    </Label>
                    <Input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      className="border-gray-200 focus:border-primary rounded-xl h-12"
                      required
                    />
                  </div>
                )}

                {selectedType === 'hall' && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      مدة المناسبة
                    </Label>
                    <Select>
                      <SelectTrigger className="border-gray-200 focus:border-primary rounded-xl h-12">
                        <SelectValue placeholder="اختر المدة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="half-day">نصف يوم (4 ساعات)</SelectItem>
                        <SelectItem value="full-day">يوم كامل (8 ساعات)</SelectItem>
                        <SelectItem value="evening">مساءً (6 ساعات)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Room/Hall Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    {selectedType === 'room' ? 'عدد الضيوف' : 'عدد الحضور'}
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-primary rounded-xl h-12">
                      <SelectValue placeholder={selectedType === 'room' ? "اختر عدد الضيوف" : "اختر عدد الحضور"} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedType === 'room' ? (
                        <>
                          <SelectItem value="1">ضيف واحد</SelectItem>
                          <SelectItem value="2">ضيفان</SelectItem>
                          <SelectItem value="3">3 ضيوف</SelectItem>
                          <SelectItem value="4">4 ضيوف</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="50">أق�� من 50 شخص</SelectItem>
                          <SelectItem value="100">50-100 شخص</SelectItem>
                          <SelectItem value="300">100-300 شخص</SelectItem>
                          <SelectItem value="500">أكثر من 300 شخص</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">
                    {selectedType === 'room' ? 'نوع الغرفة' : 'نوع القاعة'}
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-primary rounded-xl h-12">
                      <SelectValue placeholder={selectedType === 'room' ? "اختر نوع الغرفة" : "اختر نوع القاعة"} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedType === 'room' ? (
                        roomTypes.map((room) => (
                          <SelectItem key={room.value} value={room.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{room.label}</span>
                              <span className="text-primary font-medium mr-4">{room.price}</span>
                            </div>
                          </SelectItem>
                        ))
                      ) : (
                        hallTypes.map((hall) => (
                          <SelectItem key={hall.value} value={hall.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{hall.label}</span>
                              <span className="text-primary font-medium mr-4">{hall.price}</span>
                            </div>
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  معلومات الاتصال
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">الاسم الكامل</Label>
                    <Input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="border-gray-200 focus:border-primary rounded-xl h-12"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">رقم الهاتف</Label>
                    <Input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="border-gray-200 focus:border-primary rounded-xl h-12"
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="text-gray-700 font-medium">البريد الإلكتروني</Label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="border-gray-200 focus:border-primary rounded-xl h-12 mt-2"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  ما يشمله الحجز
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {selectedType === 'room' ? (
                    <>
                      <Badge variant="secondary" className="bg-white text-gray-700">واي فاي مجاني</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">إفطار مجاني</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">خدمة الغرف</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">موقف سيارات</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">مسبح ونادي صحي</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">خدمة 24/7</Badge>
                    </>
                  ) : (
                    <>
                      <Badge variant="secondary" className="bg-white text-gray-700">أجهزة عرض</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">نظام صوتي</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">إضاءة احترافية</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">تكييف مركزي</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">خدمة ضيافة</Badge>
                      <Badge variant="secondary" className="bg-white text-gray-700">موقف سيارات</Badge>
                    </>
                  )}
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white h-14 rounded-xl text-lg font-medium shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                إرسال طلب الحجز
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}