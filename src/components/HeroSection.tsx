import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroDancer from "@/assets/hero-dancer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDancer}
          alt="Bailarina em pose elegante"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-soft/90 via-rose-soft/70 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl font-semibold text-primary lg:text-3xl"
        >
          Atelier Dança
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden items-center gap-8 font-body text-sm font-medium tracking-wide text-foreground/80 md:flex"
        >
          <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
          <a href="#modalidades" className="transition-colors hover:text-primary">Modalidades</a>
          <a href="#contato" className="transition-colors hover:text-primary">Contato</a>
          <Button variant="primary" size="sm">
            Agende sua Aula
          </Button>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-6 lg:px-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary/70"
          >
            A Magia da Dança
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-display text-5xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl">
              Apresentamos a Dança como{" "}
              <span className="inline-block bg-primary px-4 py-2 text-primary-foreground">
                a Melhor Parte da Vida
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-lg font-body text-lg text-muted-foreground"
          >
            No Atelier Dança, transformamos movimento em arte, criando experiências 
            mágicas através do Ballet, Jazz, Contemporâneo, Tecido Acrobático e K-pop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg">
              Conheça Nossas Aulas
            </Button>
            <Button variant="outline" size="lg">
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-accent blur-3xl lg:right-40"
      />
    </section>
  );
};

export default HeroSection;
