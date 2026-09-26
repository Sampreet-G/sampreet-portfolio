import React from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    number:'01', name:'ResumeAI', type:'AI / ML', title:'AI-powered resume analysis',
    description:'A full-stack application that parses resumes, predicts suitable job roles with TF-IDF + Logistic Regression, and produces an ATS compatibility score.',
    stack:['React','FastAPI','Scikit-learn','Python'],
    github:'https://github.com/Sampreet-G/AI-Resume-Analyzer', live:'https://ai-resume-analyzer-two-nu.vercel.app/', tone:'blue', preview:'resume'
  },
  {
    number:'02', name:'PocketPath', type:'Full Stack', title:'Personal finance, kept simple',
    description:'A personal finance tracker for managing income, expenses and savings with secure authentication and Google OAuth.',
    stack:['React 19','Node.js','MongoDB','JWT'],
    github:'https://github.com/Sampreet-G/Pocketpath', live:null, tone:'orange', preview:'finance'
  },
  {
    number:'03', name:'CareerCraft', type:'Career / AI', title:'A clearer path from college to career',
    description:'A student-focused career platform with college discovery, career quizzes, courses, scholarships and an AI guidance assistant.',
    stack:['React','Node.js','PostgreSQL','Gemini API'],
    github:'https://github.com/Sampreet-G/InterviewForge', live:null, tone:'blue', preview:'career'
  },
  {
    number:'04', name:'InterviewForge', type:'AI Product', title:'Practice interviews before the real one',
    description:'An AI mock-interview experience that generates questions, supports voice-based practice and adapts the session around the candidate.',
    stack:['React','AI APIs','Voice UI','JavaScript'],
    github:'https://github.com/Sampreet-G/InterviewForge', live:null, tone:'orange', preview:'interview'
  }
]

export default function Projects(){return <section id="projects" className="section"><div className="container reveal"><div className={styles.top}><div><span className="section-kicker">03 · Selected work</span><h2 className="section-title">Projects I’m <span>proud of.</span></h2></div><p>Real projects, not just tutorial clones — each one taught me something about product design, engineering, or shipping.</p></div><div className={styles.grid}>{projects.map(p=><ProjectCard key={p.number} p={p}/>)}</div></div></section>}

function ProjectCard({p}){return <article className={`${styles.card} ${styles[p.tone]}`}><div className={styles.preview}><div className={styles.previewTop}><span>{p.name}</span><small>{p.type}</small></div><Preview type={p.preview}/></div><div className={styles.content}><div className={styles.meta}><span>{p.number}</span><span>{p.type}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className={styles.tags}>{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className={styles.links}>{p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>}<a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>}

function Preview({type}){
  if(type==='resume') return <div className={styles.resumePreview}><div className={styles.doc}><div className={styles.avatarSmall}/><div><b>Resume</b><small>ATS analysis</small></div></div><div className={styles.score}>78<span>/100</span></div><div className={styles.bars}><i/><i/><i/><i/><i/></div></div>
  if(type==='finance') return <div className={styles.financePreview}><div className={styles.balance}><small>Total balance</small><b>₹24,500</b></div><div className={styles.chart}><i/><i/><i/><i/><i/><i/><i/></div><div className={styles.money}><span>Income</span><b>+ ₹32,000</b></div><div className={styles.money}><span>Expenses</span><b>− ₹7,500</b></div></div>
  if(type==='career') return <div className={styles.careerPreview}><div className={styles.path}><span>1</span><b>Explore</b><i/><span>2</span><b>Choose</b><i/><span>3</span><b>Build</b></div><div className={styles.chat}><small>Career assistant</small><p>“Based on your interests, here are 3 paths to explore.”</p></div></div>
  return <div className={styles.interviewPreview}><div className={styles.mic}><span>●</span><b>Ready when you are</b></div><div className={styles.wave}>{Array.from({length:15}).map((_,i)=><i key={i} style={{height:`${18+((i*17)%34)}px`}}/>)}</div><div className={styles.question}><small>Question 03</small><b>Tell me about a project you built.</b></div></div>
}
