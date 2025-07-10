import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      company: "Silva Construções",
      text: "Excelente trabalho da Rio Frame. Entregaram nossa estrutura no prazo e com qualidade impecável. Recomendo para qualquer projeto.",
      rating: 5
    },
    {
      id: 2,
      name: "Marina Santos",
      company: "Arquitetura Santos",
      text: "Profissionais muito competentes. O atendimento foi personalizado e o resultado superou nossas expectativas. Parceira de confiança.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      company: "Indústria RO",
      text: "A Rio Frame executou a estrutura do nosso galpão industrial com muita precisão. Equipe técnica de alto nível e materiais de primeira qualidade.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="service-card relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Seja o próximo cliente satisfeito
            </h3>
            <p className="text-muted-foreground mb-8">
              Junte-se aos nossos clientes satisfeitos e tenha a garantia de um trabalho 
              executado com excelência e dentro do prazo.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("orcamento");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;