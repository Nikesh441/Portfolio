import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar.jsx'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import {
  ArrowRight, Download, Mail, Github, Linkedin, ExternalLink,
  Code2, Database, Globe, Cloud, Cpu, Wrench, ChevronRight,
  CheckCircle2, Send, Star, Zap, Shield, BarChart3, Terminal,CreditCard,Scale
} from 'lucide-react'
import {
  SiPython, SiDjango, SiFastapi, SiFlask, SiPhp,
  SiMysql, SiPostgresql, SiSelenium,
  SiGooglecloud, SiGithubactions, SiWordpress, SiGit, SiClaude,SiGooglegemini,
  SiGnubash, SiPowers, SiDocker
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { LuWorkflow } from 'react-icons/lu'
import { FaServer } from 'react-icons/fa'
import { CiMonitor } from "react-icons/ci";
import {
  FileText,
  Bell,
  Bug,
} from "lucide-react";
import { TbWorldSearch } from "react-icons/tb";
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
}

// const SKILLS = [
//   {
//     title: 'Backend Development',
//     icon: <Code2 className="w-5 h-5" />,
//     color: 'from-blue-500 to-indigo-600',
//     borderColor: 'border-l-blue-500',
//     bg: 'bg-blue-50 dark:bg-blue-950/30',
//     items: [
//       { name: 'Python', icon: <SiPython className="text-blue-500" /> },
//       { name: 'Django', icon: <SiDjango className="text-green-700" /> },
//       { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
//       { name: 'Flask', icon: <SiFlask className="text-gray-700 dark:text-gray-300" /> },
      
//     ]
//   },
//   {
//     title: 'Databases',
//     icon: <Database className="w-5 h-5" />,
//     color: 'from-emerald-500 to-green-600',
//     borderColor: 'border-l-emerald-500',
//     bg: 'bg-emerald-50 dark:bg-emerald-950/30',
//     items: [
//       { name: 'MySQL', icon: <SiMysql className="text-orange-500" /> },
//       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
//     ]
//   },
//   {
//     title: 'Scraping & Automation',
//     icon: <Globe className="w-5 h-5" />,
//     color: 'from-orange-500 to-amber-600',
//     borderColor: 'border-l-orange-500',
//     bg: 'bg-orange-50 dark:bg-orange-950/30',
//     items: [
//       { name: 'Selenium', icon: <SiSelenium className="text-green-500" /> },
//       { name: 'Beautiful Soup', icon: <span className="text-xs font-bold text-orange-500">BS</span> },
//     ]
//   },
//   {
//     title: 'Cloud & DevOps',
//     icon: <Cloud className="w-5 h-5" />,
//     color: 'from-violet-500 to-purple-600',
//     borderColor: 'border-l-violet-500',
//     bg: 'bg-violet-50 dark:bg-violet-950/30',
//     items: [
//       { name: 'Azure', icon: <VscAzure className="text-orange-400" /> },
//       { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" /> },
//       { name: 'GitHub Actions', icon: <SiGithubactions className="text-gray-800 dark:text-white" /> },
//       { name: 'IIS Server', icon: <span className="text-xs font-bold text-blue-500">IIS</span> },
//       { name: 'NSSM', icon: <span className="text-xs font-bold text-gray-500">NS</span> },
//     ]
//   },
//   {
//     title: 'CMS & Tools',
//     icon: <Wrench className="w-5 h-5" />,
//     color: 'from-pink-500 to-rose-600',
//     borderColor: 'border-l-pink-500',
//     bg: 'bg-pink-50 dark:bg-pink-950/30',
//     items: [
//       { name: 'WordPress', icon: <SiWordpress className="text-blue-700" /> },
//       { name: 'Git', icon: <SiGit className="text-orange-600" /> },
//       { name: 'Acronis', icon: <span className="text-xs font-bold text-red-500">AC</span> },
//     ]
//   },
//   {
//     title: 'AI Tools',
//     icon: <Cpu className="w-5 h-5" />,
//     color: 'from-cyan-500 to-sky-600',
//     borderColor: 'border-l-cyan-500',
//     bg: 'bg-cyan-50 dark:bg-cyan-950/30',
//     items: [
//       { name: 'Gemini AI', icon: <SiGooglegemini className="text-purple-500" /> },
//       { name: 'claude AI', icon: <SiClaude className="text-orange-600" /> },
//     ]
//   },
// ]
const SKILLS = [
  {
    title: 'Programming & Backend',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-l-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    items: [
      { name: 'Python', icon: <SiPython className="text-blue-500" /> },
      { name: 'Django', icon: <SiDjango className="text-green-700" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-700 dark:text-gray-300" /> },
      { name: 'Bash', icon: <SiGnubash className="text-gray-700 dark:text-white" /> },
      { name: 'PowerShell', icon: <SiPowers className="text-blue-500" /> },
    ]
  },

  {
    title: 'DevOps & CI/CD',
    icon: <LuWorkflow  className="w-5 h-5" />,
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-l-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    items: [
      { name: 'Azure DevOps', icon: <VscAzure className="text-blue-500" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-gray-800 dark:text-white" /> },
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    ]
  },

  {
    title: 'Cloud Platforms',
    icon: <Cloud className="w-5 h-5" />,
    color: 'from-cyan-500 to-sky-600',
    borderColor: 'border-l-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    items: [
      { name: 'Microsoft Azure', icon: <VscAzure className="text-blue-500" /> },
      { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" /> },
    ]
  },

  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    color: 'from-emerald-500 to-green-600',
    borderColor: 'border-l-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-orange-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
    ]
  },

  {
    title: 'Servers & Containerization',
    icon: <FaServer  className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-l-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    items: [
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
      { name: 'IIS Server', icon: <span className="text-xs font-bold text-blue-500">IIS</span> },
      { name: 'NSSM', icon: <span className="text-xs font-bold text-gray-500">NS</span> },
    ]
  },

  {
    title: 'Monitoring & Automation',
    icon: <CiMonitor  className="w-5 h-5" />,
    color: 'from-pink-500 to-rose-600',
    borderColor: 'border-l-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    items: [
      { name: 'Log Monitoring', icon: <FileText className="text-pink-500 w-4 h-4" /> },
      { name: 'Custom Alerting', icon: <Bell className="text-red-500 w-4 h-4" /> },
      { name: 'Error Tracking', icon: <Bug className="text-orange-500 w-4 h-4" /> },
      { name: 'Acronis Data Protection', icon: <span className="text-xs font-bold text-red-500">AC</span> },
    ]
  },

  {
    title: 'Scraping & Utilities',
    icon: <TbWorldSearch  className="w-5 h-5" />,
    color: 'from-lime-500 to-green-600',
    borderColor: 'border-l-lime-500',
    bg: 'bg-lime-50 dark:bg-lime-950/30',
    items: [
      { name: 'Selenium', icon: <SiSelenium className="text-green-500" /> },
      { name: 'Beautiful Soup', icon: <span className="text-xs font-bold text-orange-500">BS</span> },
    ]
  },
]

