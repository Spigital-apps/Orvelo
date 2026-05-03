import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail } from 'lucide-react';

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass bg-brand-navy p-10 rounded-[3rem] border border-brand-teal/20 shadow-[0_0_50px_rgba(45,212,191,0.1)] text-center"
            >
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-8 border border-brand-teal/20">
                <Mail className="w-8 h-8 text-brand-teal" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-4">Thank you for your interest in Orvelo.</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8 text-balance">
                Please mail your requirement to <br/>
                <span className="text-brand-teal font-medium select-all">info@orvelo.ai</span>
              </p>
              
              <button 
                onClick={closeModal}
                className="w-full py-4 bg-brand-teal text-brand-navy font-bold rounded-full hover:brightness-110 transition-all"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
