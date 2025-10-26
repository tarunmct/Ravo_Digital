import React from 'react';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------
// 1. ASSET IMPORTS: (Update this section in your local project)

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';

// Function to generate unique placeholders
const getPlaceholderUrl = (text, ratio = '400x400', colorIndex = 0) => {
  const colors = ['F5F5F5', 'E0E0E0', 'FFFFFF', 'F9F9F9', 'F0F0F0', 'ECECEC'];
  const bgColor = colors[colorIndex % colors.length];
  const fgColor = '333333';
  return `https://placehold.co/${ratio}/${bgColor}/${fgColor}?text=${text.replace(/\s/g, '+')}`;
};

// ----------------------------------------------------------------------
// 2. IMAGE DATA STRUCTURE
// ----------------------------------------------------------------------
const IMAGE_SOURCES = [
  { id: 1, src: pic1, name: 'Grand Entrance (Pic1)', isTall: false },
  { id: 2, src: pic2, name: 'Table Settings (Pic2)', isTall: true },
  { id: 3, src: pic3, name: 'Venue Setup (Pic3)', isTall: false },
  { id: 4, src: pic4, name: 'Lighting Design (Pic4)', isTall: true },
  { id: 5, src: pic5, name: 'Party Vibes (Pic5)', isTall: false },
  { id: 6, src: pic6, name: 'Dessert Display (Pic6)', isTall: false },
];

const HERO_BG_URL = pic1;

// ----------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------
const CalendarIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const HeartIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const TrophyIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="11" r="5"></circle>
    <path d="M11 15h2a3 3 0 1 0-6 0v-2c0-.5.5-1 1-1h1a2 2 0 0 1 2 2v2"></path>
    <path d="M17 18h.01"></path>
    <path d="M7 18h.01"></path>
    <path d="M7 21a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2"></path>
    <path d="M17 21a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2"></path>
  </svg>
);

const UserIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const UsersIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BuildingIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="14" width="18" height="8" rx="1"></rect>
    <rect x="5" y="6" width="14" height="8" rx="1"></rect>
    <path d="M7 14V6h10v8"></path>
    <path d="M12 2v4"></path>
  </svg>
);

// ----------------------------------------------------------------------
// CONSTANTS
// ----------------------------------------------------------------------
const ACCENT_GOLD = 'text-amber-500';
const ACCENT_ROSE = 'text-pink-500';
const ACCENT_TEAL = 'text-teal-600';
const ACCENT_BLUE = 'text-blue-600';

const services = [
  { title: 'Weddings & Celebrations', description: 'Crafting timeless, magical moments tailored exactly to your dream day.', icon: HeartIcon, color: ACCENT_ROSE },
  { title: 'Corporate Events', description: 'Seamless, professional execution for conferences, launches, and galas.', icon: CalendarIcon, color: ACCENT_TEAL },
  { title: 'Personalized Parties', description: 'From intimate gatherings to milestone birthdays, designed with flair.', icon: TrophyIcon, color: ACCENT_GOLD },
];

const stats = [
  { number: '1000+', label: 'Events Done', icon: CalendarIcon, color: ACCENT_TEAL },
  { number: '600+', label: 'Happy Clients', icon: UsersIcon, color: ACCENT_BLUE },
  { number: '250+', label: 'Weddings Done', icon: HeartIcon, color: ACCENT_ROSE },
  { number: '230+', label: 'Corporate Events', icon: BuildingIcon, color: ACCENT_TEAL },
  { number: '80', label: 'Happy Employees', icon: UserIcon, color: ACCENT_GOLD },
];

const getLightPlaceholderUrl = (text, ratio = '150x50') => {
  return `https://placehold.co/${ratio}/FFFFFF/333333?text=${text.replace(/\s/g, '+')}&font=roboto&fontsize=16`;
};

const LOGO_PLACEHOLDERS = [
  getLightPlaceholderUrl('WILDLIFE RESERVES'),
  getLightPlaceholderUrl('OTTOBOCK'),
  getLightPlaceholderUrl('MELBOURNE'),
  getLightPlaceholderUrl('MARTIN'),
  getLightPlaceholderUrl('Q EXPERTTEST'),
  getLightPlaceholderUrl('METRO'),
  getLightPlaceholderUrl('EXPERIAN'),
  getLightPlaceholderUrl('INVIXIUM'),
  getLightPlaceholderUrl('ANDAL'),
  getLightPlaceholderUrl('CUNNINGHAM'),
  getLightPlaceholderUrl('PAREXEL'),
  getLightPlaceholderUrl('aranca'),
];

const testimonials = [
  { quote: 'The most stress-free corporate launch we\'ve ever had. Glam Studios handled every detail professionally and flawlessly.', name: 'Sarah Chen', title: 'Marketing Director' },
  { quote: 'Our wedding was a dream come true! Every element was perfectly managed and exceeded all expectations.', name: 'Michael & Jane Doe', title: 'Client Couple' },
];

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------
const EventManagement = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. HERO SECTION */}
      <header
        className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gray-900"
        style={{
          backgroundImage: `url('${HERO_BG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-extrabold text-white mb-6 tracking-tight drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Vision, Our Expertise
          </motion.h1>
          <motion.p
            className="text-xl text-white/95 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We turn moments into masterpieces. From intimate celebrations to grand corporate affairs, experience flawless event management.
          </motion.p>
          <motion.button
            className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Plan Your Event Now
          </motion.button>
        </div>
      </header>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Seamlessly Executed Events
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            We offer end-to-end management, covering everything from conceptual design to on-site coordination, ensuring a stress-free experience for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg transform hover:shadow-2xl transition duration-300 border border-gray-200 hover:border-amber-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} strokeWidth="1.5" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-normal">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 leading-relaxed">
            A glimpse into the diverse and beautiful events we've brought to life using our 6 featured assets.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGE_SOURCES.map((image, index) => (
              <motion.div
                key={image.id}
                className={`rounded-lg overflow-hidden shadow-xl ${image.isTall ? 'col-span-1 row-span-2 hidden md:block' : 'col-span-1'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getPlaceholderUrl('Load Error', '400x400', 2);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS & PARTNERS SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-16 font-serif italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            "Where Creativity Meets Professionalism."
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className={`w-10 h-10 mb-2 ${stat.color}`} strokeWidth="1.5" />
                <p className="text-4xl font-extrabold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="my-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative inline-block py-1 px-4 mb-4 text-xs font-semibold uppercase tracking-widest">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-teal-500">
                Our Partners & Clients
              </span>
              <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-amber-500 to-teal-500 opacity-70"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-8 mb-12 tracking-tight">
              "Together, We Create Magic."
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 items-center justify-items-center">
            {LOGO_PLACEHOLDERS.map((logoUrl, index) => (
              <motion.img
                key={index}
                src={logoUrl}
                alt={`Client Logo ${index + 1}`}
                className="w-full max-w-[120px] h-auto opacity-80 transition duration-300 filter grayscale hover:grayscale-0 hover:opacity-100 transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.6 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            Client Success Stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl shadow-xl border-t-4 border-amber-500 text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-2xl font-serif italic text-gray-700 mb-6 leading-loose">
                  "&ldquo;{testimonial.quote}&rdquo;"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <footer className="py-20 lg:py-28 px-6 bg-linear-to-r from-teal-500 to-amber-500 text-white shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Plan Your Perfect Day?
          </motion.h2>
          <motion.p
            className="text-xl opacity-90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can transform your event vision into a stunning reality.
          </motion.p>
          <motion.button
            className="bg-white text-teal-600 font-extrabold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Book a Consultation
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default EventManagement;
