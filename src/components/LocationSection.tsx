import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import Typewriter from 'typewriter-effect';

const LocationSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px"
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
                    strings: ['NOSSA LOCALIZAÇÃO'],
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
              Estamos estrategicamente localizados em São José do Rio Preto para melhor atender toda a região.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <ScrollReveal animation="slide-left">
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-xl overflow-hidden shadow-medium">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.841392484761!2d-49.39177579999999!3d-20.797703599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad0b9ac6be73%3A0x5fec9c0f3f5e7feb!2sRio%20Frame%20%7C%20Estruturas%20em%20A%C3%A7o!5e0!3m2!1spt-BR!2spt!4v1752321629800!5m2!1spt-BR!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Rio Frame"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="slide-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground">
                  Visite nosso escritório ou entre em contato através dos canais abaixo. 
                  Estamos prontos para atender seu projeto.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua General Osório, 1385 | Sala 02<br />
                      Vila Boa Esperança - São José do Rio Preto/SP<br />
                      CEP: 15030-200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefones</h4>
                    <p className="text-muted-foreground space-y-1">
                      <a
                        href="tel:+551732346496"
                        className="text-primary hover:underline transition-colors"
                      >
                        (17) 3234-6496
                      </a>
                      <br />
                      <a
                        href="https://wa.me/5517997934402"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-colors"
                      >
                        (17) 99793-4402 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:contato@rioframe.com.br"
                        className="text-primary hover:underline transition-colors"
                      >
                        contato@rioframe.com.br
                      </a>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda à Sexta: 07h às 17h<br />
                      Sábado: Fechado<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
