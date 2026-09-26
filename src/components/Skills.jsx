import React from 'react'
import styles from './Skills.module.css'

const groups = [
  { title:'Frontend', mark:'01', skills:['React','Vite','JavaScript','HTML5','CSS3','Tailwind CSS','Responsive UI','Figma'] },
  { title:'Backend', mark:'02', skills:['Node.js','Express.js','FastAPI','Flask','REST APIs','JWT','Google OAuth'] },
  { title:'Data & AI', mark:'03', skills:['Python','Scikit-learn','Pandas','NumPy','TF-IDF','NLP basics','Logistic Regression'] },
  { title:'Database & Tools', mark:'04', skills:['MongoDB','PostgreSQL','MySQL','Git','GitHub','Postman','Vercel','Render'] },
]

export default function Skills(){return <section id="skills" className="section"><div className="container reveal"><span className="section-kicker">02 · Skills</span><h2 className="section-title">Tools I use to <span>make things work.</span></h2><p className="section-copy">A practical stack built around React and JavaScript, with Python for backend work and ML, plus the tools I use to ship and maintain projects.</p><div className={styles.grid}>{groups.map(g=><article className={styles.card} key={g.title}><div className={styles.head}><span>{g.mark}</span><h3>{g.title}</h3></div><div className={styles.tags}>{g.skills.map(s=><span key={s}>{s}</span>)}</div></article>)}</div><div className={styles.bottom}><b>Also:</b><span>OOP</span><span>DSA</span><span>Problem Solving</span><span>UI/UX Design</span><span>Open Source</span></div></div></section>}
