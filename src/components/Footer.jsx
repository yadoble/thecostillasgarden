import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { restaurantInfo } from '../data/restaurantInfo';

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="The Costillas Garden Logo"
                className="w-12 h-12 rounded-full border border-white/20"
              />
              <div>
                <span className="font-heading font-black text-white text-base tracking-[0.15em] uppercase block">
                  The Costillas Garden
                </span>
                <span className="text-[11px] text-amber-400 font-semibold tracking-widest uppercase">
                  Texas Heritage Smokehouse
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Especialistas en Brisket Black Angus y Costillas ahumadas artesanalmente a fuego indirecto con leña de roble blanco y nogal.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/thecostillasgarden/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-amber-400 transition-colors">Nuestra Historia</a>
              </li>
              <li>
                <a href="#tecnica" className="hover:text-amber-400 transition-colors">Técnica de Ahumado</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Menú Insignia</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-amber-400 transition-colors">Experiencia Garden</a>
              </li>
            </ul>
          </div>

          {/* Special Cuts */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Brisket Black Angus Prime</li>
              <li>Costillas St. Louis BBQ</li>
              <li>Pork Belly Burnt Ends</li>
              <li>Mac & Cheese a 4 Quesos</li>
              <li>Mixología con Humo de Roble</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Reservaciones
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              Mesa asegurada sin costo de reserva.
            </p>
            <button
              onClick={onOpenReservation}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-heading font-bold text-[11px] uppercase tracking-wider transition-colors"
            >
              Reservar Mesa
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} The Costillas Garden. Todos los derechos reservados.
            Hecho con pasión por el fuego artesanal.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors text-[11px]"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
