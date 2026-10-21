import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Send, 
  Flame, 
  Navigation, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { restaurantInfo } from '../data/restaurantInfo';

export default function ContactSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#08090b] text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Encuéntranos en el Jardín</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
            Visítanos & <span className="text-metallic">Contacto Directo</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Estamos listos para recibirte con el olor a madera noble, las brasas calientes y las costillas en su punto más jugoso.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Column 1: Horarios & Estatus */}
          <div className="lg:col-span-5 card-metallic rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider">
                    Horarios de Fuego
                  </h3>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Servicio Activo
                </span>
              </div>

              <div className="space-y-4">
                {restaurantInfo.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-colors ${
                      item.isOpenDay
                        ? 'bg-white/[0.03] border-white/5 hover:border-white/15'
                        : 'bg-black/30 border-dashed border-white/10 text-zinc-500'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-white">{item.days}</span>
                      <span className={item.isOpenDay ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>
                        {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-zinc-400 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cocinamos hasta agotar existencias del día.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Dirección & Canales de Contacto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="card-metallic rounded-3xl p-6 sm:p-8 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wider">
                    Ubicación & Teléfonos
                  </h3>
                  <p className="text-zinc-400 text-xs">Jardín con estacionamiento y terraza</p>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">
                    Dirección
                  </p>
                  <p className="text-white font-medium text-base">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-zinc-400 text-xs">{restaurantInfo.city}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={restaurantInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-amber-400" />
                    <span>Abrir en Google Maps</span>
                  </a>

                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Llamar: {restaurantInfo.phoneDisplay}</span>
                  </a>
                </div>

                {/* Direct WhatsApp Box */}
                <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-black flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Atención Rápida por WhatsApp</p>
                      <p className="text-zinc-300 text-xs">Dudas de menú, eventos privados y pedidos</p>
                    </div>
                  </div>

                  <a
                    href={restaurantInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold text-xs uppercase tracking-wider text-center shrink-0 transition-colors"
                  >
                    Chatear Ahora
                  </a>
                </div>
              </div>
            </div>

            {/* VIP Smoke Club Signup */}
            <div className="card-metallic rounded-3xl p-6 sm:p-8 text-left bg-gradient-to-r from-[#171a24] to-[#111319]">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>La Logia del Humo • Club VIP</span>
              </div>
              <h4 className="font-heading font-black text-lg text-white mb-2">
                Recibe Cortesías del Pitmaster & Catas Privadas
              </h4>
              <p className="text-zinc-400 text-xs mb-5 max-w-lg">
                Suscríbete para enterarte de días con ahumados especiales (Dinosaur Beef Ribs, Tomahawk Smoked) y promociones exclusivas.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>¡Bienvenido a la Logia! Te hemos enviado tu cortesía de bienvenida.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Tu correo electrónico..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0 flex items-center justify-center gap-2"
                  >
                    <span>Unirme</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
