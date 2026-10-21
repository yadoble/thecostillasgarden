import React from 'react';
import { X, Flame, Clock, Trees, Thermometer, Plus, Check } from 'lucide-react';

export default function DishDetailModal({ dish, onClose, onAddToCart, isInCart }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0f1117] border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 text-left my-8">
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Food Photo */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-black/30" />

          {dish.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-heading font-bold uppercase tracking-wider">
                {dish.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-zinc-400 text-xs uppercase tracking-widest font-semibold block mb-1">
                {dish.portion}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase leading-tight">
                {dish.name}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-heading font-black text-base tracking-wider shrink-0 shadow-lg">
              {dish.formattedPrice}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {dish.description}
          </p>

          {/* Smoking Specs Grid */}
          {dish.specs && (
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Especificaciones del Pitmaster</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block mb-0.5">Tiempo Pit:</span>
                  <strong className="text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {dish.specs.smokeTime}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">Leña Usada:</span>
                  <strong className="text-white flex items-center gap-1">
                    <Trees className="w-3 h-3 text-emerald-400" />
                    {dish.specs.wood}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">Temperatura:</span>
                  <strong className="text-white flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-orange-400" />
                    {dish.specs.temp}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">Corte / Origen:</span>
                  <strong className="text-white truncate block">
                    {dish.specs.cut}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => {
                onAddToCart(dish);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir a Mi Selección ({dish.formattedPrice})</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
