import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import heroImage1 from "@/assets/hero-construction.jpg";
import heroImage2 from "@/assets/hero-construction-2.jpg";
import heroImage3 from "@/assets/hero-construction-3.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];
  
  // Animações de contagem
  const [yearsRef, yearsCount] = useCountAnimation({ end: 10, duration: 2000 });
  const [projectsRef, projectsCount] = useCountAnimation({ end: 500, duration: 2500 });
  const [satisfactionRef, satisfactionCount] = useCountAnimation({ end: 100, duration: 2000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % 2); // Alterna entre as 2 imagens de fundo
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para estruturas em aço.");
    window.open(`https://wa.me/5517999999999?text=${message}`, "_blank");
  };

  return (
    <section className={`${currentBgIndex === 0 ? 'hero-bg' : 'hero-bg-2'} section-padding min-h-[80vh] flex items-center`}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Estruturas em Aço de{" "}
                <span className="text-primary">Alta Qualidade</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rapidez, Qualidade e Atendimento Especializado para seus projetos
                em São José do Rio Preto e região.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("orcamento")}
                className="btn-primary group"
                size="lg"
              >
                Solicite Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={openWhatsApp}
                className="btn-whatsapp group"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-border/50">
              <div className="text-center" ref={yearsRef}>
                <div className="text-2xl font-bold text-primary">{yearsCount}+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center" ref={projectsRef}>
                <div className="text-2xl font-bold text-primary">{projectsCount}+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="text-center" ref={satisfactionRef}>
                <div className="text-2xl font-bold text-primary">{satisfactionCount}%</div>
                <div className="text-sm text-muted-foreground">Garantia</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Estruturas em aço Rio Frame ${index + 1}`}
                  className={`w-full h-[500px] object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Qualidade Garantida</div>
                  <div className="text-sm text-muted-foreground">Materiais certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;