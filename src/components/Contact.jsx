import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact(){
  const [copied,setCopied]=useState(false)
  const email='ghosh.sampreet@gmail.com'
  const copy=async()=>{try{await navigator.clipboard.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),1600)}catch{}}
  return <section id="contact" className="section"><div className="container reveal"><div className={styles.box}><div className={styles.left}><span className="section-kicker">06 · Contact</span><h2>Have an idea, role or<br /><span>project to talk about?</span></h2><p>I’m currently looking for internship opportunities where I can contribute to frontend, full-stack or AI-powered products.</p><div className={styles.actions}><a href={`mailto:${email}`} className={styles.primary}>Send me an email ↗</a><button onClick={copy} className={styles.copy}>{copied?'Copied ✓':'Copy email'}</button></div></div><div className={styles.right}><div className={styles.available}><span/> Open to internships · 2026–27</div><div className={styles.email}>{email}</div><div className={styles.socialRow}><a href="https://github.com/Sampreet-G" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sampreetghosh/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://leetcode.com/sampreetghosh/" target="_blank" rel="noreferrer">LeetCode</a></div></div></div></div></section>
}
