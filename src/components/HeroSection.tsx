import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { usePurchase } from "@/pages/Index";

const HeroSection = () => {
  const { openModal } = usePurchase();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30 fade-mask"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50 fade-mask" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-foreground/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-foreground/5 blur-3xl pointer-events-none" />

      {/* Corner ticks */}
      <div className="absolute top-24 left-6 sm:left-10 hidden sm:flex items-center gap-2 text-xs font-display uppercase tracking-[0.3em] text-muted-foreground z-10">
        <span className="w-8 h-px bg-border" />
        v0.85 beta — live
      </div>
      <div className="absolute top-24 right-6 sm:right-10 hidden sm:flex items-center gap-2 text-xs font-display uppercase tracking-[0.3em] text-muted-foreground z-10">
        EU / NA / OCE
        <span className="w-8 h-px bg-border" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 text-sm text-muted-foreground font-body bg-card/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
            </span>
            Undetected & dominating
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight text-foreground text-glow leading-[0.85]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          EXO <span className="italic font-light text-muted-foreground">AI</span>
        </motion.h1>

        <motion.div
          className="mt-4 flex items-center justify-center gap-3 text-xs font-display uppercase tracking-[0.4em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <span className="h-px w-12 bg-border" />
          Built to dominate
          <span className="h-px w-12 bg-border" />
        </motion.div>

        <motion.p
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          The most advanced AI-powered aim assistance. Smooth tracking, undetectable performance, and insane precision — trusted by hundreds.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={openModal}
            className="group relative px-8 py-3.5 bg-foreground text-background font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-all overflow-hidden"
          >
            <span className="relative z-10">Get Started →</span>
          </button>
          <a
            href="#reviews"
            className="px-8 py-3.5 border border-border text-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-secondary transition-colors"
          >
            See Reviews
          </a>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 max-w-2xl mx-auto border-y border-border divide-x divide-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center py-6">
            <div className="text-3xl sm:text-4xl font-display font-bold text-foreground">UD</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Undetected</div>
          </div>
          <div className="text-center py-6">
            <div className="text-3xl sm:text-4xl font-display font-bold text-foreground">1K+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Users</div>
          </div>
          <div className="text-center py-6">
            <div className="text-3xl sm:text-4xl font-display font-bold text-foreground">24/7</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Support</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
