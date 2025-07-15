import { useEffect, useRef, useState } from "react";
import { Building, Home, Factory, Wrench, Layers, Square } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";
import Typewriter from 'typewriter-effect';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Estruturas Galvanizadas",
      description:
        "Perfis galvanizados para telhados com alta resistência à corrosão e durabilidade superior."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Telhas Termoacústicas",
      description:
        "Telhas com isolamento térmico e acústico para máximo conforto e eficiência energética."
    },
    {
      icon: <Square className="h-8 w-8" />,
      title: "Perfis para Drywall",
      description:
        "Perfis metálicos de alta qualidade para sistemas de drywall e paredes divisórias."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Gesso Acartonado",
      description:
        "Sistemas completos de gesso acartonado para acabamentos internos modernos."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Sistemas PVC",
      description:
        "Perfis e acessórios em PVC para vedação e acabamentos diversos."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Divisórias e Glasroc",
      description:
        "Sistemas completos para instalação em Glasroc, REVID e divisórias técnicas."
    }
  ];

  return (
    <section
      id="servicos"
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg.png')",
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
                    strings: ['NOSSOS SERVIÇOS'],
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
              Oferecemos soluções completas em estruturas metálicas para atender
              construtoras, arquitetos, engenheiros e consumidores finais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="service-card group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div className="mt-16 text-center">
            <div
              className="relative rounded-2xl overflow-hidden text-center p-8 lg:p-12 min-h-[300px] flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Overlay semi-transparente */}
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Precisa de um Projeto Personalizado?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Nossa equipe técnica desenvolve soluções sob medida para suas necessidades específicas.
                  Entre em contato e solicite uma consulta gratuita.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("orcamento");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Solicitar Consulta Gratuita
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
