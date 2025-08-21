import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import Typewriter from 'typewriter-effect';
import portfolio1 from "@/assets/portfolio-4.jpg";
import portfolio2 from "@/assets/portfolio-7.jpg";
import portfolio3 from "@/assets/portfolio-9.jpg";
import portfolio4 from "@/assets/portfolio-7.jpg";
import portfolio5 from "@/assets/portfolio-8.jpg";
import portfolio6 from "@/assets/portfolio-9.jpg";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      image: portfolio1,
      title: "Estrutura Metálica",
      description: "Segurança e economia a longo prazo"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Perfis Galvanizados",
      description: "Durabilidade e resistência para estruturas metálicas"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Telhas Termoacústicas",
      description: "Telhas com isolamento térmico e acústico para diversos tipos de obras"
    },
    /*{
      id: 4,
      image: portfolio4,
      title: "",
      description: "Estrutura metálica para complexo industrial de grande porte"
    },
    {
      id: 5,
      image: portfolio5,
      title: "Shopping Center",
      description: "Estrutura em aço para centro de compras moderno"
    },
    {
      id: 6,
      image: portfolio6,
      title: "Telhas Termoacústicas",
      description: "Telhas com isolamento térmico e acústico para diversos tipos de obras"
    }*/
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const prevModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? projects.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg3.png')",
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
                    strings: ['PROJETOS REALIZADOS'],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: Infinity,
                    delay: 75,
                    cursor: ''
                  }}
                />
              ) : null}
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Conheça alguns dos nossos projetos executados com excelência e qualidade técnica.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Projetos - 3 em cima, 3 embaixo */}
        <div className="space-y-8">
          {/* Primeira linha - 3 projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
                <div
                  className="group cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-medium group-hover:shadow-strong transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-200">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Segunda linha - 3 projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(3, 6).map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={(index + 3) * 100}>
                <div
                  className="group cursor-pointer"
                  onClick={() => openModal(index + 3)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-medium group-hover:shadow-strong transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-200">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevModalImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextModalImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <img
                src={projects[selectedImage].image}
                alt={projects[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  {projects[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {projects[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;