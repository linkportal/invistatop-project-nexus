import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white">InvistaTop</h1>
          <p className="text-white/80">Sistema V8</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingPage />
    </div>
  )
}

export default App