import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, ArrowRight, Flame } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export default function OrderDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenReservation
}) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsAppOrder = () => {
    let orderList = items
      .map((item) => `• ${item.quantity}x ${item.name} ($${item.price * item.quantity} MXN)`)
      .join('\n');

    const message = encodeURIComponent(
      `¡Hola The Costillas Garden! 🥩🔥 Quisiera realizar el siguiente pedido para llevar / mesa:\n\n` +
      `${orderList}\n\n` +
      `Total estimado: $${total.toLocaleString()} MXN\n\n` +
      `¿Tienen disponibilidad para prepararlo? ¡Muchas gracias!`
    );

    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1015] border-l border-white/10 shadow-2xl flex flex-col justify-between text-left">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-black text-base text-white uppercase tracking-wider">
                  Mi Selección BBQ
                </h3>
                <p className="text-zinc-400 text-xs">
                  {items.length} {items.length === 1 ? 'platillo seleccionado' : 'platillos seleccionados'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mb-4">
                  <Flame className="w-8 h-8" />
                </div>
                <h4 className="text-white font-heading font-bold text-base mb-1">
                  Tu selección está vacía
                </h4>
                <p className="text-zinc-400 text-xs max-w-xs mb-6">
                  Explora nuestro menú y añade los cortes de Brisket y Costillas que más te apetezcan.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
                >
                  Ver Menú Ahora
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 filter brightness-95"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-heading font-bold text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-amber-400 font-semibold text-xs mt-0.5">
                      ${item.price} MXN c/u
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-white/15 rounded-lg bg-black/40 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-white/10 text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-white/10 text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-white font-heading font-black text-sm">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <span className="text-[10px] text-zinc-500 block">MXN</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-white/10 bg-black/60 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString()} MXN</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Impuestos incluidos:</span>
                  <span className="text-emerald-400">IVA 16% Inc.</span>
                </div>
                <div className="flex items-center justify-between text-base font-heading font-black text-white pt-2 border-t border-white/10">
                  <span>Total Estimado:</span>
                  <span className="text-amber-400 text-lg">
                    ${total.toLocaleString()} MXN
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Pedido por WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 text-xs font-semibold transition-colors"
                >
                  <span>Reservar Mesa con esta Selección</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>

                <button
                  onClick={onClearCart}
                  className="w-full text-center text-[11px] text-zinc-500 hover:text-red-400 transition-colors pt-1"
                >
                  Vaciar Selección
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
