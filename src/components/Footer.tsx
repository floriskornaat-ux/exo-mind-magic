const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-semibold text-foreground">EXO AI</span>
        <span className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Exo AI. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
