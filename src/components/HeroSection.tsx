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
  const images = [heroImage1, heroImage2, heroImage3];

  const [yearsRef, yearsCount] = useCountAnimation({ end: 10, duration: 2000 });
  const [projectsRef, projectsCount] = useCountAnimation({ end: 500, duration: 2500 });
  const [satisfactionRef, satisfactionCount] = useCountAnimation({ end: 100, duration: 2000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay azul semi-transparente */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container-width text-center text-white space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Estruturas em Aço de{" "}
          <span className="text-primary-foreground">Alta Qualidade</span>
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          Rapidez, Qualidade e Atendimento Especializado para seus projetos
          em São José do Rio Preto e região.
        </p>

       {/*} <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("orcamento")}
            className="btn-primary group group py-6 px-7"
            
          >
            Solicite Orçamento
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
    <Button
  onClick={openWhatsApp}
  className="btn-whatsapp group py-6 px-7"
>
    <FaWhatsapp
  className="mr-1"
  style={{ width: "24px", height: "24px", flexShrink: 0 }}
/>
  WhatsApp
</Button>
        </div>*/}

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
