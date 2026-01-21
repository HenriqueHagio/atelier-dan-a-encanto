import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Arte",
    description: "Cada movimento é uma expressão artística única, onde corpo e alma se encontram em perfeita harmonia.",
  },
  {
    icon: Heart,
    title: "Encanto",
    description: "Criamos um ambiente mágico onde cada aluno descobre o encanto de dançar e se expressar livremente.",
  },
  {
    icon: Star,
    title: "Magia",
    description: "A dança é magia pura - transformamos sonhos em realidade através do movimento e da dedicação.",
  },
];

const ValuesSection = () => {
  return (
    <section id="sobre" className="bg-background px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
            Nossos Valores
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            O que nos Move
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-500 hover:shadow-elevated"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-500 group-hover:scale-110">
                  <value.icon className="h-7 w-7" />
                </div>
                
                <h3 className="mb-4 font-display text-2xl font-medium text-foreground">
                  {value.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
