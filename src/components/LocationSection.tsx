import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados em São José do Rio Preto para melhor atender toda a região.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="w-full h-96 bg-muted rounded-xl overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15004.376123456789!2d-49.37675!3d-20.82025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd6a95b0000001%3A0x11111111111111!2sS%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rio Frame"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground">
                Visite nosso escritório ou entre em contato através dos canais abaixo. 
                Estamos prontos para atender seu projeto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua das Estruturas, 123<br />
                    Centro - São José do Rio Preto/SP<br />
                    CEP: 15010-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefones</h4>
                  <p className="text-muted-foreground">
                    (17) 3333-4444<br />
                    (17) 99999-9999 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">
                    contato@rioframe.com.br<br />
                    orcamento@rioframe.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Visite nosso escritório
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Estamos à disposição para uma consulta presencial gratuita.
              </p>
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de agendar uma visita ao escritório da Rio Frame.");
                  window.open(`https://wa.me/5517999999999?text=${message}`, "_blank");
                }}
                className="btn-whatsapp w-full"
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;