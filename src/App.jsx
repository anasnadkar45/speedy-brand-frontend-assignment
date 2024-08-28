import './App.css'
import Navbar from './components/common/Navbar'
import { ThemeProvider } from './components/theme-provider'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
