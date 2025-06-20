import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Study in New Zealand",
      subtitle: "World-Class Education",
      description:
        "Experience exceptional education in one of the world's most beautiful countries with stunning landscapes and innovative learning environments.",
      ctaText: "Explore Programs",
      ctaLink: "/services",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Who we are ?",
      subtitle: "Top-Ranked Institutions",
      description:
        "Rivil International Education Consultants, established in 2004, is one of the most trusted names in the field of overseas education in Sri Lanka. We help thousands of students every year to pursue higher education overseas and we are motivated by our core values of knowledge experience and our ethics in the educational field.",
      ctaText: "View Universities",
      ctaLink: "/partners",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "What we do ?",
      subtitle: "Personalized Guidance",
      description:
        "With more than 21 years of experience in placing thousands of students in various institutions overseas, we understand the challenges faced by those aspiring to study overseas. Keeping in mind the needs of such students, we have designed our processes in a manner that every single task starting from admission to visa to making travel arrangements is smooth and hassle free. Our dedicated team is there to help you with every stage of the process.",
      ctaText: "Start Your Journey",
      ctaLink: "/contact",
    },
    // {
    //   id: 4,
    //   image:
    //     "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920",
    //   title: "Natural Learning Environment",
    //   subtitle: "Inspiring Landscapes",
    //   description:
    //     "Study surrounded by breathtaking natural beauty that inspires creativity, innovation, and personal growth in your academic journey.",
    //   ctaText: "Learn More",
    //   ctaLink: "/about",
    // },
    // {
    //   id: 5,
    //   image:
    //     "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1920",
    //   title: "Expert Consultation",
    //   subtitle: "Professional Support",
    //   description:
    //     "Our experienced team provides comprehensive guidance from application to graduation, ensuring your educational success every step of the way.",
    //   ctaText: "Get Consultation",
    //   ctaLink: "/contact",
    // },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* Maori-inspired decorative pattern overlay */}
            <div className="absolute inset-0 bg-maori-pattern opacity-20"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-secondary-400 text-lg font-medium tracking-wide uppercase">
                      {slides[currentSlide].subtitle}
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {slides[currentSlide].title}
                    </h1>
                  </div>

                  <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href={slides[currentSlide].ctaLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-secondary-900 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-all duration-200 shadow-lg"
                    >
                      {slides[currentSlide].ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                    >
                      Free Consultation
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default ImageCarousel;
