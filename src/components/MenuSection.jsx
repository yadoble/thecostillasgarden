import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Utensils, 
  Sparkles, 
  Soup, 
  Beer, 
  Plus, 
  Check, 
  Search, 
  Info, 
  Beef, 
  Clock, 
  Trees 
} from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuSection({ onAddToCart, onSelectDish, cartItems = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Flame: Flame,
    Beef: Beef,
    Utensils: Utensils,
    Sparkles: Sparkles,
    Soup: Soup,
    Beer: Beer
  };

  const filteredDishes = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getItemQuantityInCart = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#08090b] text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-orange-700/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Selección del Pitmaster</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">
            Menú Insignia <span className="text-metallic">& Ahumados</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Platillos elaborados diariamente desde el amanecer. Servidos en su punto óptimo de jugosidad con nuestras guarniciones hechas desde cero y salsas de la casa.
          </p>
        </div>

        {/* Filter Controls: Categories & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {menuCategories.map((cat) => {
              const IconComp = categoryIcons[cat.icon] || Flame;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105'
                      : 'card-metallic text-zinc-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar platillo o ingrediente..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#12141a] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Dish Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 card-metallic rounded-2xl max-w-md mx-auto p-8">
            <Flame className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-white font-bold text-base mb-1">No se encontraron platillos</p>
            <p className="text-zinc-400 text-xs">Intenta con otra búsqueda o selecciona "Todo el Menú".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish) => {
              const qtyInCart = getItemQuantityInCart(dish.id);

              return (
                <div
                  key={dish.id}
                  className="card-metallic rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 shadow-xl relative"
                >
                  <div>
                    {/* Dish Image Container */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-black/40">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-black/30" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        {dish.badge && (
                          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-[11px] font-heading font-bold uppercase tracking-wider text-amber-300 shadow-md">
                            {dish.badge}
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-300">
                          {dish.portion}
                        </span>
                      </div>

                      {/* Price Pill */}
                      <div className="absolute bottom-3 right-4">
                        <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-heading font-black text-sm tracking-wide shadow-lg shadow-black/80">
                          {dish.formattedPrice}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors leading-tight mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-amber-400/80 text-xs font-medium mb-3 italic">
                        {dish.tagline}
                      </p>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                        {dish.description}
                      </p>

                      {/* Smoking Specs Chips */}
                      {dish.specs && (
                        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-[11px] text-zinc-300">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">{dish.specs.smokeTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Trees className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                            <span className="truncate">{dish.specs.wood}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Ver Detalles</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                        qtyInCart > 0
                          ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                          : 'bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-white border border-white/15'
                      }`}
                    >
                      {qtyInCart > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>({qtyInCart}) Añadido</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Pedir</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pitmaster Guarantee Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl card-metallic border-amber-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Flame className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-heading font-bold text-base sm:text-lg mb-1">
              Disponibilidad Diaria Sujeta a Capacidad del Horno
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Debido a que nuestro proceso de ahumado toma entre 14 y 16 horas con leña real, preparamos un número limitado de piezas cada día. ¡Te recomendamos reservar con anticipación para asegurar tu corte favorito!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
