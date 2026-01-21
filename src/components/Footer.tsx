import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 py-16 text-primary-foreground lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-light italic">
              Atelier Dança
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/70">
              Uma escola onde a dança é arte, encanto e magia. Transformando vidas através do movimento desde 2024.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Navegação
            </h4>
            <nav className="mt-6 space-y-3">
              <a href="#sobre" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Sobre Nós
              </a>
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Modalidades
              </a>
              <a href="#contato" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Contato
              </a>
            </nav>
          </div>

          {/* Modalities */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Modalidades
            </h4>
            <nav className="mt-6 space-y-3">
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Ballet
              </a>
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Jazz
              </a>
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Contemporâneo
              </a>
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                Tecido Acrobático
              </a>
              <a href="#modalidades" className="block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                K-pop
              </a>
            </nav>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Atelier Dança. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs text-primary-foreground/50">
              Arte • Encanto • Magia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
