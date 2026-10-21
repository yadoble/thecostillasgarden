import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Calendar, ShoppingBag, PhoneCall, ChevronRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function Navbar({ onOpenReservation, onOpenCart, cartItemCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Técnica Ahumado', href: '#tecnica' },
    { name: 'Menú Insignia', href: '#menu' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Ubicación & Horarios', href: '#contacto' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 p-0.5 bg-black/60 shadow-lg shadow-black group-hover:border-amber-500/60 transition-colors">
                <img
                  src="/logo.png"
                  alt="The Costillas Garden"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-black text-sm sm:text-base tracking-[0.2em] uppercase text-white group-hover:text-amber-400 transition-colors">
                  The Costillas
                </span>
                <span className="font-serif-display text-[10px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 -mt-1 font-semibold">
                  Garden BBQ
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium tracking-wide text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-300 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Cart / Selection Button */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-200 transition-all text-xs font-semibold tracking-wide"
                title="Ver selección de platillos"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span className="hidden md:inline">Mi Selección</span>
                {cartItemCount > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-black font-bold text-[11px] animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Reservation CTA Button */}
              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Mesa</span>
              </button>
            </div>

            {/* Mobile Menu & Cart Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200"
                aria-label="Ver selección"
              >
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-black font-bold text-[10px]">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#0e1014] border-l border-white/10 p-6 flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="The Costillas Garden"
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <p className="font-heading font-black text-sm tracking-wider text-white">THE COSTILLAS</p>
                    <p className="text-[10px] text-amber-400 tracking-widest uppercase">Garden BBQ</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all font-medium text-sm border border-transparent hover:border-white/5"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Mesa</span>
              </button>

              <a
                href={restaurantInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-200 text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
