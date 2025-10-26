import React from 'react';
import { motion } from 'framer-motion';

// Inline SVG Icon Definitions (using lucide-react names for easy mapping)
const ZapIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const SearchIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const Share2Icon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>);
const UsersIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const TrendingUpIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>);
const ShieldIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
// New icons for Industries section
const ShoppingCartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 12.08a2 2 0 0 0 2 1.92h9.5a2 2 0 0 0 2-1.92L23 6H6"></path></svg>);
const HeartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>);
const BookOpenIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>);
const HomeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H2L12 3l10 9h-3"></path><path d="M19 21v-7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7"></path></svg>);

// Placeholder image for the hero section
const heroImage = 'https://img.freepik.com/free-photo/social-media-marketing-concept-with-person-using-laptop_23-2150062828.jpg?t=st=1718875571~exp=1718879171~hmac=62174c8789ad476a6b83f06c1348c47b9733230c458739199d75b367d30718e2&w=1480';


const DigitalMarketing = () => {
    // Data for the 'Our Core Digital Services' section
    const services = [
        { icon: SearchIcon, title: 'Search Engine Optimization (SEO)', description: 'Boost your visibility and rank higher in search results with our expert on-page and off-page optimization strategies.' },
        { icon: ZapIcon, title: 'Pay-Per-Click (PPC) Advertising', description: 'Immediate traffic and high-intent leads through expertly managed Google Ads, social media ads, and retargeting campaigns.' },
        { icon: Share2Icon, title: 'Social Media Marketing', description: 'Build your brand presence, engage your audience, and drive sales across all major social platforms with creative content and community management.' },
        { icon: UsersIcon, title: 'Content & Inbound Marketing', description: 'Attract, convert, and delight customers with high-value blogs, videos, and guides that establish you as an industry leader.' },
    ];

    // Data for the 'Why Choose Ravo Digital?' section
    const features = [
        { title: 'Proven ROI Focus', description: 'Every campaign is engineered for measurable results, ensuring maximum return on your marketing investment.', icon: TrendingUpIcon },
        { title: 'Full Transparency', description: 'We provide clear, actionable reports and open communication so you always know where your budget is going.', icon: ShieldIcon },
        { title: 'Integrated Strategy', description: 'We don\'t just run ads; we connect all digital channels for a cohesive, powerful customer journey.', icon: ZapIcon },
    ];

    // Data for the 'Industries We Serve' section
    const industries = [
        { icon: ShoppingCartIcon, title: 'E-commerce & Retail' },
        { icon: HeartIcon, title: 'Healthcare & Fitness' },
        { icon: BookOpenIcon, title: 'Education & Coaching' },
        { icon: HomeIcon, title: 'Real Estate & Hospitality' },
        { icon: ZapIcon, title: 'Technology & SaaS Companies' },
        { icon: UsersIcon, title: 'Professional Services' }, 
    ];

    return (
        // Changed main background to white and text to dark gray
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* 1. Hero Section: Focused on the core message - Updated for Left Text, Right Image & Animation */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50 border-b border-gray-200">
                {/* Decorative Digital Lines (to simulate the graphic) - Adjusted gradient colors for light background */}
                <div className="absolute inset-0 top-1/2 w-full h-1/2 opacity-20 pointer-events-none">
                    <svg width="100%" height="100%">
                        <defs><linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#D1D5DB"/><stop offset="100%" stopColor="#E5E7EB"/></linearGradient></defs>
                        <line x1="5%" y1="0" x2="5%" y2="100%" stroke="url(#g1)" strokeWidth="1" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#g1)" strokeWidth="1" />
                        <line x1="95%" y1="0" x2="95%" y2="100%" stroke="url(#g1)" strokeWidth="1" />
                        {/* Dots remain yellow for accent */}
                        <circle cx="5%" cy="0" r="4" fill="#FACC15" />
                        <circle cx="95%" cy="0" r="4" fill="#FACC15" />
                    </svg>
                </div>

                <div className="relative container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Left side: Text content */}
                    <div className="text-center lg:text-left">
                        <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight text-gray-900"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-yellow-600">Amplify</span> Your Brand. Accelerate Your Growth.
                        </motion.h1>
                        <motion.p 
                            className="text-lg md:text-xl max-w-3xl lg:max-w-none mx-auto lg:mx-0 mb-8 text-gray-700"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We deliver data-driven digital marketing strategies that connect you with your ideal customers and drive measurable, sustainable success.
                        </motion.p>
                        <motion.a
                            href="#contact-cta"
                            className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:bg-yellow-600 transition transform hover:scale-105 inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Start Your Strategy Today
                        </motion.a>
                    </div>

                    {/* Right side: Image content with animation */}
                    <motion.div 
                        className="mt-12 lg:mt-0 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img 
                            src={heroImage} 
                            alt="Digital Marketing Illustration" 
                            className="w-full max-w-md lg:max-w-lg h-auto rounded-xl shadow-2xl object-cover"
                            style={{ aspectRatio: '16/10' }} // Maintain aspect ratio
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. Services Section: Our Core Digital Services */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Core Digital Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                // Card background changed to light gray, shadow added for depth
                                className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-yellow-500 transition duration-300 transform hover:scale-[1.02]"
                            >
                                <service.icon className="text-yellow-600 w-10 h-10 mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us Section: Features */}
            <section className="py-16 md:py-24 bg-gray-100">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Left Side: Title and Description */}
                    <div className="lg:col-span-1">
                        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600 mb-2">Our Advantage</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Why Choose Ravo Digital?
                        </h2>
                        <p className="text-gray-700 text-lg">
                            We bridge the gap between complex digital tools and simplified, effective marketing strategy, delivering results you can trust.
                        </p>
                    </div>

                    {/* Right Side: Feature Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                // Feature card background changed to white for emphasis
                                className="flex items-start p-5 bg-white rounded-xl shadow-xl border-l-4 border-yellow-600"
                            >
                                <feature.icon className="text-yellow-600 w-8 h-8 flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-700 text-base">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 4. Industries We Serve Section: ENHANCED VISUALS */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Industries We Serve</h2>
                    <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
                        We craft custom digital solutions for businesses across industries, catering to every unique domain from startups to enterprises.
                    </p>
                    {/* Grid updated for better flow and visual impact */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                // Enhanced Card Styling: White background, stronger shadow, border-on-hover effect
                                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl border-b-4 border-transparent hover:border-yellow-500 group"
                            >
                                {/* Icon container with contrasting background */}
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:bg-yellow-200">
                                    <industry.icon className="text-yellow-600 w-8 h-8" />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 text-center">{industry.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section (Original Section 4) */}
            <section id="contact-cta" className="py-16 bg-gray-100 text-center border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Let's schedule a free 30-minute consultation to map out your custom growth plan.
                    </p>
                    {/* CTA button remains yellow and uses dark text */}
                    <a
                        href="/contact" // Assuming a Contact route exists in App.jsx
                        className="bg-yellow-500 text-gray-900 font-bold py-3 px-10 rounded-full text-lg shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:scale-[1.05]"
                    >
                        Book Your Free Strategy Session
                    </a>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