const PROJECTS = [
  {
    num: '01',
    title: 'Dynamic Pricing & Plan Management',
    desc: 'Developed a backend module to manage SaaS pricing plans. Implemented logic for creating subscription plans, assigning feature limits, enforcing usage limits, and tracking subscription changes.',
    tags: ['Python', 'Django','REST API', 'MySQL'],
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'shadow-blue-500/20',
  },
  {
    num: '02',
    title: 'Scalable PDF Reporting System',
    desc: 'Developed a dynamic PDF generation system using HTML templates, Pyppeteer, and embedded base64 assets to create scalable, production-ready reports with consistent styling and optimized rendering.',
    tags: ['Python', 'Pyppeteer', 'HTML', 'PDF Automation'],
    icon: <FileText className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    num: '03',
    title: 'Log Monitoring & Error Tracking',
    desc: 'Created a custom monitoring system that parses server logs, identifies failed jobs, detects errors, and sends alerts to maintain system stability.',
    tags: ['Python', 'FastAPI', 'Django','Custom Logging'],
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-orange-500 to-rose-600',
    glow: 'shadow-orange-500/20',
  },
  {
    num: '04',
    title: 'Payment Integration System',
    desc: 'Integrated Stripe payment workflows for subscriptions, checkout sessions, billing management, webhook handling, and secure transaction processing within web applications.',
    tags: ['Python', 'Stripe API', 'Webhooks', 'Payments'],
    icon: <CreditCard className="w-6 h-6" />,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
  },
  {
  num: '05',
  title: 'Lex Assist AI — Legal Document Assistant',
  desc: 'Built a RAG-based AI legal assistant supporting PDF upload and semantic search using local LLMs, pgvector embeddings, and a FastAPI streaming backend with a React real-time chat frontend; deployed on Azure with Docker and CI/CD pipelines.',
  tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Docker', 'Azure DevOps', 'RAG', 'Ollama'],
  icon: <Scale className="w-6 h-6" />,
  gradient: 'from-violet-500 to-purple-600',
  glow: 'shadow-violet-500/20',
},
]

