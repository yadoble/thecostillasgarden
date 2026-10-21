import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import DishDetailModal from './components/DishDetailModal';
import OrderDrawer from './components/OrderDrawer';
import { MessageSquare, ShoppingBag, Flame } from 'lucide-react';
import { restaurantInfo } from './data/restaurantInfo';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedDishModal, setSelectedDishModal] = useState(null);
  const [cartItems, setCartItems] = useState([
    // Initialize with 1 brisket and 1 ribs to demonstrate cart immediately if opened
    {
      id: 'brisket-prime',
      name: 'Brisket Insignia 16 Horas',
      price: 395,
      quantity: 1,
      image: '/images/brisket.jpg'
    }
  ]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...dish, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (dishId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(dishId);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === dishId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (dishId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-[#e5e7eb] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenReservation={() => setReservationModalOpen(true)} />
        <AboutSection />
        <MenuSection
          onAddToCart={handleAddToCart}
          onSelectDish={(dish) => setSelectedDishModal(dish)}
          cartItems={cartItems}
        />
        <ExperienceSection onOpenReservation={() => setReservationModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
        onAddToCart={(dish) => {
          handleAddToCart(dish);
          setSelectedDishModal(null);
        }}
        isInCart={selectedDishModal ? cartItems.some((i) => i.id === selectedDishModal.id) : false}
      />

      {/* Order / Selection Cart Drawer */}
      <OrderDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenReservation={() => {
          setCartDrawerOpen(false);
          setReservationModalOpen(true);
        }}
      />

      {/* Floating Action Buttons (Sticky Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Cart Pill (if items > 0) */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setCartDrawerOpen(true)}
            className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-stone-900 border border-amber-500/40 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all group backdrop-blur-md"
            title="Abrir selección de platillos"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <span className="absolute -top-1.5 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-black font-bold text-[10px]">
                {totalCartCount}
              </span>
            </div>
            <span className="text-xs font-heading font-bold uppercase tracking-wider hidden sm:inline">
              Ver Selección
            </span>
          </button>
        )}

        {/* Floating WhatsApp Quick Contact Button */}
        <a
          href={restaurantInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-[#25D366]/30 border-2 border-white/20 p-3.5 group"
          title="Chatear con The Costillas Garden por WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-black" />
        </a>
      </div>
    </div>
  );
}
