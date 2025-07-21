import { useState, useEffect } from 'react'

export default function Statistics() {
  const [animatedStats, setAnimatedStats] = useState({
    totalInvested: 0,
    activeInvestors: 0,
    completedProjects: 0,
    averageReturn: 0
  })

  const finalStats = {
    totalInvested: 152000000,
    activeInvestors: 2847,
    completedProjects: 23,
    averageReturn: 18.5
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedStats({
        totalInvested: finalStats.totalInvested * easeOut,
        activeInvestors: finalStats.activeInvestors * easeOut,
        completedProjects: finalStats.completedProjects * easeOut,
        averageReturn: finalStats.averageReturn * easeOut
      })
      
      currentStep++
      if (currentStep > steps) {
        clearInterval(interval)
      }
    }, stepDuration)
    
    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const stats = [
    {
      value: formatCurrency(animatedStats.totalInvested),
      label: "Total Investido",
      subtext: "em projetos industriais",
      icon: "💰",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      value: Math.floor(animatedStats.activeInvestors).toLocaleString('pt-BR'),
      label: "Investidores Ativos",
      subtext: "confiando na plataforma",
      icon: "👥",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      value: Math.floor(animatedStats.completedProjects).toString(),
      label: "Projetos Concluídos",
      subtext: "com sucesso garantido",
      icon: "🏆",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      value: `${animatedStats.averageReturn.toFixed(1)}%`,
      label: "Rentabilidade Média",
      subtext: "anual dos investimentos",
      icon: "📈",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ]

  const comparisons = [
    {
      name: "InvistaTop",
      rate: 18.5,
      color: "bg-success",
      description: "Projetos industriais"
    },
    {
      name: "CDI",
      rate: 11.75,
      color: "bg-muted",
      description: "Taxa básica"
    },
    {
      name: "Poupança",
      rate: 6.17,
      color: "bg-muted",
      description: "Investimento tradicional"
    },
    {
      name: "IPCA",
      rate: 4.62,
      color: "bg-destructive/50",
      description: "Inflação oficial"
    }
  ]

  const maxRate = Math.max(...comparisons.map(c => c.rate))

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Números que Impressionam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados concretos de uma plataforma que entrega o que promete
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
              Comparativo de Rentabilidade Anual
            </h3>
            
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-card-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground">({item.description})</span>
                    </div>
                    <span className={`font-bold text-lg ${item.name === 'InvistaTop' ? 'text-success' : 'text-muted-foreground'}`}>
                      {item.rate}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative w-full bg-muted rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-1000 delay-${index * 200}`}
                      style={{ width: `${(item.rate / maxRate) * 100}%` }}
                    ></div>
                    {item.name === 'InvistaTop' && (
                      <div className="absolute -top-8 right-0 bg-success text-success-foreground px-2 py-1 rounded text-xs font-semibold">
                        Líder em rentabilidade
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Vantagem Competitiva */}
            <div className="mt-8 p-6 bg-success/10 rounded-xl border border-success/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">
                  +{(18.5 - 11.75).toFixed(1)} pontos percentuais
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  acima do CDI
                </div>
                <div className="text-sm text-muted-foreground">
                  Isso significa até <span className="font-bold text-success">
                  {(((18.5 / 11.75) - 1) * 100).toFixed(0)}% mais rentabilidade
                  </span> para seus investimentos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Time Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-card rounded-full px-8 py-4 shadow-card border border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-card-foreground">Sistema Online</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-card-foreground">Dados em Tempo Real</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-card-foreground">Supabase Conectado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}