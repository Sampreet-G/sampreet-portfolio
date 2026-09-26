import React from 'react'
import styles from './Experience.module.css'

const items = [
  {year:'2024', title:'Smart India Hackathon', role:'UI/UX Designer · Frontend Developer', text:'Worked on Aspire Sync, a student career and education platform. Turned wireframes into a functional React experience and shipped the project during the hackathon.', mark:'SIH'},
  {year:'2024', title:'GirlScript Summer of Code', role:'Open Source Contributor', text:'Contributed to open-source repositories through pull requests, UI improvements, fixes and documentation while working with distributed maintainers.', mark:'GSSoC'},
  {year:'2024', title:'Hacktoberfest', role:'Open Source Contributor', text:'Completed Hacktoberfest with accepted pull requests and gained hands-on experience navigating unfamiliar repositories, Git workflows and collaborative development.', mark:'HF'},
]

export default function Experience(){return <section id="experience" className="section"><div className="container reveal"><span className="section-kicker">04 · Experience & highlights</span><div className={styles.head}><h2 className="section-title">Things I’ve <span>done beyond class.</span></h2><p>Some of the experiences that shaped how I collaborate, design and ship software.</p></div><div className={styles.timeline}>{items.map((item,i)=><article className={styles.item} key={item.title}><div className={styles.year}>{item.year}</div><div className={styles.dot}>{item.mark}</div><div className={styles.body}><h3>{item.title}</h3><b>{item.role}</b><p>{item.text}</p></div></article>)}</div></div></section>}
