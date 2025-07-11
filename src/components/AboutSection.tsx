import { Clock, Award, Shield, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useCountAnimation } from "@/hooks/useCountAnimation";

const AboutSection = () => {
  // Animações de contagem
  const [yearsRef, yearsCount] = useCountAnimation({ end: 10, duration: 2000 });
  const [projectsRef, projectsCount] = useCountAnimation({ end: 500, duration: 2500 });
  const [companiesRef, companiesCount] = useCountAnimation({ end: 50, duration: 2000 });
  const [satisfactionRef, satisfactionCount] = useCountAnimation({ end: 100, duration: 2000 });

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
      description: "Garantia completa em todos os materiais e serviços."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade dos Materiais",
      description: "Apenas materiais certificados e de primeira linha."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-width">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Rio Frame</span>
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
                  Experiência e Tradição em Estruturas de Aço
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Com mais de uma década de atuação no mercado, a Rio Frame consolidou-se 
                    como referência em estruturas metálicas na região de São José do Rio Preto.
                  </p>
                  <p>
                    Atendemos desde pequenos projetos residenciais até grandes complexos 
                    industriais, sempre com o mesmo compromisso: entregar qualidade superior 
                    e atendimento personalizado.
                  </p>
                  <p>
                    Nossa equipe técnica especializada garante que cada projeto seja executado 
                    com precisão, seguindo as mais rigorosas normas técnicas e de segurança.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl" ref={yearsRef}>
                  <div className="text-3xl font-bold text-primary mb-2">{yearsCount}+</div>
                  <div className="text-sm text-muted-foreground">Anos no Mercado</div>
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