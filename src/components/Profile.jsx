import { student } from '../data/labs.js'

export default function Profile() {
  const rows = [
    ['Name', student.displayName],
    ['Roll Number', student.rollNo],
    ['Branch', student.branch],
    ['Section', student.section],
    ['Subject', student.subject],
  ]

  return (
    <section id="profile" className="section section--white">
      <div className="container">
        <h2 className="section__title">Profile</h2>
        <div className="profile">
          <dl className="profile__list">
            {rows.map(([k, v]) => (
              <div key={k} className="profile__row">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="profile__about">
            I am a student of {student.branch} ({student.branchShort}), Section {student.section}.
            In the {student.subject} I practise writing and running Java programs, and this
            record keeps my weekly work in one place.
          </p>
        </div>
      </div>
    </section>
  )
}
