import { Clock, Award, Shield, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect';




const AboutSection = () => {
  // Animações de contagem
  const [yearsRef, yearsCount] = useCountAnimation({ end: 98, duration: 2000 });
  const [projectsRef, projectsCount] = useCountAnimation({ end: 500, duration: 2500 });
  const [companiesRef, companiesCount] = useCountAnimation({ end: 50, duration: 2000 });
  const [satisfactionRef, satisfactionCount] = useCountAnimation({ end: 100, duration: 2000 });
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

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapidez na Instalação",
      description: "Prazos otimizados sem comprometer a qualidade do serviço."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atendimento Especializado",
      description: "Equipe técnica qualificada para cada tipo de projeto."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia Total",
      description: "Garantia completa em todos os nossos materiais e serviços."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade dos Materiais",
      description: "Apenas materiais certificados e de primeira linha."
    }
  ];

  return (
    <section
  id="sobre"
  className="section-padding bg-cover bg-center bg-no-repeat"
style={{
  backgroundImage: "url('/assets/bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "500px" // ou o valor que funcionar melhor
}}
>

      <div className="container-width">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto text-center mb-16">
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
        strings: ['SOBRE A RIO FRAME'],
        autoStart: true,
        loop: false,
        deleteSpeed: Infinity,
        delay: 75,
        cursor: ''
      }}
    />
  ) : null}
</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Localizada em São José do Rio Preto (SP), a Rio Frame é especialista em estruturas em aço, 
              atendendo com excelência o mercado residencial, comercial e industrial. Nossa missão é 
              entregar soluções completas em estruturas metálicas com rapidez, qualidade e atendimento diferenciado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div className="service-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Company info */}
        <ScrollReveal animation="fade-up">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-medium border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Excelência e Precisão em Estruturas de Aço
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Rio Frame é referência em soluções em estruturas metálicas, oferecendo qualidade superior, inovação e atendimento personalizado em cada projeto realizado em São José do Rio Preto e região.
                  </p>
                  <p>
                    Atuamos em projetos residenciais, comerciais e industriais, sempre comprometidos em entregar obras sob medida, com materiais de primeira linha e dentro dos prazos estabelecidos.
                  </p>
                  <p>
Contamos com uma equipe técnica altamente capacitada, que garante precisão na execução e total conformidade com as normas técnicas e de segurança do setor.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl" ref={yearsRef}>
                  <div className="text-3xl font-bold text-primary mb-2">{yearsCount}%</div>
                  <div className="text-sm text-muted-foreground">Obras no Prazo</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl" ref={projectsRef}>
                  <div className="text-3xl font-bold text-primary mb-2">{projectsCount}+</div>
                  <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl" ref={companiesRef}>
                  <div className="text-3xl font-bold text-primary mb-2">{companiesCount}+</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl" ref={satisfactionRef}>
                  <div className="text-3xl font-bold text-primary mb-2">{satisfactionCount}%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;