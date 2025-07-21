import { useState } from 'react'

export default function HeroSection() {
  const [isTestMode, setIsTestMode] = useState(true)

  return (
    <section className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">I</span>
            </div>
            <span className="text-white text-2xl font-bold">InvistaTop</span>
            <span className="text-white/70 text-sm">V8</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {isTestMode && (
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-white/20 text-white text-sm rounded-md hover:bg-white/30 transition-colors">
                  Bronze
                </button>
                <button className="px-3 py-1 bg-white/20 text-white text-sm rounded-md hover:bg-white/30 transition-colors">
                  Silver
                </button>
                <button className="px-3 py-1 bg-white/20 text-white text-sm rounded-md hover:bg-white/30 transition-colors">
                  Gold
                </button>
                <button className="px-3 py-1 bg-warning text-warning-foreground text-sm rounded-md hover:opacity-90 transition-opacity">
                  Admin
                </button>
              </div>
            )}
            <button className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Entrar
            </button>
            <button className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Invista em
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Projetos Industriais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Plataforma completa de investimentos imobiliários industriais com 
            <span className="font-semibold"> rentabilidade superior ao CDI</span>
          </p>

          {/* Estatísticas em Tempo Real */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">R$ 15.2M</div>
              <div className="text-white/70">Investido</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-success">18.5%</div>
              <div className="text-white/70">Rentabilidade Média</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">2.847</div>
              <div className="text-white/70">Investidores</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="px-8 py-4 bg-success text-success-foreground font-bold text-lg rounded-xl hover:shadow-hover transition-all transform hover:scale-105">
              Começar a Investir
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors">
              Ver Projetos
            </button>
          </div>

          {/* Status de Conexão */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-white/60">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm">Sistema Online • Supabase Conectado</span>
          </div>
        </div>

        {/* Painel Animado Preview */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-lg">Dashboard de Investimentos</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gráfico Simulado */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white/80 text-sm mb-4">Evolução do Portfólio</h4>
                <div className="h-32 flex items-end justify-between space-x-2">
                  {[40, 65, 45, 80, 55, 90, 75, 95].map((height, i) => (
                    <div
                      key={i}
                      className="bg-success rounded-t-md transition-all duration-1000 delay-300"
                      style={{ height: `${height}%`, width: '12%' }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Projetos */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white/80 text-sm mb-4">Projetos Ativos</h4>
                <div className="space-y-3">
                  {['Industrial Park SP', 'Complexo Logístico RJ', 'Centro Distributivo MG'].map((project, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white text-sm">{project}</span>
                      <span className="text-success text-sm font-semibold">+{12 + i * 2}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Test Mode Toggle */}
      {isTestMode && (
        <button
          onClick={() => setIsTestMode(!isTestMode)}
          className="fixed top-4 right-4 z-50 px-3 py-1 bg-warning text-warning-foreground text-xs rounded-md hover:opacity-90 transition-opacity"
        >
          Modo: Teste
        </button>
      )}
    </section>
  )
}