export default function WeekCard({ lab }) {
  const isDone = lab.status === 'Completed'

  return (
    <article className={`card ${isDone ? '' : 'card--muted'}`}>
      <div className="card__top">
        <span className="card__week">Week {lab.week}</span>
        <span className={`badge ${isDone ? 'badge--done' : 'badge--none'}`}>{lab.status}</span>
      </div>
      <h3>{lab.title}</h3>
      <p>{lab.description}</p>
      {lab.pdf && (
        <div className="card__actions">
          <a className="btn btn--primary btn--sm" href={lab.pdf} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
          <a className="btn btn--ghost btn--sm" href={lab.pdf} download>
            Download PDF
          </a>
        </div>
      )}
    </article>
  )
}
