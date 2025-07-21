import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Prompt V8</h1>
          <h2 className="text-xl mt-2">Sistema InvistaTop</h2>
        </div>
      </header>
      
      <main className="container mx-auto p-6">
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Bem-vindo ao Sistema InvistaTop</h3>
          <p className="text-muted-foreground">
            Sistema de gestão de investimentos versão 8.0
          </p>
        </div>
      </main>
    </div>
  )
}

export default App