import React from 'react'
import styles from './Footer.module.css'
export default function Footer(){return <footer className={styles.footer}><div className={styles.inner}><span>© {new Date().getFullYear()} Sampreet Ghosh</span><span>Built with React · Vite</span><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to top ↑</button></div></footer>}
