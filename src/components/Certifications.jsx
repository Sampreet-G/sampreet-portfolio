import React from 'react'
import styles from './Certifications.module.css'

const learning = [
  ['290+', 'LeetCode problems solved', 'DSA · Python · Problem Solving', 'orange'],
  ['2024', 'Hacktoberfest', 'Open-source contribution', 'blue'],
  ['GSSoC', 'Contributor', 'Open-source collaboration', 'green'],
  ['Arcade', 'Novice tier', 'Google Cloud Arcade', 'purple'],
]

const courses = [
  ['Supervised Machine Learning: Regression & Classification', 'DeepLearning.AI · Coursera'],
  ['Developing Front-End Apps with React', 'IBM'],
  ['Cyber Suraksha Course · 40 hours', 'Tata STRIVE & Microsoft'],
]

export default function Certifications(){return <section id="certifications" className="section"><div className="container reveal"><span className="section-kicker">05 · Learning & achievements</span><h2 className="section-title">Still learning. <span>Still building.</span></h2><div className={styles.layout}><div className={styles.achievements}>{learning.map(([value,title,sub,tone])=><div className={`${styles.achievement} ${styles[tone]}`} key={title}><strong>{value}</strong><div><b>{title}</b><span>{sub}</span></div></div>)}</div><div className={styles.courses}><h3>Selected coursework</h3>{courses.map(([title,issuer])=><div className={styles.course} key={title}><span>✓</span><div><b>{title}</b><small>{issuer}</small></div></div>)}</div></div></div></section>}
