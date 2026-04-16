import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { usePurchase } from "@/pages/Index";

const HeroSection = () => {
  const { openModal } = usePurchase();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 text-sm text-muted-foreground font-body">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            Undetected & dominating
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground text-glow leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          EXO AI
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          The most advanced AI-powered aim assistance. Smooth tracking, undetectable performance, and insane precision — trusted by thousands.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={openModal}
            className="px-8 py-3.5 bg-foreground text-background font-display font-semibold text-sm tracking-wide rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
          <a
            href="#reviews"
            className="px-8 py-3.5 border border-border text-foreground font-display font-semibold text-sm tracking-wide rounded-lg hover:bg-secondary transition-colors"
          >
            See Reviews
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-muted-foreground font-body text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-foreground">UD</div>
            <div>Undetected</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-foreground">1K+</div>
            <div>Users</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-foreground">24/7</div>
            <div>Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
