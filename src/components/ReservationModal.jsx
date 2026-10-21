import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { restaurantInfo } from '../data/restaurantInfo';

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = Form, 2 = Confirmed
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '4',
    zone: 'Terraza con Fogata',
    occasion: 'Reunión con amigos / familia',
    notes: ''
  });
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const times = [
    '13:30', '14:30', '15:30', '17:00', '18:30', '19:30', '20:30', '21:30'
  ];

  const zones = [
    { id: 'Terraza con Fogata', name: 'Terraza con Fogata', desc: 'Al aire libre, cálido y acogedor' },
    { id: 'Salón Principal', name: 'Salón Principal Pit', desc: 'Climatizado, vista al smoker pit' },
    { id: 'Barra de Mixología', name: 'Barra Craft', desc: 'Frente a las líneas de cerveza artesanal' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `TCG-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setStep(2);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#d97706', '#ffffff', '#cbd5e1']
    });
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola The Costillas Garden! 🥩🔥 Acabo de generar mi reserva.\n\n` +
      `Código: ${confirmationCode}\n` +
      `Nombre: ${formData.name}\n` +
      `Fecha: ${formData.date}\n` +
      `Hora: ${formData.time} hrs\n` +
      `Comensales: ${formData.guests} personas\n` +
      `Zona: ${formData.zone}\n` +
      `Ocasión: ${formData.occasion}\n` +
      (formData.notes ? `Notas: ${formData.notes}\n` : '') +
      `\n¿Me confirman la mesa, por favor? ¡Gracias!`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0f1117] border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 text-left my-8">
        {/* Top Metallic Border Header */}
        <div className="bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white uppercase tracking-wider">
                Reserva Tu Mesa En El Jardín
              </h3>
              <p className="text-zinc-400 text-xs">
                The Costillas Garden • Sin costo de reservación
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Guest & Zone Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Hora
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {times.map((t) => (
                    <option key={t} value={t} className="bg-[#161922]">
                      {t} hrs
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Personas
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, '15+'].map((g) => (
                    <option key={g} value={g} className="bg-[#161922]">
                      {g} {g === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Zone Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Preferencia de Zona
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {zones.map((z) => (
                  <button
                    type="button"
                    key={z.id}
                    onClick={() => setFormData({ ...formData, zone: z.id })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.zone === z.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-white/10 bg-[#161922] text-zinc-400 hover:border-white/20'
                    }`}
                  >
                    <p className="text-xs font-bold text-white mb-0.5">{z.name}</p>
                    <p className="text-[10px] text-zinc-400 leading-tight">{z.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ej. Carlos Mendoza"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Ej. 33 1234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Occasion & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Motivo de Visita
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Reunión con amigos / familia">Reunión con amigos / familia</option>
                  <option value="Celebración de Cumpleaños">Celebración de Cumpleaños 🎉</option>
                  <option value="Cena Romántica">Cena Romántica 🍷</option>
                  <option value="Comida de Negocios">Comida de Negocios</option>
                  <option value="Solo antojo de BBQ Prime">Solo antojo del mejor BBQ 🥩</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Notas Especiales (Opcional)
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="Ej. Silla para bebé, alergia a nueces..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-heading font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Completar Solicitud de Reserva
            </button>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Código: {confirmationCode}
              </span>
              <h4 className="font-heading font-black text-2xl text-white uppercase mt-3">
                ¡Mesa Solicitada con Éxito!
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
                Hola <strong className="text-white">{formData.name}</strong>, hemos registrado tu solicitud para el{' '}
                <strong className="text-white">{formData.date}</strong> a las{' '}
                <strong className="text-white">{formData.time} hrs</strong> ({formData.guests} personas).
              </p>
            </div>

            {/* Reservation Summary Box */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <p className="text-zinc-400">
                <span className="text-zinc-500 font-medium">Zona:</span> <strong className="text-zinc-200">{formData.zone}</strong>
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-500 font-medium">Ocasión:</span> <strong className="text-zinc-200">{formData.occasion}</strong>
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-500 font-medium">Teléfono:</span> <strong className="text-zinc-200">{formData.phone}</strong>
              </p>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar Inmediatamente por WhatsApp</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
