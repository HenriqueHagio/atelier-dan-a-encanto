import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-rose-soft">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-medium/20 to-rose-soft" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary/60"
        >
          Ballet • Jazz • Contemporâneo
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden items-center gap-8 font-body text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 md:flex"
        >
          <a href="#sobre" className="transition-colors hover:text-primary">sobre</a>
          <a href="#modalidades" className="transition-colors hover:text-primary">modalidades</a>
          <a href="#contato" className="transition-colors hover:text-primary">contato</a>
        </motion.div>
      </nav>

      {/* Hero Content - Centered */}
      <div className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Logo / Brand */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl font-light italic text-primary md:text-7xl lg:text-8xl"
          >
            Atelier Dança
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-4 h-px w-24 bg-primary/30"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 font-body text-sm font-medium uppercase tracking-[0.3em] text-foreground/60"
          >
            Arte • Encanto • Magia
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-12 max-w-2xl"
          >
            <p className="font-display text-xl italic leading-relaxed text-foreground/80 md:text-2xl lg:text-3xl">
              "A dança é a linguagem oculta da alma, onde cada movimento conta uma história de arte, encanto e pura magia."
            </p>
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Agende sua Aula
            </Button>
            <Button variant="outline" size="lg">
              Conheça a Escola
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              scroll
            </span>
            <div className="h-8 w-px bg-foreground/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
