import React from 'react';
import { Flame, UtensilsCrossed, Calendar, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function HeroSection({ onOpenReservation }) {
  const scrollToMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#08090b]"
    >
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Smoked texture background with hero image gradient */}
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center filter grayscale contrast-125 mix-blend-screen scale-105 transform animate-pulse duration-1000"
          style={{ backgroundImage: `url('/images/brisket.jpg')` }}
        />

        {/* Ambient Ember Glow Radial Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[450px] h-[350px] bg-orange-700/10 blur-[110px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-zinc-600/10 blur-[100px] rounded-full" />

        {/* Textured dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-[#08090b]/80 to-[#08090b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,9,11,0.95)_75%)]" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Brand Logo Emblem */}
        <div className="relative mb-6 group cursor-pointer">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-400 via-amber-500/40 to-zinc-400 opacity-30 group-hover:opacity-75 blur-md transition duration-700" />
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-zinc-300 via-zinc-800 to-zinc-950 shadow-2xl shadow-black overflow-hidden border border-white/20">
            <img
              src="/logo.png"
              alt="The Costillas Garden Official Logo"
              className="w-full h-full object-cover rounded-full filter contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating Live Pit Status Pill */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121418] border border-amber-500/40 text-[11px] font-bold tracking-wider text-amber-400 uppercase shadow-lg shadow-black">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="w-1.5 h-1.5 -ml-3.5 rounded-full bg-amber-400" />
            <span>Fuego & Humo Activo</span>
          </div>
        </div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 mt-2">
          <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Texas Heritage Smokehouse • Hecho en México</span>
        </div>

        {/* Main Title with Chrome Brushed Effect */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] mb-5">
          <span className="block text-metallic drop-shadow-2xl">
            The Costillas
          </span>
          <span className="block font-serif-display text-metallic-silver tracking-[0.18em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
            Garden
          </span>
        </h1>

        {/* Subtitle / User-requested Slogan */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-zinc-300 font-light tracking-wide leading-relaxed mb-4">
          <span className="text-amber-400 font-medium">Lento y a baja temperatura.</span> Brisket y BBQ ahumado de especialidad.
        </p>

        {/* Description detail */}
        <p className="max-w-xl text-sm sm:text-base text-zinc-400 mb-9 leading-relaxed font-normal">
          Carne Black Angus Prime con 16 horas en el smoker pit alimentado exclusivamente con leña seleccionada de roble blanco y nogal. Textura que se deshace en cada bocado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          {/* Primary CTA: Reservar Mesa */}
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-heading font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all group"
          >
            <Calendar className="w-5 h-5 text-stone-950" />
            <span>Reservar Mesa</span>
            <ArrowRight className="w-4 h-4 text-stone-950 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Ver Menú */}
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl card-metallic text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span>Ver Menú Ahumado</span>
          </button>
        </div>

        {/* Key Features / Stats Strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {restaurantInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-metallic rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-amber-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.02] rounded-bl-full pointer-events-none" />
              <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-amber-400 transition-colors">
                <span>{stat.value}</span>
                <span className="text-xs sm:text-sm font-serif-display font-medium text-amber-400/90">{stat.unit}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 tracking-wide mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] tracking-widest uppercase text-zinc-400">Descubre</span>
        <div className="w-5 h-8 rounded-full border border-zinc-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
