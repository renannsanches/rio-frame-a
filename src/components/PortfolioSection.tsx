import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import Typewriter from 'typewriter-effect';
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState("todos");
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
      title: "Galpão Industrial",
      category: "industrial",
      description: "Estrutura metálica completa para galpão industrial de 2.000m²"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Edifício Comercial",
      category: "comercial",
      description: "Estrutura em aço para centro comercial moderno"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Residência Moderna",
      category: "residencial",
      description: "Estrutura metálica para casa residencial contemporânea"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "industrial", label: "Industrial" }
  ];

  const filteredProjects =
    currentCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0
          ? filteredProjects.length - 1
          : selectedImage - 1
      );
    }
  };

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

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={currentCategory === category.id ? "default" : "outline"}
                  onClick={() => setCurrentCategory(category.id)}
                  className={currentCategory === category.id ? "btn-primary" : "btn-outline"}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {filteredProjects[selectedImage].description}
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
