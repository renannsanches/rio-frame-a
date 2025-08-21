import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import heroImage1 from "@/assets/hero-construction.jpg";
import heroImage2 from "@/assets/hero-construction-2.jpg";
import heroImage3 from "@/assets/hero-construction-3.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Dados dos slides
  const slides = [
    {
      image: heroImage1,
      title: "Estruturas em Aço de",
      highlight: "Alta Qualidade",
      description: "Projetos sob medida com rapidez, materiais de primeira linha e atendimento técnico em Rio Preto e região."
    },
    {
      image: heroImage2,
      title: "Atendimento que Vai",
      highlight: "Além da Obra",
      description: "Na Rio Frame, cada projeto começa com escuta ativa e termina com um cliente satisfeito. Do orçamento à instalação, você é prioridade."
    },
    {
      image: heroImage3,
      title: "Aqui, Qualidade Não é Promessa,",
      highlight: "é Procedimento",
      description: "Só trabalhamos com materiais certificados, fornecedores confiáveis e mão de obra qualificada em todas as etapas."
    }
  ];

  const [yearsRef, yearsCount] = useCountAnimation({ end: 10, duration: 2000 });
  const [projectsRef, projectsCount] = useCountAnimation({ end: 450, duration: 2500 });
  const [satisfactionRef, satisfactionCount] = useCountAnimation({ end: 100, duration: 2000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 300); // Meio da transição para trocar o conteúdo
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar um orçamento para estruturas em aço."
    );
    window.open(`https://wa.me/5517997934402?text=${message}`, "_blank");
  };

  const currentSlide = slides[currentImageIndex];

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      {/* Overlay azul semi-transparente */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container-width text-center text-white space-y-8">
        {/* Título animado que muda com os slides */}
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            {currentSlide.title}{" "}
            <span className="text-primary-foreground">{currentSlide.highlight}</span>
          </h1>
        </div>
        
        {/* Descrição animada que muda com os slides */}
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-xl text-white/90 leading-relaxed">
            {currentSlide.description}
          </p>
        </div>

        {/* Indicadores de slide */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              title={`Slide ${index + 1}`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-primary-foreground' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Botões de ação (descomentados) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("orcamento")}
            className="btn-primary group group py-6 px-7"
          >
            Solicite Orçamento
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
   <Button
  onClick={openWhatsApp}
  className="bg-[#25D366] hover:bg-[#128C7E] text-white group py-6 px-7 rounded-lg font-semibold transition-colors duration-200"
>
  <FaWhatsapp
    className="mr-1"
    style={{ width: "24px", height: "24px", flexShrink: 0 }}
  />
  WhatsApp
</Button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-8 pt-6 border-t border-white/30 mt-8">
          <div className="text-center" ref={yearsRef}>
            <div className="text-2xl font-bold text-white">{yearsCount}+</div>
            <div className="text-sm text-white/70">Anos de Garantia</div>
          </div>
          <div className="text-center" ref={projectsRef}>
            <div className="text-2xl font-bold text-white">{projectsCount}+</div>
            <div className="text-sm text-white/70">Projetos Realizados</div>
          </div>
          <div className="text-center" ref={satisfactionRef}>
            <div className="text-2xl font-bold text-white">{satisfactionCount}%</div>
            <div className="text-sm text-white/70">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;