import { motion } from "framer-motion";
import { usePurchase } from "@/pages/Index";

const CTASection = () => {
  const { openModal } = usePurchase();
  return (
    <section className="py-32 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center border border-border rounded-2xl p-12 sm:p-16 bg-card border-glow relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground tracking-tight text-glow">
            Ready to dominate?
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-md mx-auto">
            Join thousands of players already using Exo AI. Set up in minutes.
          </p>
          <button
            onClick={openModal}
            className="inline-block mt-8 px-10 py-4 bg-foreground text-background font-display font-semibold text-sm tracking-wide rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Exo AI Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
