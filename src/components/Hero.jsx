import { student } from '../data/labs.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__kicker">JAVA LABORATORY RECORD</p>
          <h1>{student.name}</h1>
          <p className="hero__roll">Roll No: {student.rollNo}</p>
          <p className="hero__meta">
            {student.branchShort} {student.section} | {student.subject.toUpperCase()}
          </p>
          <p className="hero__intro">
            Welcome to my Java Programming Laboratory Record. This website showcases my weekly
            laboratory assignments, Java programs, and practical learning throughout the semester.
          </p>
          <a href="#labs" className="btn btn--primary">EXPLORE LABORATORY</a>
        </div>

        <div className="hero__code" aria-hidden="true">
          <div className="code-card">
            <div className="code-card__bar"><i /><i /><i /><span>Main.java</span></div>
<pre>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}</pre>
          </div>
          <div className="code-card code-card--small">
<pre>{`class Student {
  String name;
  void learn() { }
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
