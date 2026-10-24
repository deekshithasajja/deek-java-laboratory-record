import { student } from '../data/labs.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">{student.name} | {student.rollNo}</p>
      <p>{student.subject}</p>
      <p className="footer__copy">© {new Date().getFullYear()} {student.displayName}. All rights reserved.</p>
    </footer>
  )
}
