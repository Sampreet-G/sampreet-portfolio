import React from 'react'
import styles from './Hero.module.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Sampreet-G', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sampreetghosh/', icon: 'in' },
  { label: 'LeetCode', href: 'https://leetcode.com/sampreetghosh/', icon: 'LC' },
  { label: 'Email', href: 'mailto:ghosh.sampreet@gmail.com', icon: '@' },
]

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.blobA} /><div className={styles.blobB} /><div className={styles.dot} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.status}><span /> CSE STUDENT <b>•</b> OPEN TO INTERNSHIPS</div>
            <h1>Hi, I’m <span>Sampreet</span><br />I build useful things.</h1>
            <h2>CSE Student <i>&amp;</i> Frontend / Full-Stack Developer</h2>
            <p className={styles.intro}>
              I build modern web applications and practical AI-powered tools. I enjoy turning a rough idea into a clean interface, connecting it to a real backend, and shipping something people can actually use.
            </p>
            <div className={styles.actions}>
              <button onClick={() => go('projects')} className={styles.primary}>View Projects <span>→</span></button>
              <a href="mailto:ghosh.sampreet@gmail.com" className={styles.secondary}>Let’s Talk <span>↗</span></a>
            </div>
            <div className={styles.socials}>
              {socials.map(s => <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" title={s.label}>{s.icon}</a>)}
            </div>
          </div>

          <div className={styles.visual} aria-label="A small developer workspace illustration">
            <div className={styles.note}>building ideas<br /><strong>into products</strong><span>↗</span></div>
            <div className={styles.workspace}>
              <div className={styles.windowBar}><span/><span/><span/><em>portfolio.jsx</em></div>
              <div className={styles.code}>
                <div><small>01</small><span className={styles.purple}>const</span> <b>developer</b> = &#123;</div>
                <div><small>02</small>&nbsp;&nbsp;name: <span className={styles.orange}>“Sampreet”</span>,</div>
                <div><small>03</small>&nbsp;&nbsp;focus: <span className={styles.blue}>“web + AI”</span>,</div>
                <div><small>04</small>&nbsp;&nbsp;projects: <span className={styles.green}>4</span>,</div>
                <div><small>05</small>&nbsp;&nbsp;openToWork: <span className={styles.orange}>true</span></div>
                <div><small>06</small>&#125;</div>
                <div className={styles.cursorLine}><small>07</small><span className={styles.blue}>build</span>(ideas)<span className={styles.cursor}>_</span></div>
              </div>
              <div className={styles.windowFooter}><span>React</span><span>Python</span><span>Node.js</span><span>GitHub</span></div>
            </div>
            <div className={styles.cardNote}><b>290+</b><span>DSA problems<br />solved</span></div>
            <div className={styles.sticky}><span>01</span><b>clean UI</b><small>real functionality</small></div>
          </div>
        </div>
      </div>
      <div className={styles.scroll}>SCROLL <span>↓</span></div>
    </section>
  )
}
