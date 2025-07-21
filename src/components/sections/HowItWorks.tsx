export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta gratuitamente e complete seu perfil de investidor em menos de 5 minutos",
      icon: "👤",
      color: "bg-primary",
      details: [
        "Cadastro simples e rápido",
        "Verificação de documentos online",
        "Perfil de investidor personalizado"
      ]
    },
    {
      number: "02", 
      title: "Escolha Projetos",
      description: "Analise nossos projetos industriais pré-selecionados e escolha o que melhor se adapta ao seu perfil",
      icon: "🏭",
      color: "bg-success",
      details: [
        "Projetos com due diligence completa",
        "Diversas opções de rentabilidade",
        "Informações transparentes"
      ]
    },
    {
      number: "03",
      title: "Invista com Segurança",
      description: "Faça seu aporte via PIX de forma segura e acompanhe o desenvolvimento do seu investimento em tempo real",
      icon: "💰",
      color: "bg-warning",
      details: [
        "Depósitos via PIX instantâneo",
        "Acompanhamento em tempo real",
        "Relatórios mensais detalhados"
      ]
    }
  ]

  const benefits = [
    "🎯 Rentabilidade superior ao CDI",
    "🛡️ Investimentos seguros e auditados",
    "📱 Plataforma 100% digital",
    "📊 Relatórios transparentes",
    "💳 Depósitos e saques via PIX",
    "🏆 Suporte especializado"
  ]

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e transparente para você começar a investir em projetos industriais
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 w-8 h-px bg-border transform translate-x-4 z-0"></div>
                )}
                
                <div className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 p-8 text-center relative z-10 border border-border">
                  {/* Step Number */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center justify-center text-muted-foreground">
                        <span className="w-2 h-2 bg-success rounded-full mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Por que escolher a InvistaTop?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <span className="mr-3 text-xl">{benefit.split(' ')[0]}</span>
                <span className="text-card-foreground font-medium">
                  {benefit.substring(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-white/90 mb-6">
              Junte-se a milhares de investidores que já descobriram uma nova forma de investir
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl hover:bg-white/90 transition-colors transform hover:scale-105">
              Cadastre-se Gratuitamente
            </button>
            <p className="text-white/70 text-sm mt-4">
              ✅ Sem taxas de cadastro • ✅ Sem valor mínimo • ✅ Suporte especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}