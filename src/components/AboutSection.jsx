import React, { useState } from 'react';
import { Flame, Trees, Clock, Award, ShieldCheck, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { smokingTechniques } from '../data/menuData';

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState(0);

  const iconsMap = {
    TreePine: Trees,
    Hourglass: Clock,
    ShieldCheck: ShieldCheck,
    Flame: Flame
  };

  return (
    <section id="historia" className="relative py-24 sm:py-32 bg-[#090b0e] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Nuestra Pasión & Filosofía</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
            El Arte Sagrado Del <span className="text-metallic">Smoker Pit</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            En <span className="text-zinc-100 font-semibold">The Costillas Garden</span> no creemos en los atajos. El verdadero BBQ no se hornea ni se hierve: se conquista segundo a segundo frente a las brasas vivas, respirando madera noble y paciencia absoluta.
          </p>
        </div>

        {/* Dual Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          {/* Left Column: Visual Smoker Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden card-metallic p-2 shadow-2xl group">
              <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="/images/smoker.jpg"
                  alt="Pitmaster artesanal en The Costillas Garden"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Pit Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                        <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>Offset Pit Custom-Made</span>
                      </div>
                      <p className="text-white text-sm font-semibold mt-0.5">
                        Ahumador de Acero al Carbón Calibre 3/8"
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold">
                      100% Leña
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-500/10 rounded-full blur-lg pointer-events-none" />
            </div>

            {/* Floating Experience Stat Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 hidden sm:flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#14161d] border border-white/15 shadow-2xl backdrop-blur-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Receta Texana Original</p>
                <p className="text-zinc-400 text-xs">Pimienta gruesa, sal pura & humo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold tracking-wider uppercase">
              La Historia de Nuestro Jardín
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
              Nacidos del amor al humo puro y las reuniones al aire libre
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed">
              The Costillas Garden nació con una misión elemental: traer a nuestras tierras el sabor inmaculado de las parrilladas de Austin y Lockhart, Texas, combinándolo con la calidez y el deleite de un jardín social al atardecer.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Seleccionamos cada corte a mano evaluando su marmoleo intramuscular. No usamos gas, vapor ni marinados químicos. Cada rebanada de brisket y costilla es el resultado de desvelos continuos, leñadores dedicados y una constante danza térmica que premia a los paladares más exigentes.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Cortes Black Angus</p>
                  <p className="text-zinc-400 text-xs">Grado Prime y Choice superior</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Leña Curada 12 Meses</p>
                  <p className="text-zinc-400 text-xs">Roble blanco y nogal sin resinas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Salsas Hechas en Casa</p>
                  <p className="text-zinc-400 text-xs">Desde bourbon dulce hasta habanero ahumado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Ambiente Social Garden</p>
                  <p className="text-zinc-400 text-xs">Fogatas, terraza amplia y mixología</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Steps of Smoking */}
        <div id="tecnica" className="pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
              Técnica de Especialidad
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase mt-2">
              Los 4 Pasos del Ahumado Perfecto
            </h3>
            <p className="text-zinc-400 text-sm mt-3">
              Un proceso milimétrico donde el tiempo y el oxígeno son los ingredientes principales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smokingTechniques.map((step, idx) => {
              const IconComp = iconsMap[step.icon] || Flame;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`card-metallic rounded-2xl p-6 text-left cursor-pointer transition-all relative overflow-hidden group ${
                    isActive ? 'border-amber-500/50 bg-[#171a22]' : 'hover:border-white/20'
                  }`}
                >
                  {/* Step Number Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-3xl text-zinc-600 group-hover:text-amber-400/80 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-amber-400/90 text-xs font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
