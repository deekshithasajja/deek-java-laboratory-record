import WeekCard from './WeekCard.jsx'
import { labs } from '../data/labs.js'

export default function WeeklyLabs() {
  const sorted = [...labs].sort((a, b) => a.week - b.week)

  return (
    <section id="labs" className="section">
      <div className="container">
        <h2 className="section__title">Weekly Labs</h2>
        <p className="section__sub">Twelve weeks of Java laboratory work, Week 1 to Week 12.</p>
        <div className="grid">
          {sorted.map((lab) => (
            <WeekCard key={lab.week} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  )
}
