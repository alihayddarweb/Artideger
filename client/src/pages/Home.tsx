import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  DollarSign,
  Users,
  Zap,
  Search,
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const company = useMemo(
    () => ({
      name: "ARTI DEĞER",
      tagline: "VRF Klima Sistemleri",
      logoSrc: "/img/logo.png",
      phoneDisplay: "+90 545 423 1453",
      phoneHref: "tel:+905454231453",
      whatsappHref: "https://wa.me/905454231453",
      email: "info@artideger.com.tr",
      instagramUrl: "https://instagram.com/artidegerklimasistemleri",
      instagramDisplay: "artidegerklimasistemleri",
      address: "Cumhuriyet Cad. Fatih Mh. Müzellef Sk. No: 08 Beykoz / İSTANBUL",
      workingHours1: "Açılış / Kapanış: 08:30 - 18:30",
    }),
    []
  );

  const heroSlides = useMemo(
    () => [
      {
        backgroundImage:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/hero-3-office-cooling-RFong8xGTZXDUtkDsT8JoY.webp",
        productImage:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/project-vrf-system-cRP7hEJbrjChHzmVVNVCDX.webp",
        headline: "HER MEKÂNA UYUM!",
        subheadline: "HER MEVSİME KONFOR; VRF ÇÖZÜMLERİ",
        cta: "HEMEN ARA!",
      },
      {
        backgroundImage:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/hero-2-technician-service-FzVhu7vg8CSsTzNFzKmafg.webp",
        productImage:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/hero-1-modern-ac-unit-8UCFi7wmnD6ixWDoj9i5cK.webp",
        headline: "PROFESYONEL SERVİS",
        subheadline: "Deneyimli ekip, hızlı müdahale, garantili hizmet",
        cta: "SERVİS TALEP ET",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        icon: Zap,
        title: "Hızlı Servis",
        description: "7/24 çözüm odaklı yaklaşım ve hızlı geri dönüş.",
      },
      {
        icon: Users,
        title: "Tecrübeli Ekip",
        description: "Deneyimli kadro ile güvenilir keşif ve kurulum.",
      },
      {
        icon: DollarSign,
        title: "Sabit Fiyat Garantisi",
        description: "Sürpriz maliyet yok; şeffaf ve net fiyatlandırma.",
      },
      {
        icon: CheckCircle,
        title: "Garantili Hizmet",
        description: "Yaptığımız işin arkasındayız; garanti ve destek.",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "KLİMA SERVİSİ",
        description: "Garantili servis desteği ile hızlı ve güvenilir çözüm.",
      },
      {
        title: "KLİMA BAKIM & ONARIM",
        description: "Periyodik bakım ile verimlilik artışı ve hijyenik kullanım.",
      },
      {
        title: "KLİMA MONTAJI",
        description: "Ücretsiz keşif ile doğru kapasite ve doğru uygulama.",
      },
      {
        title: "KLİMA SATIŞI",
        description: "İhtiyaca uygun ürün seçimi ve kurulum desteği.",
      },
    ],
    []
  );

  const climaTypes = useMemo(
    () => [
      {
        title: "Tavana Gizlenmiş Kanallı",
        image:
          "/img/tavangizlen.jpg",
      },
      {
        title: "Duvar Tipi",
        image:
          "/img/duvartipi.jpg",
      },
      {
        title: "Salon Tipi",
        image:
          "/img/salontip.jpg",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        image: "/img/1.jpeg",
        title: "Dış Ünite Kurulumu",
        description: "Dış ünite montajı, vibrasyon takozu ve güvenli konumlandırma.",
      },
      {
        id: 2,
        image: "/img/2.jpeg",
        title: "Dış Ünite Koruma / Sabitleme",
        description: "Koruma kafesi, sağlam sabitleme ve servis erişimine uygun kurulum.",
      },
      {
        id: 3,
        image: "/img/3.jpeg",
        title: "Duvar Tipi İç Ünite Montajı",
        description: "İç ünite montajı, drenaj hattı bağlantısı ve test çalıştırması.",
      },
      {
        id: 4,
        image: "/img/4.jpeg",
        title: "VRF Bakır Boru Altyapısı",
        description: "Bakır boru çekimi, izolasyon, kelepçeleme ve hat düzeni.",
      },
      {
        id: 5,
        image: "/img/5.jpeg",
        title: "Filtre Bakım & Temizliği",
        description: "Filtre ve serpantin temizliği ile daha verimli ve hijyenik kullanım.",
      },
      {
        id: 6,
        image: "/img/6.jpeg",
        title: "Elektronik Kart Arıza Tespiti",
        description: "Kart kontrolleri, ölçümler ve arıza kaynağı tespiti.",
      },
      {
        id: 7,
        image: "/img/7.jpeg",
        title: "Toplu Proje Montajı",
        description: "Çoklu iç ünite projelerinde tedarik, montaj ve devreye alma.",
      },
      {
        id: 8,
        image: "/img/8.jpeg",
        title: "Kaset Tipi Montaj",
        description: "Tavana kaset iç ünite montajı, drenaj ve bağlantı işlemleri.",
      },
      {
        id: 9,
        image: "/img/9.jpeg",
        title: "Kompresör Değişimi",
        description: "Arızalı kompresör değişimi, montaj ve sistem testi.",
      },
      {
        id: 10,
        image: "/img/10.jpeg",
        title: "Gaz Dolumu / Vakum",
        description: "Vakumlama, kaçak kontrolü ve doğru gaz dolumu.",
      },
    ],
    []
  );

  const aboutHighlights = useMemo(
    () => [
      {
        value: "experience",
        title: "17 Yıllık Tecrübe & Deneyim",
        content:
          "Kurulum, bakım ve servis süreçlerinde yıllara dayanan deneyimle; doğru keşif, doğru kapasite ve doğru uygulama sunarız.",
      },
      {
        value: "team",
        title: "Tecrübeli Ekip",
        content:
          "Sahada tecrübeli ekip ile hızlı müdahale, düzenli bilgilendirme ve temiz işçilik prensibiyle çalışırız.",
      },
    ],
    []
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate newsletter subscription
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-foreground text-white">
        <div className="container flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-3">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white/90 transition">
              <Phone className="h-4 w-4" />
              <span>{company.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-white/70">|</span>
            <span className="hidden sm:inline text-white/90">{company.workingHours1}</span>
          </div>
          <div className="flex items-center gap-3 text-white/85">
            <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-[#071a2b] shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src={company.logoSrc}
              alt={`${company.name} - ${company.tagline}`}
              className="h-10 w-auto max-w-[260px] object-contain"
            />
          </div>

          <div className="hidden lg:flex gap-6 items-center text-sm">
            <a href="#anasayfa" className="text-white/85 hover:text-white transition">
              ANASAYFA
            </a>
            <a href="#kurumsal" className="text-white/85 hover:text-white transition">
              KURUMSAL
            </a>
            <a href="#markalar" className="text-white/85 hover:text-white transition">
              MARKALAR
            </a>
            <a href="#hizmetler" className="text-white/85 hover:text-white transition">
              HİZMETLER
            </a>
            <a href="#projeler" className="text-white/85 hover:text-white transition">
              PROJELER
            </a>
            <a href="#klima-tipleri" className="text-white/85 hover:text-white transition">
              KLİMA TİPLERİ
            </a>
            <a href="#iletisim" className="text-white/85 hover:text-white transition">
              İLETİŞİM
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/75">
              <Search className="h-4 w-4" />
              <span>Arama</span>
            </div>
            <a href={company.phoneHref} className="inline-flex items-center">
              <Button className="rounded-full bg-white text-[#071a2b] hover:bg-white/90">
                <Phone className="h-4 w-4" />
                HEMEN ARA!
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section id="anasayfa" className="relative overflow-hidden bg-[#071a2b]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.headline}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.backgroundImage} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2b]/95 via-[#071a2b]/65 to-transparent" />

        <div className="relative">
          <div className="container py-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 text-white">
                <div className="text-xs font-semibold tracking-widest text-white/70">GELİŞMİŞ İKLİMLENDİRME</div>
                <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Çözümleri</h1>
                <p className="mt-4 max-w-xl text-sm text-white/85 md:text-base">
                  {heroSlides[currentSlide]?.subheadline}
                </p>
                <a href={company.phoneHref} className="inline-flex">
                  <Button className="mt-7 rounded-sm bg-white px-5 text-[#071a2b] hover:bg-white/90">
                    Hemen Teklif Al
                  </Button>
                </a>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <img
                  src={heroSlides[currentSlide]?.productImage}
                  alt="Ürün görseli"
                  className="h-64 w-auto max-w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] md:h-80"
                />
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35 transition"
            aria-label="Önceki"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35 transition"
            aria-label="Sonraki"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex gap-4 px-6 py-8 text-white ${index !== 3 ? "lg:border-r lg:border-white/15" : ""} ${
                    index % 2 === 0 ? "md:border-r md:border-white/15" : ""
                  }`}
                >
                  <div className="mt-0.5 rounded-full bg-white/12 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{feature.title}</div>
                    <div className="mt-1 text-xs text-white/85">{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kurumsal" className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Card className="overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/hero-2-technician-service-FzVhu7vg8CSsTzNFzKmafg.webp"
                  alt="Ofis ve ekip"
                  className="h-64 w-full object-cover lg:h-full"
                />
              </Card>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-foreground">Hakkımızda</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                {company.name}, konut ve ticari projelerde VRF iklimlendirme çözümleri, keşif, kurulum ve servis süreçlerinde
                uçtan uca hizmet sunar. Amacımız; doğru mühendislik, temiz işçilik ve sürdürülebilir konfor üretmektir.
              </p>

              <div className="mt-6">
                <div className="mb-3 text-sm font-semibold text-foreground">Neden Biz?</div>
                <Card className="px-5">
                  <Accordion type="single" collapsible defaultValue={aboutHighlights[0]?.value}>
                    {aboutHighlights.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="text-foreground">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-base font-bold text-primary">LG, MITSUBISHI HEAVY & GREE Klima Sistemleri</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Proje keşfi, ürün seçimi ve uygulama süreçlerinde; ihtiyaç analizi ile en verimli çözümü hedefleriz. VRF, split
                ve ticari sistemlerde satış ve servis süreçlerini tek elden yönetiriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107712948/967KxpqyoUvwpoUAR7UTkM/hero-1-modern-ac-unit-8UCFi7wmnD6ixWDoj9i5cK.webp"
                  alt="Hizmet görseli"
                  className="h-80 w-full object-cover lg:h-[420px]"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title}>
                    <div className="text-sm font-bold text-foreground">{service.title}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{service.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="klima-tipleri" className="bg-white py-16">
        <div className="container">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-muted-foreground">KLİMA TİPLERİ</div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {climaTypes.map((type) => (
              <Card key={type.title} className="overflow-hidden rounded-sm">
                <div className="relative">
                  <img src={type.image} alt={type.title} className="h-44 w-full object-cover" />
                  <div className="absolute inset-x-0 top-0 bg-black/55 px-3 py-2 text-xs font-semibold text-white">
                    {type.title}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projeler" className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-muted-foreground">PROJELER</div>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Uygulamalarımız</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              VRF uygulamaları, bakır boru altyapısı, montaj ve servis süreçlerinden örnek çalışmalar.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden rounded-sm h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-sm font-bold text-foreground leading-snug">{project.title}</div>
                  <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{project.description}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-sm bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="text-2xl font-bold text-foreground">{company.name}</div>
                <div className="text-sm text-muted-foreground">{company.tagline}</div>
              </div>
              <a href={company.phoneHref}>
                <Button className="rounded-full bg-primary text-white hover:bg-accent">
                  <Phone className="h-4 w-4" />
                  Teklif / Keşif Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">İletişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Adres</h3>
              <p className="text-muted-foreground">{company.address}</p>
            </Card>
            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Telefon</h3>
              <p className="text-muted-foreground">{company.phoneDisplay}</p>
              <p className="text-sm text-muted-foreground mt-2">Pazartesi-Cuma: 08:30-18:30</p>
              <p className="text-sm text-muted-foreground">Cumartesi: 08:30-16:30</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">E-posta</h3>
              <p className="text-muted-foreground">{company.email}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Bize Ulaşın</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Form gönderimi başarılı! En kısa sürede sizinle iletişime geçeceğiz.');
              }}>
                <Input placeholder="Adınız" required />
                <Input placeholder="E-posta Adresiniz" type="email" required />
                <Input placeholder="Telefon Numarası" type="tel" required />
                <Textarea placeholder="Mesajınız" rows={4} required />
                <Button type="submit" className="w-full bg-primary hover:bg-accent text-white">Gönder</Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Konumumuz</h3>
              <div className="w-full h-80 bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Maps Entegrasyonu</p>
                  <p className="text-sm text-muted-foreground mt-2">Şişli, İstanbul</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Bültene Abone Olun</h3>
            <p className="mb-6">Klima bakımı ve teknik bilgiler için bültene abone olun</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-primary hover:bg-secondary"
              >
                {isSubmitting ? "Gönderiliyor..." : "Abone Ol"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="markalar" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Marka Ortaklıkları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="mb-5 flex h-16 items-center justify-center">
                <img
                  src="/img/LG_logo_(2014).png.svg"
                  alt="LG"
                  className="h-16 w-full object-contain"
                />
              </div>
              <p className="text-muted-foreground">LG Electronics - Dünya liderlerinden biri olan LG markasının yetkili satış ve servis hizmetleri sunuyoruz.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="mb-5 flex h-16 items-center justify-center">
                <img
                  src="/img/gree-logo-vector.png"
                  alt="GREE"
                  className="h-16 w-full object-contain"
                />
              </div>
              <p className="text-muted-foreground">Gree Electric - Yüksek kaliteli ve enerji verimli klima sistemleri için Gree'nin resmi temsilcisiyiz.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="mb-5 flex h-16 items-center justify-center">
                <img
                  src="/img/mitsubishi.png.png"
                  alt="Mitsubishi"
                  className="h-16 w-full object-contain"
                />
              </div>
              <p className="text-muted-foreground">Mitsubishi Heavy Industries - İleri teknoloji ve güvenilirlik ile Mitsubishi Heavy ürünlerini sunuyoruz.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#071a2b] py-10">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 rounded-sm bg-[#061424] px-6 py-8 text-white md:flex-row">
            <div className="flex items-center gap-4">
              <img
                src={company.logoSrc}
                alt={`${company.name} - ${company.tagline}`}
                className="h-14 w-auto max-w-[360px] object-contain"
              />
            </div>
            <a href={company.phoneHref}>
              <Button className="rounded-full bg-white text-[#061424] hover:bg-white/90">
                <Phone className="h-4 w-4" />
                Hemen Arayın
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{company.name}</h4>
              <p className="text-sm text-gray-300">
                VRF iklimlendirme çözümleri; keşif, kurulum, bakım ve servis süreçlerinde güvenilir hizmet.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sayfalar</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#anasayfa" className="hover:text-white transition">Anasayfa</a></li>
                <li><a href="#kurumsal" className="hover:text-white transition">Kurumsal</a></li>
                <li><a href="#hizmetler" className="hover:text-white transition">Hizmetler</a></li>
                <li><a href="#iletisim" className="hover:text-white transition">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href={company.phoneHref} className="hover:text-white transition">
                    {company.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-white transition">
                    {company.email}
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-white transition">
                    {company.address}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition flex items-center gap-1">
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 {company.name}. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 h-14 w-14 overflow-hidden rounded-2xl shadow-lg transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <img src="/img/whatsapp.png" alt="WhatsApp" className="h-full w-full object-cover" />
      </a>
    </div>
  );
}
