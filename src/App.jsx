import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/Profile.jsx'
import WeeklyLabs from './components/WeeklyLabs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <WeeklyLabs />
      </main>
      <Footer />
    </>
  )
}
