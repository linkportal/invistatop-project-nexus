export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      name: "Industrial Park São Paulo",
      location: "Guarulhos, SP",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=500&h=300&fit=crop",
      risk: "Baixo",
      riskColor: "bg-success",
      rentability: "15.2% a.a.",
      timeframe: "18 meses",
      paymentType: "PIX/TED",
      amortization: "Bullet",
      deadline: "2025-12-15",
      progress: 78,
      totalVGV: 45000000,
      capturedAmount: 35100000,
      status: "captando"
    },
    {
      id: 2,
      name: "Complexo Logístico Rio",
      location: "Duque de Caxias, RJ",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=500&h=300&fit=crop",
      risk: "Médio",
      riskColor: "bg-warning",
      rentability: "18.7% a.a.",
      timeframe: "24 meses",
      paymentType: "PIX",
      amortization: "Mensal",
      deadline: "2026-03-20",
      progress: 45,
      totalVGV: 28000000,
      capturedAmount: 12600000,
      status: "captando"
    },
    {
      id: 3,
      name: "Centro de Distribuição MG",
      location: "Contagem, MG",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      risk: "Baixo",
      riskColor: "bg-success",
      rentability: "16.8% a.a.",
      timeframe: "20 meses",
      paymentType: "PIX/TED",
      amortization: "Bullet",
      deadline: "2025-08-30",
      progress: 92,
      totalVGV: 18500000,
      capturedAmount: 17020000,
      status: "iniciado"
    },
    {
      id: 4,
      name: "Hub Industrial Nordeste",
      location: "Camaçari, BA",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      risk: "Médio",
      riskColor: "bg-warning",
      rentability: "19.5% a.a.",
      timeframe: "30 meses",
      paymentType: "PIX",
      amortization: "Trimestral",
      deadline: "2025-04-15",
      progress: 15,
      totalVGV: 65000000,
      capturedAmount: 9750000,
      status: "aguardando"
    }
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oportunidades de investimento em projetos industriais selecionados com alta rentabilidade e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 border border-border overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${project.riskColor}`}>
                    Risco {project.risk}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                    project.status === 'iniciado' ? 'bg-success' : 
                    project.status === 'captando' ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {project.status === 'iniciado' ? 'Iniciado' : 
                     project.status === 'captando' ? 'Captando' : 'Aguardando'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center">
                  <span className="w-4 h-4 mr-2">📍</span>
                  {project.location}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">{project.rentability}</div>
                    <div className="text-xs text-muted-foreground">Rentabilidade</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project.timeframe}</div>
                    <div className="text-xs text-muted-foreground">Prazo</div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pagamento:</span>
                    <span className="font-semibold text-card-foreground">{project.paymentType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amortização:</span>
                    <span className="font-semibold text-card-foreground">{project.amortization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fechamento:</span>
                    <span className="font-semibold text-card-foreground">
                      {new Date(project.deadline).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progresso da Captação</span>
                    <span className="text-sm font-bold text-card-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-success h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
                    <span>{formatCurrency(project.capturedAmount)} captado</span>
                    <span>Meta: {formatCurrency(project.totalVGV)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-colors">
                    Resumo
                  </button>
                  <button className="px-3 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-colors">
                    Captação
                  </button>
                  <button className="px-3 py-2 text-xs bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Investir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:shadow-hover transition-all transform hover:scale-105">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  )
}