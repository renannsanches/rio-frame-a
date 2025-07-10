import { Building, Home, Factory, Wrench, Layers, Square } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Estruturas Galvanizadas",
      description: "Perfis galvanizados para telhados com alta resistência à corrosão e durabilidade superior."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Telhas Termoacústicas",
      description: "Telhas com isolamento térmico e acústico para máximo conforto e eficiência energética."
    },
    {
      icon: <Square className="h-8 w-8" />,
      title: "Perfis para Drywall",
      description: "Perfis metálicos de alta qualidade para sistemas de drywall e paredes divisórias."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Gesso Acartonado",
      description: "Sistemas completos de gesso acartonado para acabamentos internos modernos."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Sistemas PVC",
      description: "Perfis e acessórios em PVC para vedação e acabamentos diversos."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Divisórias e Glasroc",
      description: "Sistemas completos para instalação em Glasroc, REVID e divisórias técnicas."
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-width">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
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
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;