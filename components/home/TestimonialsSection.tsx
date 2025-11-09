'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechStart',
      content: 'Ino-Service a transformé notre service client. Leur chatbot IA a réduit nos temps de réponse de 80% tout en améliorant la satisfaction client.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Jean Martin',
      role: 'Directeur, HealthCare+',
      content: 'L\'automatisation mise en place par Ino-Service nous a permis de gagner un temps précieux et de nous concentrer sur notre cœur de métier.',
      rating: 5,
      image: '👨‍⚕️'
    },
    {
      name: 'Sophie Laurent',
      role: 'Fondatrice, E-Shop Pro',
      content: 'Excellent accompagnement ! L\'équipe d\'Ino-Service comprend vraiment les besoins des PME. Résultats impressionnants dès le premier mois.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#00aaff] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-blue-100">{t('subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-blue-100">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white text-[#0066cc] rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white text-[#0066cc] rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
