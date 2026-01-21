import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="bg-background px-6 py-24 lg:px-16">
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
            contato
          </span>
          <h2 className="mt-4 font-display text-4xl font-light italic text-foreground md:text-5xl">
            Venha nos conhecer
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base text-muted-foreground">
            Agende uma aula experimental gratuita e descubra a magia de dançar no Atelier Dança.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Endereço</p>
                <p className="mt-1 font-body text-base text-foreground">
                  Rua da Dança, 123 - Centro<br />
                  São Paulo - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Telefone / WhatsApp</p>
                <p className="mt-1 font-body text-base text-foreground">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">E-mail</p>
                <p className="mt-1 font-body text-base text-foreground">contato@atelierdanca.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Horário</p>
                <p className="mt-1 font-body text-base text-foreground">
                  Segunda a Sexta: 9h às 21h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Instagram className="h-4 w-4" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Instagram</p>
                <a 
                  href="https://instagram.com/atelierdanca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-body text-base text-primary hover:text-accent"
                >
                  @atelierdanca
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border bg-card p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-light italic text-foreground">
              Agende sua aula experimental
            </h3>

            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="modality" className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Modalidade de interesse
                </label>
                <select
                  id="modality"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none"
                >
                  <option value="">Selecione uma modalidade</option>
                  <option value="ballet">Ballet</option>
                  <option value="jazz">Jazz</option>
                  <option value="contemporaneo">Contemporâneo</option>
                  <option value="tecido">Tecido Acrobático</option>
                  <option value="kpop">K-pop</option>
                </select>
              </div>

              <Button variant="primary" size="lg" className="mt-4 w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
