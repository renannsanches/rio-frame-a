import { useState } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    localidade: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para fornecer seu orçamento.",
      });

      setFormData({
        nome: "",
        telefone: "",
        email: "",
        localidade: "",
        mensagem: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `Nome: ${formData.nome || "[Nome]"}\n` +
      `Telefone: ${formData.telefone || "[Telefone]"}\n` +
      `Localidade: ${formData.localidade || "[Localidade]"}\n` +
      `Mensagem: ${formData.mensagem || "[Descreva seu projeto]"}`
    );
    window.open(`https://wa.me/5517999999999?text=${message}`, "_blank");
  };

  return (
    <section id="orcamento" className="section-padding">
      <div className="container-width">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Solicite seu <span className="text-primary">Orçamento</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Preencha o formulário abaixo e receba uma proposta personalizada para seu projeto. 
              Resposta garantida em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card p-8 rounded-2xl shadow-medium border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(17) 99999-9999"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="localidade" className="block text-sm font-medium text-foreground mb-2">
                    Localidade *
                  </label>
                  <Input
                    id="localidade"
                    name="localidade"
                    type="text"
                    required
                    value={formData.localidade}
                    onChange={handleChange}
                    placeholder="Cidade/Estado"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                  Descreva seu Projeto
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto: tipo de estrutura, dimensões, prazo desejado, etc."
                  className="w-full h-32 resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={openWhatsApp}
                  className="btn-whatsapp w-full"
                >
                  Enviar via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fale Diretamente Conosco
              </h3>
              <p className="text-muted-foreground">
                Prefere falar diretamente? Entre em contato pelos nossos canais diretos 
                para um atendimento mais rápido e personalizado.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+5517999999999"
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ligue Agora</h4>
                  <p className="text-muted-foreground">(17) 99999-9999</p>
                  <p className="text-sm text-muted-foreground">Atendimento imediato</p>
                </div>
              </a>

              <a
                href="mailto:contato@rioframe.com.br"
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Envie um E-mail</h4>
                  <p className="text-muted-foreground">contato@rioframe.com.br</p>
                  <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                </div>
              </a>
            </div>

            {/* Guarantees */}
            <div className="bg-secondary/50 p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-4">Nossos Compromissos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Resposta em até 24 horas</li>
                <li>✓ Orçamento sem compromisso</li>
                <li>✓ Visita técnica gratuita</li>
                <li>✓ Materiais de primeira qualidade</li>
                <li>✓ Garantia total nos serviços</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;