const EXPERIENCE = [
  {
  company: 'Infigrowth',
  location: 'Goregaon, Mumbai',
  role: 'Software Development Engineer — Backend',
  period: 'Oct 2023 – Present',
  current: true,
  color: 'from-indigo-500 to-violet-600',
  dotColor: 'bg-indigo-500',
  points: [
    'Engineered end-to-end Stripe Payment Gateway integration (Checkout, Billing APIs, webhooks) within a Django application, enabling recurring subscription billing and automated lifecycle event handling reducing manual payment processing effort by 30%.',
    'Designed and delivered an automated GA4 & Google Search Console data retrieval system, progressing from POC to full production deployment; consolidated multi-source reporting and reduced manual data extraction and report generation time by 60%.',
    'Built and deployed a FastAPI-based keyword research application on IIS delivering real-time search volume data and keyword discovery, reducing manual data collection from external sources by 50%.',
    'Deployed and configured 5+ Django applications on Windows Server 2022, including full IIS setup, SSL/TLS certificate configuration, and environment management achieving 99%+ application uptime post-deployment.',
    'Developed reusable internal utility libraries standardizing API communication, structured logging, and error handling across 5+ microservices, cutting cross-team integration time by 40%.',
  ],
},
  {
    company: 'Infidigit',
    location: 'Goregaon, Mumbai',
    role: 'Associate Engineer',
    period: 'Jul 2022 – Sept 2023',
    current: false,
    color: 'from-emerald-500 to-teal-600',
    dotColor: 'bg-emerald-500',
    points: [
      'Managed clients\' websites with a focus on improving visibility through SEO technical implementation.',
      'Enhanced user experience and customized development to meet individual client needs.',
      'Successfully managed over 15 projects in the past year, demonstrating the ability to handle multiple tasks simultaneously.',
      'Served as the primary point of contact for clients, ensuring smooth communication and personalized support.',
    ],
  },
]

