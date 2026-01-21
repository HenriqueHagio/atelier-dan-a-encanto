import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-primary">
              Atelier Dança
            </h3>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Arte • Encanto • Magia
            </p>
          </div>

          <div className="flex items-center gap-8 font-body text-sm text-muted-foreground">
            <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
            <a href="#modalidades" className="transition-colors hover:text-primary">Modalidades</a>
            <a href="#contato" className="transition-colors hover:text-primary">Contato</a>
          </div>

          <p className="flex items-center gap-1 font-body text-sm text-muted-foreground">
            Feito com <Heart className="h-4 w-4 text-accent" fill="currentColor" /> para a dança
          </p>
        </motion.div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Atelier Dança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
