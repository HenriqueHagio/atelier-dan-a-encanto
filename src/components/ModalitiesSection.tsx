import { motion } from "framer-motion";
import modalityBallet from "@/assets/modality-ballet.jpg";
import modalityJazz from "@/assets/modality-jazz.jpg";
import modalityContemporaneo from "@/assets/modality-contemporaneo.jpg";
import modalityTecido from "@/assets/modality-tecido.jpg";
import modalityKpop from "@/assets/modality-kpop.jpg";

const modalities = [
  {
    name: "Ballet",
    description: "A base de toda dança. Técnica clássica, postura e graciosidade em movimentos eternos. Turmas para crianças, adolescentes e adultos.",
    image: modalityBallet,
  },
  {
    name: "Jazz",
    description: "Energia, expressão e liberdade. Movimentos dinâmicos com ritmo e personalidade que exploram a musicalidade do corpo.",
    image: modalityJazz,
  },
  {
    name: "Contemporâneo",
    description: "Arte em movimento livre. Explore emoções através de técnicas modernas e criativas que desafiam os limites do corpo.",
    image: modalityContemporaneo,
  },
  {
    name: "Tecido Acrobático",
    description: "Força e beleza nas alturas. Acrobacia aérea que desafia a gravidade com elegância e desenvolve força e flexibilidade.",
    image: modalityTecido,
  },
  {
    name: "K-pop",
    description: "A febre global! Aprenda coreografias dos seus grupos favoritos com energia contagiante e diversão garantida.",
    image: modalityKpop,
  },
];

const ModalitiesSection = () => {
  return (
    <section id="modalidades" className="bg-rose-soft/50 px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="font-body text-xs font-medium lowercase tracking-[0.3em] text-primary/60">
            modalidades
          </span>
          <h2 className="mt-4 font-display text-4xl font-light italic text-foreground md:text-5xl">
            Encontre sua dança
          </h2>
        </motion.div>

        {/* Modalities - Alternating Layout */}
        <div className="space-y-24">
          {modalities.map((modality, index) => (
            <motion.div
              key={modality.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={modality.image}
                    alt={`Aula de ${modality.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Decorative element */}
                <div 
                  className={`absolute -bottom-4 -z-10 h-full w-full border border-accent/30 ${
                    index % 2 === 1 ? "-left-4" : "-right-4"
                  }`} 
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary/50">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-display text-3xl font-light italic text-foreground md:text-4xl">
                  {modality.name}
                </h3>
                <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                  {modality.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors hover:text-accent">
                  Saiba mais
                  <svg 
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                      index % 2 === 1 ? "rotate-180" : ""
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
