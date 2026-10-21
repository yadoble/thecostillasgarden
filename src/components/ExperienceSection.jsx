import React from 'react';
import { Beer, Music, Flame, HeartHandshake, Sparkles, Compass } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function ExperienceSection({ onOpenReservation }) {
  const experiences = [
    {
      icon: Beer,
      title: 'Maridaje Craft en Barril',
      subtitle: '8 Líneas de Cerveza Artesanal',
      description: 'Lagers refrescantes para limpiar el paladar entre costillas y robustas Imperial Stouts que realzan la corteza caramelizada del brisket.'
    },
    {
      icon: Flame,
      title: 'Terraza con Fogateros',
      subtitle: 'Fuego Vivo al Atardecer',
      description: 'Mesas al aire libre rodeadas de áreas verdes, calentadores de gas y fogatas de piedra para una velada cálida e íntima.'
    },
    {
      icon: Sparkles,
      title: 'Mixología Ahumada',
      subtitle: 'Cócteles de Autor con Humo Vivo',
      description: 'Nuestros bartenders capturan el humo de maderas frutales bajo campanas de cristal para tragos con bourbon, mezcal y tequila.'
    },
    {
      icon: Music,
      title: 'Noches de Blues & Country',
      subtitle: 'Música en Vivo Viernes y Sábados',
      description: 'El ambiente sonoro perfecto para disfrutar con amigos y familia, complementando la auténtica vibra sureña.'
    }
  ];

  return (
    <section id="experiencia" className="relative py-24 sm:py-32 bg-[#0a0c10] overflow-hidden text-white">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>La Experiencia Garden</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight mb-6">
              Más Que Un Restaurante, <span className="text-metallic">Un Ritual Social</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Queremos que el tiempo se detenga. Ven con amigos, pide al centro para compartir con las manos, siente el calor de las brasas y deja que los aromas del roble blanco te transporten.
            </p>

            <div className="space-y-3 mb-8">
              {restaurantInfo.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Vivir la Experiencia • Reservar</span>
            </button>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {experiences.map((exp, idx) => {
              const IconComp = exp.icon;
              return (
                <div
                  key={idx}
                  className="card-metallic rounded-2xl p-6 text-left group hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-amber-400/90 text-xs font-semibold mb-3">
                    {exp.subtitle}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
