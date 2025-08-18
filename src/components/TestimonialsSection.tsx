import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import Typewriter from 'typewriter-effect';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      company: "Silva Construções",
      text: "Excelente trabalho da Rio Frame. Entregaram nossa estrutura no prazo e com qualidade impecável. Recomendo para qualquer projeto.",
      rating: 5,
      photo: "/assets/carlos.png",
    },
    {
      id: 2,
      name: "Marina Santos",
      company: "Arquitetura Santos",
      text: "Profissionais muito competentes. O atendimento foi personalizado e o resultado superou nossas expectativas. Parceira de confiança.",
      rating: 5,
      photo: "/assets/marina.png",
    },
    {
      id: 3,
      name: "Roberta Oliveira",
      company: "Indústria RO",
      text: "A Rio Frame executou a estrutura do nosso galpão industrial com muita precisão. Equipe técnica de alto nível e materiais de primeira qualidade.",
      rating: 5,
      photo: "/assets/roberta.png",
    }
  ];

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
                    strings: ['O QUE NOSSOS CLIENTES DIZEM'],
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
              A satisfação dos nossos clientes é o nosso maior orgulho. Veja alguns depoimentos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} animation="fade-up" delay={index * 150}>
              <div className="service-card relative p-6">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>

                {testimonial.photo && (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full absolute bottom-4 right-4 border-2 border-white shadow"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
