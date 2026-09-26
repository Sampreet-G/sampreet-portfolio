import React from 'react'
import styles from './About.module.css'

const stats = [
  ['7.8', 'CGPA · till 6th sem'],
  ['290+', 'DSA problems'],
  ['2027', 'B.Tech CSE'],
  ['4+', 'major projects'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container reveal">
        <span className="section-kicker">01 · About</span>
        <div className={styles.layout}>
          <div>
            <h2 className="section-title">A developer who likes to<br /><span>build, learn & improve.</span></h2>
            <p className="section-copy">I’m a B.Tech CSE student at Netaji Subhash Engineering College, Kolkata. My main focus is frontend and full-stack development, with a growing interest in machine learning and AI-powered products.</p>
            <p className={styles.copy}>I like working across the whole product flow — understanding the problem, designing the interface, writing the React frontend, connecting APIs and databases, and polishing the small details that make an app feel finished.</p>
            <div className={styles.edu}><span className={styles.eduMark}>N</span><div><b>Netaji Subhash Engineering College</b><small>B.Tech · Computer Science & Engineering · 2023–2027</small></div></div>
          </div>
          <div className={styles.right}>
            <div className={styles.stats}>{stats.map(([value,label]) => <div key={label} className={styles.stat}><strong>{value}</strong><span>{label}</span></div>)}</div>
            <div className={styles.explore}><span className={styles.orangeDot} /><div><b>Currently exploring</b><p>MERN · Machine Learning · AI integrations · building real-world products</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
