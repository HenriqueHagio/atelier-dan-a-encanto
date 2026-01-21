import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="bg-background px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
              Comece sua Jornada
            </p>
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              Venha Dançar Conosco
            </h2>
            <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
              Agende uma aula experimental gratuita e descubra a magia de dançar no Atelier Dança. 
              Estamos prontos para receber você de braços abertos.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Endereço</p>
                  <p className="font-body font-medium text-foreground">Rua da Dança, 123 - Centro</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Telefone</p>
                  <p className="font-body font-medium text-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">E-mail</p>
                  <p className="font-body font-medium text-foreground">contato@atelierdanca.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Instagram</p>
                  <p className="font-body font-medium text-foreground">@atelierdanca</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-card p-8 shadow-card lg:p-10"
          >
            <h3 className="mb-6 font-display text-2xl font-medium text-foreground">
              Agende sua Aula Experimental
            </h3>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-foreground">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-body text-sm font-medium text-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="modality" className="mb-2 block font-body text-sm font-medium text-foreground">
                  Modalidade de Interesse
                </label>
                <select
                  id="modality"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Selecione uma modalidade</option>
                  <option value="ballet">Ballet</option>
                  <option value="jazz">Jazz</option>
                  <option value="contemporaneo">Contemporâneo</option>
                  <option value="tecido">Tecido Acrobático</option>
                  <option value="kpop">K-pop</option>
                </select>
              </div>

              <Button variant="primary" size="lg" className="w-full">
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
