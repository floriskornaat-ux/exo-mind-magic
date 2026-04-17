import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Weekly",
    price: "$5.99",
    period: "/week",
    tag: "01",
    description: "Short-term, test the features",
    features: ["Full AI aim assistance", "All updates included", "Discord support"],
  },
  {
    name: "Lifetime",
    price: "$19.99",
    period: "once",
    tag: "02",
    description: "One-time, full access forever",
    badge: "Best Value",
    features: ["Everything in Weekly", "Lifetime updates", "Priority support", "Early access"],
  },
];

const PurchaseModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleClose = () => {
    setSelectedPlan(null);
    setCopied(false);
    onClose();
  };

  const copyInvite = async () => {
    await navigator.clipboard.writeText("discord.gg/exoai");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const activePlan = plans.find((p) => p.name === selectedPlan);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="w-full max-w-3xl border border-border rounded-2xl bg-card border-glow relative pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative grid + gradient */}
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-foreground/5 blur-3xl pointer-events-none" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-lg leading-none z-20"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="relative z-10 p-8 sm:p-10">
                {selectedPlan ? (
                  <motion.div
                    key="discord"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-2"
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-foreground">Step 02</span>
                      <span className="h-px flex-1 bg-border" />
                      <span>Payment</span>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 text-xs font-body text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                          {activePlan?.name} plan selected
                        </div>
                        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.05]">
                          Finish in <span className="italic text-muted-foreground">Discord.</span>
                        </h2>
                        <p className="mt-3 text-muted-foreground font-body max-w-md">
                          Join our server — a team member will verify your order and unlock Exo AI within minutes.
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-display text-4xl font-bold text-foreground">{activePlan?.price}</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-body">{activePlan?.period}</div>
                      </div>
                    </div>

                    {/* Discord card */}
                    <div className="mt-8 border border-border rounded-xl bg-background/60 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center font-display font-bold text-xl shrink-0">
                          D
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-widest text-muted-foreground font-body">Invite</div>
                          <div className="font-display text-lg font-semibold text-foreground truncate">discord.gg/exoai</div>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={copyInvite}
                          className="px-4 py-2.5 border border-border rounded-lg text-sm font-display font-semibold text-foreground hover:bg-secondary transition-colors"
                        >
                          {copied ? "Copied ✓" : "Copy"}
                        </button>
                        <a
                          href="https://discord.gg/exoai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-foreground text-background font-display text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Join →
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPlan(null)}
                      className="mt-6 text-sm text-muted-foreground hover:text-foreground font-body transition-colors"
                    >
                      ← Back to plans
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="plans"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-foreground">Step 01</span>
                      <span className="h-px flex-1 bg-border" />
                      <span>Choose plan</span>
                    </div>

                    <h2 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.05]">
                      Pick your <span className="italic text-muted-foreground">edge.</span>
                    </h2>
                    <p className="mt-3 text-muted-foreground font-body max-w-md">
                      Two ways in. Both get you the full Exo AI experience — instantly.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {plans.map((plan) => (
                        <div
                          key={plan.name}
                          className="relative border border-border rounded-xl p-6 bg-background/60 hover:border-foreground/40 transition-all group overflow-hidden"
                        >
                          {/* Number tag */}
                          <span className="absolute top-4 right-4 font-display text-xs text-muted-foreground tracking-widest">
                            {plan.tag}
                          </span>
                          {plan.badge && (
                            <span className="absolute -top-px left-6 bg-foreground text-background text-[10px] font-display font-semibold uppercase tracking-widest px-2.5 py-1 rounded-b-md">
                              {plan.badge}
                            </span>
                          )}

                          <h3 className="mt-4 font-display text-lg font-semibold text-foreground uppercase tracking-wide">
                            {plan.name}
                          </h3>
                          <div className="mt-3 flex items-baseline gap-1.5">
                            <span className="font-display text-5xl font-bold text-foreground tracking-tight">{plan.price}</span>
                            {plan.period && (
                              <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">{plan.period}</span>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground font-body">{plan.description}</p>

                          <div className="my-5 h-px bg-border" />

                          <ul className="space-y-2">
                            {plan.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground font-body">
                                <span className="text-foreground mt-0.5">→</span> {f}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => setSelectedPlan(plan.name)}
                            className="mt-6 block w-full text-center py-3 bg-foreground text-background font-display text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider"
                          >
                            Select
                          </button>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-center text-xs text-muted-foreground font-body">
                      Payment completed via Discord — fast, human, secure.
                    </p>
                  </motion.div>
                )}
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
