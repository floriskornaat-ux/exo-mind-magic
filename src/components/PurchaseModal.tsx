import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Weekly",
    price: "$5.99",
    period: "/week",
    description: "Short-term, test the features",
    features: ["Full AI aim assistance", "All updates included", "Discord support"],
  },
  {
    name: "Lifetime",
    price: "$19.99",
    period: "",
    description: "One-time, full access forever",
    badge: "Best Value",
    features: ["Everything in Weekly", "Lifetime updates", "Priority support", "Early access to new features"],
  },
];

const PurchaseModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full max-w-2xl border border-border rounded-2xl bg-card p-8 border-glow relative pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-xl leading-none z-10"
                aria-label="Close"
              >
                ✕
              </button>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Choose your plan
              </h2>
              <p className="mt-2 text-muted-foreground font-body text-center text-sm">
                Select what works best for you.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="relative border border-border rounded-xl p-6 bg-background hover:border-muted-foreground/40 transition-colors group"
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-display font-semibold px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-sm text-muted-foreground font-body">{plan.period}</span>}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground font-body">{plan.description}</p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground font-body">
                          <span className="text-foreground">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="mt-6 block w-full text-center py-3 bg-foreground text-background font-display text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Get {plan.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const usePurchaseModal = () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
    PurchaseModal: () => <PurchaseModal open={open} onClose={() => setOpen(false)} />,
  };
};

export default PurchaseModal;
