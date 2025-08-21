import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

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

  const [showTypewriter, setShowTypewriter] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTypewriter(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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

  const handleWhatsApp = () => {
    const form = formRef.current;
    if (!form?.reportValidity()) {
      return;
    }

    const phone = "5517997934402";
    const { nome, telefone, localidade, mensagem, email } = formData;

    const text = encodeURIComponent(
      `Olá! Meu nome é ${nome}.\n` +
      `Telefone: ${telefone}\n` +
      `E-mail: ${email}\n` +
      `Localidade: ${localidade}\n` +
      `Mensagem: ${mensagem}`
    );

    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="orcamento"
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}
    >
      <div className="container-width">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="
                inline-block 
                bg-[#1E4C5C] 
                text-white 
                text-4xl 
                font-normal 
                uppercase 
                tracking-wide 
                px-4 
                py-2
                mb-6
              "
              style={{ fontFamily: "'Greater Theory', sans-serif" }}
            >
              {showTypewriter ? (
                <Typewriter
                  options={{
                    strings: ['SOLICITE SEU ORÇAMENTO'],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: Infinity,
                    delay: 75,
                    cursor: ''
                  }}
                />
              ) : null}
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Bairro ou Cidade"
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
                      Enviar via E-mail
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] btn-whatsapp w-full flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-white-500" />
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
                href="tel:+551732346496"
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ligue Agora</h4>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+551732346496"
                      className="text-primary hover:underline transition-colors"
                    >
                      (17) 3234-6496
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Atendimento imediato
                  </p>
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
              <h4 className="font-bold text-foreground mb-4">Nossos Compromissos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <img src="/assets/check.webp" alt="Check" className="w-4 h-4" />
                  Resposta em até 24 horas úteis
                </li>
                <li className="flex items-center gap-2">
                  <img src="/assets/check.webp" alt="Check" className="w-4 h-4" />
                  Atendimento personalizado
                </li>
                <li className="flex items-center gap-2">
                  <img src="/assets/check.webp" alt="Check" className="w-4 h-4" />
                  Orçamento gratuito e sem compromisso
                </li>
                <li className="flex items-center gap-2">
                  <img src="/assets/check.webp" alt="Check" className="w-4 h-4" />
                  Visita técnica especializada sem custo adicional
                </li>
                <li className="flex items-center gap-2">
                  <img src="/assets/check.webp" alt="Check" className="w-4 h-4" />
                  Garantia contratual em todos os serviços e produtos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
