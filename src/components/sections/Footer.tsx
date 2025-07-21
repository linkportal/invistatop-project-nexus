export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Produtos",
      links: [
        "Projetos Industriais",
        "Simulador de Investimentos", 
        "Portfolio Inteligente",
        "Relatórios"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nós",
        "Nossa Equipe",
        "Compliance",
        "Auditoria"
      ]
    },
    {
      title: "Suporte",
      links: [
        "Central de Ajuda",
        "FAQ",
        "Chat Online",
        "Contato"
      ]
    },
    {
      title: "Legal",
      links: [
        "Termos de Uso",
        "Política de Privacidade",
        "LGPD",
        "Regulamentações"
      ]
    }
  ]

  const socialIcons = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" }
  ]

  return (
    <footer className="bg-gradient-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">I</span>
              </div>
              <div>
                <span className="text-2xl font-bold">InvistaTop</span>
                <div className="text-white/70 text-sm">Sistema V8</div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-sm">
              Plataforma líder em investimentos industriais no Brasil. 
              Conectando investidores a oportunidades de alta rentabilidade com segurança e transparência.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Fique por dentro das melhores oportunidades
            </h3>
            <p className="text-white/80 mb-6">
              Receba informações exclusivas sobre novos projetos e oportunidades de investimento
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para revolucionar seus investimentos?
            </h3>
            <p className="text-white/90 mb-6">
              Junte-se a milhares de investidores inteligentes que já escolheram a InvistaTop
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-success text-success-foreground font-bold text-lg rounded-xl hover:bg-success/90 transition-colors">
                Começar Agora
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} InvistaTop. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-white/70">Sistema V8 Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-white/70">Supabase: {new Date().toLocaleTimeString('pt-BR')}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white/70 text-sm">
              <span>🔒 SSL Seguro</span>
              <span>•</span>
              <span>🛡️ LGPD Compliance</span>
              <span>•</span>
              <span>🏆 CVM Regulamentado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}