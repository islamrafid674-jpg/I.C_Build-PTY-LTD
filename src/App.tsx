/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Hammer, 
  DoorOpen, 
  Ruler, 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Star, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const { scrollY } = useScroll();
  const heroBackgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-brand selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-ink/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img 
              src="https://i.imgur.com/D3dG4gY.png" 
              alt="I.C_Build PTY LTD" 
              className="w-[102px] h-[104px] object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-brand text-white/90"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Phone size={16} />
              0435 070 104
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center">
                <img 
                  src="https://i.imgur.com/D3dG4gY.png" 
                  alt="I.C_Build PTY LTD" 
                  className="w-[80px] h-[82px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-white hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="p-6 border-t border-white/10 bg-black/20">
              <a 
                href="tel:0435070104"
                className="w-full bg-brand hover:bg-brand-hover text-white px-6 py-4 rounded-xl text-center font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                0435 070 104
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroBackgroundY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Luxury modern interior with custom carpentry" 
            className="w-full h-[120%] object-cover -mt-[10%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Where High-End Craftsmanship Meets Modern Luxury
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              Premium Carpentry & <br className="hidden md:block" />
              <span className="text-brand">Construction</span> Services.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed"
            >
              Elevating residential spaces with precision woodwork, architectural finishes, and reliable construction solutions for homeowners, builders, and developers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                Request a Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-6 px-4">
                <a href="tel:0435070104" className="flex items-center gap-2 text-white hover:text-brand transition-colors">
                  <Phone size={20} className="text-brand" />
                  <span className="font-medium">0435 070 104</span>
                </a>
                <a href="mailto:icbuild1@gmail.com" className="hidden sm:flex items-center gap-2 text-white hover:text-brand transition-colors">
                  <Mail size={20} className="text-brand" />
                  <span className="font-medium">icbuild1@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
                    alt="Craftsmanship and precision woodwork" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                  <div className="font-display text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm font-medium opacity-90">Commitment to quality materials and architectural precision.</div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 text-brand font-semibold tracking-wider uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-brand"></span>
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Precision Craftsmanship & <br />Modern Construction
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  At I.C_Build PTY LTD, we specialize in delivering high-end carpentry and construction solutions that combine craftsmanship with modern design. Our team focuses on precision, quality materials, and attention to detail to ensure every project meets the highest standards.
                </p>
                <p>
                  From internal carpentry to detailed architectural finishes, we help bring modern residential projects to life with professional workmanship and reliable service. Whether you are a homeowner, builder, or property developer, we are your trusted partner for premium results.
                </p>
              </div>
              
              <ul className="mt-8 space-y-4">
                {['Premium Quality Materials', 'Attention to Architectural Detail', 'Reliable & Professional Service'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink font-medium">
                    <CheckCircle2 className="text-brand" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <a href="#projects" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand transition-colors group pb-1 border-b-2 border-ink hover:border-brand">
                  View Our Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 text-brand font-semibold tracking-wider uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-brand"></span>
                Our Expertise
                <span className="w-8 h-[2px] bg-brand"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Premium Services</h2>
              <p className="text-lg text-gray-600 font-light">
                Delivering specialized carpentry and construction solutions tailored for modern residential projects and luxury developments.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer size={32} />,
                title: "Internal Carpentry",
                desc: "Expert installation of detailed internal carpentry for residential projects and duplex homes."
              },
              {
                icon: <DoorOpen size={32} />,
                title: "Door Installation",
                desc: "Professional installation of modern interior doors with precise finishing and alignment."
              },
              {
                icon: <Ruler size={32} />,
                title: "Shadow-Line Skirting",
                desc: "High-end architectural skirting solutions that create a clean, modern interior look."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Stair Treads Installation",
                desc: "Custom staircase tread installation with strong craftsmanship and premium finishes."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Balustrade Installation",
                desc: "Modern balustrade installations that combine safety with elegant, contemporary design."
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 h-full group cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-paper flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
            
            {/* CTA Card */}
            <FadeIn delay={0.5}>
              <div className="bg-ink p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-brand/10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">Have a Custom Project?</h3>
                  <p className="text-white/80 font-light mb-8">
                    We work closely with builders and developers to execute complex architectural designs.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full font-semibold transition-all w-fit">
                    Discuss Your Project
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects / Portfolio Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeIn className="max-w-2xl">
              <div className="flex items-center gap-3 text-brand font-semibold tracking-wider uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-brand"></span>
                Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 font-light max-w-md">
                A showcase of our recent high-end carpentry and construction work across residential and duplex developments.
              </p>
            </FadeIn>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[21/9] relative group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={[
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/626374291_17924438862246645_5177243699084953904_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzgzMDA4MzQxMTUzMzUyNTMxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=uomTLdWFWwgQ7kNvwHfDWGc&_nc_oc=AdnHygzV_ks7YHEOKbqfJKFiDualcWF6vzUJeUMJFjw7bBuW_6blUNST4NnS5huNNGY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_Afx6haHQKEg_YErFyYuQ1XfnAW-7_AwpZvimqchD_Go98Q&oe=69BCE2C1",
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/628319659_17924438679246645_3664163485201166441_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzgzMDA4MjEzNzA2MDczNjA1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=WeyH0KQO_OgQ7kNvwFMzeDO&_nc_oc=AdmiB48KtrYjPyZpMT5r_Xjgb1oqNLGM_oDOevpURW3xQVBIGe2ZsFN3Rh8kQrUan0o&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_AfyFg2jlvEshxfNNLPHBSUTm457N_7ahKz3mHtwmHUWw2Q&oe=69BCE260",
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/622026489_17922702648246645_8483076420963543899_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_cat=102&ig_cache_key=MzgxOTg4MTY4MDUyMjYyMDcxMDE3OTIyNzAyNjQ1MjQ2NjQ1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyNjh4NDAzMi5zZHIuQzMifQ%3D%3D&_nc_ohc=4IEY-x-v2tkQ7kNvwGgGg6X&_nc_oc=AdnAo9bN7msW6gIUKSgh51OeC9c4Cnj3DhITPLH71Fm27Smq5oO5y1L322bLK_4Ee0Y&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_AfyD4SPcjDGxs3bMZ9wE7PQN08nMBhWlG3l-5Nx_hx6Zrg&oe=69BCE966",
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/509183616_17896718628246645_2188891134082740428_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzY1ODMzMzYwNjE4OTA5ODMwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=AO3XL1PvGyIQ7kNvwEuKsSY&_nc_oc=AdlNFVZEwKknYGUWJ8nReg4HILLhNn7U37ML_j9L3BYG9ytY-vv5DreQuByLT0Zy6KY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_AfzrG2YzHMXZ1NH7eQnRAdATe6riTPH2Fr6R80CmHXWCRw&oe=69BCCD6B",
                      "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/491459893_17888573481246645_7595556230163796507_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzYxMDUwNzQ1MjgyMDkwMDc2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=1tdsSeb8OKwQ7kNvwGIbuPE&_nc_oc=AdmVmES3gH_fWiNJXMBJcvLR10DWqeJ6dvwdKJz5kP3L1FfJ0vdLMRPeZWCF5GtvMbE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_Afw-vO-gk8dPZYLUPw8CvNgOqCXzAbxB78W_-lj7VPJwdw&oe=69BCF6B7",
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/487864799_17886901065246645_3773018885607918551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzYwMDI0MDMwMTExOTU0NzE5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNDJ4MTU1Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=le9JXg3U4JcQ7kNvwFe6oxJ&_nc_oc=Adkx49V3mLP-DKqDzzH6OpBRnb9Ub1_xRLC7d_vpuHnWmXIva1qS0ubPRz80SL-Pbrg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_AfwJBbi5DwoAA2mOgAYzWXjIH39DMTLBPndVE1Vh17xlRg&oe=69BCF2C0",
                      "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/480822342_17881381842246645_8079478860711196860_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=MzU2OTg1MzM3Nzc2MjkyODEzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=jf3Bp2wN694Q7kNvwEnKrJh&_nc_oc=AdlhamaU1xGrEYDGk-ThZn-ig7Of-AxaBG4uQeOKe9wz7mHbVhh-vVRyaopAGq9Tc3Y&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=9x9Ca9hNuZZi6WypUrh2Ug&_nc_ss=8&oh=00_AfxEGGPNJ_CNGSPsyGl7OOA0vVzT7KAVBVznTLKdXDsRxA&oe=69BCCAD5"
                    ][currentProjectIndex]} 
                    alt="Project Showcase" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
                    >
                      {[
                        "Custom Staircase & Balustrade",
                        "Modern Interior Carpentry",
                        "Premium Door Installation",
                        "Shadow-Line Skirting",
                        "Architectural Wood Finishes",
                        "Duplex Internal Fit-out",
                        "High-End Residential Carpentry"
                      ][currentProjectIndex]}
                    </motion.h3>
                    <div className="w-16 h-1 bg-brand"></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => setCurrentProjectIndex((prev) => (prev === 0 ? 6 : prev - 1))}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setCurrentProjectIndex((prev) => (prev === 6 ? 0 : prev + 1))}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentProjectIndex === index ? 'w-8 bg-brand' : 'w-2 bg-gray-300 hover:bg-brand/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-ink text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 text-brand font-semibold tracking-wider uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-brand"></span>
                Client Feedback
                <span className="w-8 h-[2px] bg-brand"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Clients Say</h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James T.",
                city: "Sydney",
                text: "I.C_Build transformed our home with their impeccable internal carpentry. The attention to detail in the shadow-line skirting is truly high-end craftsmanship. Highly recommended for any modern residential project."
              },
              {
                name: "Sarah M.",
                city: "Melbourne",
                text: "We hired them for a custom staircase and balustrade installation. The team was professional, reliable, and the quality of the finishes exceeded our expectations. A premium construction service indeed."
              },
              {
                name: "David L.",
                city: "Brisbane",
                text: "From the initial quote to the final door installation, the process was seamless. Their precision and modern construction techniques brought our duplex project to life beautifully."
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm h-full flex flex-col">
                  <div className="flex gap-1 text-brand mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white/80 font-light leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand font-display font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold font-display">{testimonial.name}</h4>
                      <p className="text-sm text-white/50">{testimonial.city}, Australia</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-paper relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-brand p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get in Touch</h2>
                  <p className="text-white/90 font-light mb-12">
                    Contact I.C_Build PTY LTD today for premium carpentry, staircase installations, and interior construction work. We provide free, no-obligation quotes for your residential or commercial projects.
                  </p>
                  
                  <div className="space-y-8">
                    <a href="tel:0435070104" className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">Call Us</p>
                        <p className="text-xl font-semibold">0435 070 104</p>
                      </div>
                    </a>
                    
                    <a href="mailto:icbuild1@gmail.com" className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">Email Us</p>
                        <p className="text-lg font-semibold">icbuild1@gmail.com</p>
                      </div>
                    </a>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">Service Area</p>
                        <p className="text-lg font-semibold">Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 p-12 lg:p-16">
                <h3 className="text-2xl font-display font-bold mb-8">Request a Free Quote</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your carpentry or construction project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-ink hover:bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 group"
                  >
                    Contact Us Today for a Free Quote
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white/60 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="https://i.imgur.com/D3dG4gY.png" 
                alt="I.C_Build PTY LTD" 
                className="w-[102px] h-[104px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="text-sm">
              &copy; {new Date().getFullYear()} I.C_Build PTY LTD. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

