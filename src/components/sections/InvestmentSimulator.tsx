import { useState, useEffect } from 'react'

export default function InvestmentSimulator() {
  const [investmentAmount, setInvestmentAmount] = useState(10000)
  const [selectedProject, setSelectedProject] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    monthly: 0,
    total: 0,
    profit: 0
  })

  const projects = [
    { name: "Industrial Park SP", rate: 15.2, months: 18 },
    { name: "Complexo Logístico RJ", rate: 18.7, months: 24 },
    { name: "Centro Distribuição MG", rate: 16.8, months: 20 }
  ]

  const calculateReturns = () => {
    const project = projects[selectedProject]
    const monthlyRate = project.rate / 100 / 12
    const totalMonths = project.months
    
    // Juros compostos
    const totalAmount = investmentAmount * Math.pow(1 + monthlyRate, totalMonths)
    const profit = totalAmount - investmentAmount
    const monthlyProfit = profit / totalMonths

    return {
      monthly: monthlyProfit,
      total: totalAmount,
      profit: profit
    }
  }

  useEffect(() => {
    const returns = calculateReturns()
    
    // Animação dos valores
    const duration = 1000
    const steps = 50
    const stepDuration = duration / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedValues({
        monthly: returns.monthly * easeOut,
        total: returns.total * easeOut + investmentAmount * (1 - easeOut),
        profit: returns.profit * easeOut
      })
      
      currentStep++
      if (currentStep > steps) {
        clearInterval(interval)
      }
    }, stepDuration)
    
    return () => clearInterval(interval)
  }, [investmentAmount, selectedProject])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const cdiRate = 11.75 // Taxa CDI atual
  const poupancaRate = 6.17 // Taxa Poupança atual
  const selectedRate = projects[selectedProject].rate

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simule seu Investimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja quanto você pode ganhar investindo em nossos projetos industriais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
            <div className="bg-gradient-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Calculadora de Investimentos</h3>
              
              {/* Input de Valor */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Valor do Investimento
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60">R$</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="10.000"
                    min="1000"
                    step="1000"
                  />
                </div>
              </div>

              {/* Seleção de Projeto */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Escolha o Projeto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {projects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedProject === index
                          ? 'border-white bg-white/20 text-white'
                          : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-semibold text-sm">{project.name}</div>
                      <div className="text-xl font-bold">{project.rate}% a.a.</div>
                      <div className="text-xs">{project.months} meses</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-success/10 rounded-xl border border-success/20">
                  <div className="text-3xl font-bold text-success mb-2">
                    {formatCurrency(animatedValues.monthly)}
                  </div>
                  <div className="text-sm text-muted-foreground">Rendimento Mensal Médio</div>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatCurrency(animatedValues.total)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total ao Final</div>
                </div>
                
                <div className="text-center p-6 bg-warning/10 rounded-xl border border-warning/20">
                  <div className="text-3xl font-bold text-warning mb-2">
                    {formatCurrency(animatedValues.profit)}
                  </div>
                  <div className="text-sm text-muted-foreground">Lucro Total</div>
                </div>
              </div>

              {/* Comparativo */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-center">Comparativo com Outras Aplicações</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-bold text-success">{selectedRate.toFixed(1)}%</div>
                    <div className="text-sm text-muted-foreground">InvistaTop</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-bold text-muted-foreground">{cdiRate}%</div>
                    <div className="text-sm text-muted-foreground">CDI</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-bold text-muted-foreground">{poupancaRate}%</div>
                    <div className="text-sm text-muted-foreground">Poupança</div>
                  </div>
                </div>
                
                {/* Vantagem Visual */}
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-success">
                    +{(selectedRate - cdiRate).toFixed(1)} pontos acima do CDI
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Potencial de {(((selectedRate / cdiRate) - 1) * 100).toFixed(0)}% mais rentabilidade
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <button className="px-8 py-4 bg-success text-success-foreground font-bold text-lg rounded-xl hover:shadow-hover transition-all transform hover:scale-105 mr-4">
                  Investir Agora
                </button>
                <button className="px-8 py-4 border border-border text-foreground font-bold text-lg rounded-xl hover:bg-muted transition-colors">
                  Saber Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}