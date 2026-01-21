import { motion } from "framer-motion";
import heroDancer from "@/assets/hero-dancer.jpg";

const ValuesSection = () => {
  return (
    <section id="sobre" className="bg-background px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-medium lowercase tracking-[0.3em] text-primary/60">
            sobre nós
          </span>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroDancer}
                alt="Bailarina em pose elegante"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-primary/20" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <h2 className="font-display text-4xl font-light italic text-foreground md:text-5xl">
              Uma escola onde a dança é arte, encanto e magia
            </h2>
            
            <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                O <strong className="text-foreground">Atelier Dança</strong> nasceu do sonho de criar um espaço 
                onde cada aluno pudesse descobrir a beleza do movimento e a expressão artística através da dança.
              </p>
              <p>
                Acreditamos que a dança vai além da técnica — é uma jornada de autoconhecimento, 
                disciplina e alegria. Nossos valores de <em>arte, encanto e magia</em> guiam cada 
                aula, cada coreografia, cada momento compartilhado em nosso espaço.
              </p>
              <p>
                Com profissionais dedicados e apaixonados, oferecemos aulas de Ballet, Jazz, 
                Contemporâneo, Tecido Acrobático e K-pop para todas as idades e níveis.
              </p>
            </div>

            {/* Values List */}
            <div className="mt-10 flex flex-wrap gap-6">
              {["Arte", "Encanto", "Magia"].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-display text-xl italic text-primary">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
