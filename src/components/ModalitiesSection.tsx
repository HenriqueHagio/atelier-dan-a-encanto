import { motion } from "framer-motion";
import { Music, Sparkles, Wind, Ribbon, Disc } from "lucide-react";

const modalities = [
  {
    icon: Sparkles,
    name: "Ballet",
    description: "A base de toda dança. Técnica clássica, postura e graciosidade em movimentos eternos.",
    color: "from-rose-medium/50 to-accent/30",
  },
  {
    icon: Music,
    name: "Jazz",
    description: "Energia, expressão e liberdade. Movimentos dinâmicos com ritmo e personalidade.",
    color: "from-accent/40 to-purple-light/20",
  },
  {
    icon: Wind,
    name: "Contemporâneo",
    description: "Arte em movimento livre. Explore emoções através de técnicas modernas e criativas.",
    color: "from-purple-light/30 to-rose-medium/40",
  },
  {
    icon: Ribbon,
    name: "Tecido Acrobático",
    description: "Força e beleza nas alturas. Acrobacia aérea que desafia a gravidade com elegância.",
    color: "from-magic-pink/30 to-accent/40",
  },
  {
    icon: Disc,
    name: "K-pop",
    description: "A febre global! Aprenda coreografias dos seus grupos favoritos com energia contagiante.",
    color: "from-accent/30 to-magic-pink/40",
  },
];

const ModalitiesSection = () => {
  return (
    <section id="modalidades" className="bg-secondary/30 px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
            Nossas Modalidades
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            Encontre sua Dança
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
            Do clássico ao contemporâneo, oferecemos uma variedade de estilos para todas as idades e níveis.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((modality, index) => (
            <motion.div
              key={modality.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${modality.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-card">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <modality.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-3 font-display text-2xl font-medium text-foreground">
                  {modality.name}
                </h3>
                
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {modality.description}
                </p>

                <div className="mt-6 flex items-center font-body text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-2">
                  Saiba mais
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
