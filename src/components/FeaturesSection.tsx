import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Aim",
    description: "Advanced neural network tracking that adapts to your playstyle. Smooth, precise, and deadly.",
    icon: "◎",
  },
  {
    title: "Undetected",
    description: "Continuously updated to stay ahead of anti-cheat. Play tournaments, ranked, and cash cups with confidence.",
    icon: "◇",
  },
  {
    title: "Buttery Smooth",
    description: "Runs flawlessly on mid-range to high-end PCs. Zero stutters, zero lag — pure performance.",
    icon: "△",
  },
  {
    title: "Elite Support",
    description: "Dedicated team ready to help you set up and optimize. Fast responses, real humans.",
    icon: "□",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Why Exo AI?
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Built different. Designed to dominate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group border border-border rounded-xl p-8 bg-card hover:border-muted-foreground/30 transition-colors border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl font-display text-foreground">{feature.icon}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
