import { motion } from "framer-motion";
import { usePurchase } from "@/pages/Index";

const Navbar = () => {
  const { openModal } = usePurchase();
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-display text-xl font-bold text-foreground tracking-tight">
        EXO AI
      </span>
      <div className="flex items-center gap-6">
        <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
          Reviews
        </a>
        <button
          onClick={openModal}
          className="px-5 py-2 bg-foreground text-background font-display text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Purchase
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