export default function Home() {
  const { toast } = useToast()

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = 'https://raw.githubusercontent.com/Nikesh441/Portfolio/main/Nikesh_Vishwakarma_Resume.pdf'
    link.download = 'Nikesh_Vishwakarma_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      duration: 500,
      title: 'Downloading Resume',
      description: 'Nikesh_Vishwakarma_Resume.pdf is being prepared.',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />
    })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll reply soon.",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />
    })
    e.target.reset()
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(to right, #4F46E5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-6">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to New Opportunities
                </span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
                  Hi, I'm
                  <br />
                  <span className="gradient-text">Nikesh</span>
                  <br />
                  <span className="gradient-text">Vishwakarma</span>
                </h1>
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="text-xl font-mono text-muted-foreground font-medium flex items-center gap-2">
                  <span className="text-primary">{'>'}</span>
                  Backend Developer | Python Engineer
                  <span className="cursor-blink text-primary">|</span>
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Backend developer specializing in scalable APIs, automation systems,
                  and data-driven platforms. Building high-performance services, scraping
                  systems, analytics integrations, and DevOps automation.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-xl px-7 gradient-bg text-white border-0 hover:opacity-90 shadow-lg shadow-primary/25 font-semibold"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-7 font-semibold border-2 hover:bg-primary/5"
                  onClick={handleResumeDownload}
                >
                  <Download className="mr-2 w-4 h-4" /> Download CV
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-xl px-7 font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
                <span className="text-sm text-muted-foreground font-mono">find me on:</span>
                {/* <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Github className="w-5 h-5" />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/nikesh-vishwkarma"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-md transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nikeshv441@gmail.com"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Code window */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />

                {/* Window */}
                <div className="relative bg-[#0D1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 h-11 bg-[#161B22] border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="mx-auto text-xs text-white/40 font-mono pr-12">developer.py</span>
                  </div>

                  {/* Code */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <p><span className="text-[#ff7b72]">class</span> <span className="text-[#d2a8ff]">BackendDeveloper</span><span className="text-white">:</span></p>
                    <div className="pl-4 mt-1">
                      <p><span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">__init__</span><span className="text-white">(</span><span className="text-[#79c0ff]">self</span><span className="text-white">):</span></p>
                      <div className="pl-4">
                        <p><span className="text-[#79c0ff]">self</span><span className="text-white">.name = </span><span className="text-[#a5d6ff]">"Nikesh Vishwakarma"</span></p>
                        <p><span className="text-[#79c0ff]">self</span><span className="text-white">.role = </span><span className="text-[#a5d6ff]">"Backend Engineer"</span></p>
                        <p><span className="text-[#79c0ff]">self</span><span className="text-white">.stack = [</span><span className="text-[#a5d6ff]">"Django"</span><span className="text-white">, </span><span className="text-[#a5d6ff]">"FastAPI"</span><span className="text-white">, </span><span className="text-[#a5d6ff]">"AWS"</span><span className="text-white">]</span></p>
                        <p><span className="text-[#79c0ff]">self</span><span className="text-white">.coffee = </span><span className="text-[#79c0ff]">float</span><span className="text-white">(</span><span className="text-[#a5d6ff]">"inf"</span><span className="text-white">)</span></p>
                      </div>
                    </div>
                    <div className="pl-4 mt-3">
                      <p><span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">solve_problem</span><span className="text-white">(</span><span className="text-[#79c0ff]">self</span><span className="text-white">, challenge):</span></p>
                      <div className="pl-4">
                        <p><span className="text-[#8b949e]"># Build. Scale. Automate.</span></p>
                        <p><span className="text-white">api = </span><span className="text-[#d2a8ff]">FastAPI</span><span className="text-white">()</span></p>
                        <p><span className="text-white">db = </span><span className="text-[#d2a8ff]">PostgreSQL</span><span className="text-white">()</span></p>
                        <p><span className="text-[#ff7b72]">return</span><span className="text-white"> </span><span className="text-[#d2a8ff]">ScalableSystem</span><span className="text-white">(api, db)</span></p>
                      </div>
                    </div>
                    <p className="mt-4 text-primary font-bold animate-pulse">█</p>
                  </div>
                </div>

                {/* Floating stat cards */}
                

                <div className="absolute -right-6 bottom-1/4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Projects Done</p>
                    <p className="text-sm font-bold">10+ Projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-12 gap-14 items-center"
          >
            {/* Avatar column */}
            <motion.div variants={scaleIn} className="md:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full gradient-bg opacity-20 blur-xl" />
                <div className="gradient-border absolute inset-0 rounded-full p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img
                      src={`${import.meta.env.BASE_URL}images/nikesh.webp`}
                      alt="Nikesh Vishwakarma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2 shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <SiPython className="text-blue-500 w-4 h-4" />
                  <span className="text-sm font-semibold">Python Expert</span>
                </div> */}
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div variants={stagger} className="md:col-span-7 flex flex-col gap-5">
              <motion.div variants={fadeUp}>
                <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-2">Who I Am</p>
                <h2 className="text-4xl sm:text-5xl font-extrabold">
                  About <span className="gradient-text">Me</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Passionate backend developer with 3+ years of experience building scalable,
                  high-performance systems that power real-world SaaS products using Python
                  frameworks including{' '}<strong className="text-foreground">Django, FastAPI, and Flask </strong>.
                </p>

                <p>
                  Specialized in search engine data pipelines, Google Analytics and Search
                  Console API integrations, and automation tooling delivering clean,
                  maintainable architectures that solve complex business problems. 
                  Hands-on with DevOps workflows using{' '} <strong className="text-foreground">Azure DevOps</strong> for CI/CD
                  pipeline setup, environment configuration, and release management across
                  Windows Server and cloud environments.
                </p>

                <p>
                  Core expertise spans{' '}<strong className="text-foreground">
                    scalable backend architecture, data pipelines, automation systems, log
                    monitoring </strong>, and cloud deployment on <strong className="text-foreground"> Azure Cloud and IIS Servers.</strong>
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {[
                  { value: '3+', label: 'Years Exp' },
                  { value: '10+', label: 'Projects' },
                  { value: '1M+', label: 'Rows Scraped' },
                ].map(stat => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                    <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Quick chips */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
                {['Django', 'FastAPI', 'PostgreSQL', 'Azure Cloud', 'Web Scraping', 'CI/CD'].map(chip => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-3">What I Use</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Tools and technologies I've mastered to build production-grade systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className={`card-lift h-full rounded-2xl border border-border border-l-4 ${cat.borderColor} ${cat.bg} p-6 shadow-sm`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md`}>
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{cat.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(skill => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border text-sm font-medium hover:border-primary/50 hover:shadow-sm transition-all"
                      >
                        <span className="text-base leading-none">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-3">My Work</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of backend systems I've built in production environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`card-lift group h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:${project.glow} transition-all duration-300`}>
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-6 flex flex-col h-full">
                    {/* Icon + number */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {project.icon}
                      </div>
                      <span className="text-4xl font-black text-border group-hover:text-muted transition-colors select-none">
                        {project.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-3">My Journey</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Professional roles and key contributions.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-400 to-emerald-400 rounded-full hidden sm:block" />

            <div className="flex flex-col gap-10">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.55 }}
                  className="flex gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-base shadow-lg z-10 group-hover:scale-110 transition-transform`}>
                      {job.company[0]}
                    </div>
                    {job.current && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="card-lift flex-1 bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    {/* Card top gradient */}
                    <div className={`h-1 bg-gradient-to-r ${job.color}`} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-extrabold text-foreground">{job.company}</h3>
                            {job.current && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-primary">{job.role}</p>
                          <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                            <span>📍</span> {job.location}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted border border-border text-sm font-mono text-muted-foreground whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {job.period}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-3">
                        {job.points.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-3">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.dotColor}`} />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {point.includes(':') ? (
                                <>
                                  <strong className="text-foreground font-semibold">{point.split(':')[0]}:</strong>
                                  {point.slice(point.indexOf(':') + 1)}
                                </>
                              ) : point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Looking for a backend developer who can bring your ideas to production?
              Let's talk about your next project.
            </p>
            <Button
              size="lg"
              className="rounded-xl px-8 bg-white text-primary hover:bg-white/90 font-bold shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      {/* <section id="contact" className="py-28 bg-muted/30"> */}
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          > */}
            {/* <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-3">Say Hello</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Currently open for new opportunities. Let's connect!
            </p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-5 gap-10"> */}
            {/* Contact info */}
            {/* <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-4"
            > */}
              {/* {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: 'Email',
                  value: 'nikeshv441@gmail.com',
                  href: 'mailto:nikeshv441@gmail.com',
                  color: 'bg-primary',
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  label: 'LinkedIn',
                  value: 'Connect on LinkedIn',
                  href: 'https://www.linkedin.com/in/nikesh-vishwkarma',
                  color: 'bg-[#0077b5]',
                },
                {
                  icon: <Github className="w-5 h-5" />,
                  label: 'GitHub',
                  value: 'View my repositories',
                  href: 'https://github.com',
                  color: 'bg-gray-800 dark:bg-gray-200',
                }, */}
              {/* ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card-lift flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-md group transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {item.value}
                    </p> */}
                  {/* </div> */}
                  {/* <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div> */}

            {/* Contact form */}
            {/* <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            > */}
              {/* <form
                onSubmit={handleContactSubmit}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="John Doe" className="rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="rounded-xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project collaboration, hiring, etc." className="rounded-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="rounded-xl min-h-[130px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl gradient-bg text-white border-0 hover:opacity-90 shadow-lg shadow-primary/25 font-semibold"
                >
                  <Send className="mr-2 w-4 h-4" /> Send Message
                </Button>
              </form> */}
            {/* </motion.div>
          </div>
        </div>
      </section> */}

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-primary font-medium uppercase tracking-wider mb-3">Say Hello</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Currently open for new opportunities. Let's connect!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                label: 'Email',
                value: 'nikeshv441@gmail.com',
                href: 'mailto:nikeshv441@gmail.com',
                color: 'bg-primary',
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                label: 'LinkedIn',
                value: 'Connect on LinkedIn',
                href: 'https://www.linkedin.com/in/nikesh-vishwkarma',
                color: 'bg-[#0077b5]',
              },
              {
                icon: <Github className="w-5 h-5" />,
                label: 'GitHub',
                value: 'View my repositories',
                href: 'https://github.com',
                color: 'bg-gray-800 dark:bg-gray-200',
              },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card-lift flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-md group transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm truncate">
                    {item.value}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            </motion.div>
          </div>
        </section>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                NV<span className="gradient-text">.dev</span>
              </span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              © 2026 <span className="font-semibold text-foreground">Nikesh Vishwakarma</span>
              {' '}· Backend Developer Portfolio
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/nikesh-vishwkarma" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#0077b5] hover:bg-muted/80 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:nikeshv441@gmail.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
