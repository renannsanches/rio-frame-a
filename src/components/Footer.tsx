import { Instagram, MapPin, Phone, Mail, Facebook } from "lucide-react";
import rioFrameLogo from "@/assets/rio-frame-logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-width">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <img 
                src={rioFrameLogo} 
                alt="Rio Frame - Estruturas em Aço" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground mb-6 max-w-md">
                Especialistas em estruturas metálicas em São José do Rio Preto. 
                Qualidade, rapidez e atendimento diferenciado para seus projetos.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/rioframe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://www.facebook.com/rioframe.rp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
              <nav className="space-y-3">
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("orcamento")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Orçamento
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Rua General Osório, 1385 - Sala 02
                    Vila Boa Esperança<br /> CEP: 15030-200<br />
                    São José do Rio Preto/SP
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+5517997934402"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (17) 99793-4402
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:contato@rioframe.com.br"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@rioframe.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Rio Frame - Estruturas em Aço. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              São José do Rio Preto - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;