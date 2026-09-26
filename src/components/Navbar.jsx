import React, { useState } from 'react'
import styles from './Navbar.module.css'

const links = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <span className={styles.brandBlue}>SAMP</span><span className={styles.brandOrange}>REET.</span>
        </button>

        <div className={styles.desktopLinks}>
          {links.map((link) => <button key={link} onClick={() => scrollTo(link)}>{link}</button>)}
        </div>

        <a className={styles.connect} href="mailto:ghosh.sampreet@gmail.com">
          <span>↗</span> Let's Connect
        </a>

        <button className={styles.menu} onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map(link => <button key={link} onClick={() => scrollTo(link)}>{link}</button>)}
          <a href="mailto:ghosh.sampreet@gmail.com" onClick={() => setOpen(false)}>Let's Connect ↗</a>
        </div>
      )}
    </header>
  )
}
