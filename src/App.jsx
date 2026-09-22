import { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, ArrowRight, Download, ExternalLink,
  Code2, Brain, Cloud, Database, Server, Terminal, Award,
  GraduationCap, Briefcase, FileText, X, ChevronRight, Menu,
  Sparkles, Layers, Cpu, Globe, Heart, Users, Trophy, Calendar, Zap, Phone
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Put these files in /public (your folder already has most of them) */
/*  pic5.jpg, NSS.jpg, Aksharmala.jpg, DevelopersArena.jpg            */
/*  Optional: adobe_certificate.jpg, Skillible_certificate.jpg,       */
/*            Datta_Sai_Participation_Certificate.jpg, resume.pdf     */
/* ------------------------------------------------------------------ */

const education = [
  {
    degree: 'B.Tech in CSE (AI & ML)',
    institution: 'Sreenidhi Institute of Science and Technology (SNIST)',
    location: 'Hyderabad',
    score: 'CGPA 9.24',
    period: '2022 – 2026',
  },
  {
    degree: 'Class XII (PCM)',
    institution: 'Sri Amogha Junior College',
    location: 'Hyderabad',
    score: '986 Marks',
    period: '2020 – 2022',
  },
  {
    degree: 'Class X',
    institution: 'Covells High School',
    location: 'Sanathnagar',
    score: '10 CGPA',
    period: '2020',
  },
];

const experiences = [
  {
    role: 'Programmer Analyst Trainee (PAT)',
    company: 'Cognizant',
    type: 'Full-time',
    period: 'May 2026 – Present',
    current: true,
    points: [
      'Working as a full-time Programmer Analyst Trainee after successful completion of the internship.',
      'Continuing to apply .NET Full Stack and modern engineering practices on enterprise projects.',
      'Focus areas: application development, collaborative Agile delivery, and continuous learning in AI & cloud technologies.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Agile', 'Jira'],
  },
  {
    role: 'Programmer Analyst Trainee – Internship',
    company: 'Cognizant',
    type: 'Internship',
    period: 'January 13, 2026 – May 22, 2026',
    current: false,
    points: [
      'Completed intensive training in .NET Full Stack development (C#, ASP.NET Core, Angular, SQL Server, REST APIs).',
      'Contributed to the HealthNet healthcare application in a collaborative Agile environment using Scrum and Jira.',
      'Gained hands-on exposure to the full software development lifecycle, code reviews, and team collaboration.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Jira', 'Scrum'],
  },
];

const skillCategories = [
  { title: 'Programming', icon: Code2, skills: ['Python', 'Java', 'C#', 'JavaScript', 'SQL'] },
  { title: 'AI / ML & Generative AI', icon: Brain, skills: ['Machine Learning', 'Google Gemini API', 'Prompt Engineering', 'LLM Integration', 'Streamlit'] },
  { title: 'Frontend', icon: Globe, skills: ['Angular', 'React', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Backend & APIs', icon: Server, skills: ['ASP.NET Core', 'Flask', 'PHP', 'REST API Development'] },
  { title: 'Databases', icon: Database, skills: ['SQL Server', 'MySQL'] },
  { title: 'Fundamentals & Tools', icon: Terminal, skills: ['DSA', 'OOPs', 'Git', 'GitHub', 'Jira', 'Agile / Scrum'] },
];

const projects = [
  {
    title: 'HealthNet',
    tag: 'Enterprise Full-Stack',
    description: 'Healthcare management platform built during Cognizant internship. Supports patient registration, appointment scheduling, medical records, symptom reporting and laboratory management.',
    features: ['Patient & appointment management', 'Medical records & lab workflows', 'REST APIs + Angular frontend', 'Agile / Scrum delivery with Jira'],
    tech: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs'],
    github: 'https://github.com/DattaSai13/HealthNet-Fullstack',
    live: null,
  },
  {
    title: 'Medibot',
    tag: 'Generative AI',
    description: 'AI-powered healthcare assistant using Google Gemini. Provides symptom guidance, multilingual interaction, voice input/output and image-based health queries with evidence-based responses.',
    features: ['Gemini LLM integration', 'Voice I/O & image queries', 'Multilingual support', 'Streamlit + Flask architecture'],
    tech: ['Python', 'Flask', 'Streamlit', 'Google Gemini API'],
    github: 'https://github.com/DattaSai13/medibot',
    live: 'https://medibot-front.onrender.com/',
  },
  {
    title: 'Insurance Product Recommender',
    tag: 'Machine Learning',
    description: 'ML recommendation engine that analyzes customer profiles and suggests suitable insurance plans. Includes data preprocessing, feature engineering, model training and evaluation.',
    features: ['Profile-based recommendations', 'Feature engineering pipeline', 'Model training & evaluation', 'Streamlit interactive app'],
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    github: 'https://github.com/DattaSai13/Insurance_Product_Recommender_app',
    live: 'https://insurance-engine.streamlit.app/',
  },
  {
    title: 'FinTracker',
    tag: 'Full-Stack Web',
    description: 'Personal finance management system with secure authentication, income & expense tracking, budgeting dashboards and financial analytics.',
    features: ['Secure authentication', 'Income / expense tracking', 'Budgeting dashboards', 'Financial analytics'],
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/DattaSai13/FinTracker',
    live: null,
  },
  {
    title: 'Capstone Business Analysis',
    tag: 'Data Science',
    description: 'Real-world business analysis capstone covering end-to-end data science workflow — data cleaning, statistical analysis, visualization and actionable insights.',
    features: ['End-to-end DS workflow', 'Statistical hypothesis testing', 'Business insights & reporting'],
    tech: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    github: 'https://github.com/DattaSai13/Capstone_business_analysis',
    live: null,
  },
  {
    title: 'Interactive Sales Dashboard',
    tag: 'Data Visualization',
    description: 'Interactive sales analytics dashboard built with Seaborn and Python for exploring trends, customer segments and performance metrics.',
    features: ['Multi-chart interactive views', 'Sales trend analysis', 'Customer segmentation visuals'],
    tech: ['Python', 'Seaborn', 'Pandas', 'Jupyter'],
    github: 'https://github.com/DattaSai13/Interactive_Sales_Dashboard',
    live: null,
  },
];

/* Filenames match your public/ folder */
const certifications = [
  {
    name: 'Data Science & Analytics Internship',
    org: 'The Developers Arena',
    year: 'Mar 2026',
    image: '/DevelopersArena.jpg',
    link: null,
    gallery: true,
  },
  {
    name: 'Generative AI Virtual Internship',
    org: 'Skillible × AICTE',
    year: '2024',
    image: '/Skillible_certificate.jpg',
    link: 'https://drive.google.com/file/d/1QV0bzxw71Y3MEGcOe1P1cYQjoLJpzPl9/view?usp=sharing',
    gallery: true,
  },
  
  {
    name: 'AI-ML Virtual Internship',
    org: 'AICTE · NEAT · EduSkills (Google for Developers)',
    year: 'Jan – Mar 2024',
    image: '/AICTE_certi.jpg',
    link: 'https://drive.google.com/file/d/1I9JGEpAQ1dbXIzGlAciytZRCdl4TsUGh/view?usp=sharing',
    gallery: true,
  },
  {
    name: 'Cybersecurity Virtual Internship',
    org: 'AICTE · NEAT · EduSkills (Palo Alto Networks)',
    year: 'Apr – Jun 2024',
    image: '/palo_alto.jpg',
    link: 'https://drive.google.com/file/d/1MlZlMExgKPCUaLMbxosWaUXxPqkz8B6A/view?usp=sharing',
    gallery: true,
  },
  {
    name: 'AI & Machine Learning Engineer',
    org: 'NASSCOM · Skill India (NCVET) · Grade A',
    year: 'Sep 2024',
    image: '/CAN_28275784-ESCI_certi.jpg',
    link: null,
    gallery: true,
  },
  {
    name: 'Smart Interviews – DSA',
    org: 'Smart Interviews',
    year: '2024',
    image: '/smart_interviews.png',
    link: 'https://drive.google.com/file/d/1rStqITae3Np582x8JijongGoEz7UCVZH/view?usp=sharing',
    gallery: true,
  },
  {
    name: 'AWS Academy Cloud Foundations',
    org: 'Amazon Web Services',
    year: '2024',
    image: null,
    link: 'https://drive.google.com/file/d/1mAaUGdkoku0Pd5iWYHeK9qqNXFSqnW_0/view?usp=sharing',
    gallery: false,
  },
  {
    name: 'AWS Academy Machine Learning Foundations',
    org: 'Amazon Web Services',
    year: '2024',
    image: null,
    link: 'https://drive.google.com/file/d/1UGziijDogD_5BWOxUGFU67BLlDfwaRzA/view?usp=sharing',
    gallery: false,
  },
];

const volunteering = [
  {
    role: 'Volunteer',
    org: 'National Service Scheme (NSS)',
    period: 'June 2023 – November 2025',
    description:
      'Actively participated in various programmes organised under NSS during regular service of 240 hours (2023–2025). Performance was excellent during the service.',
    icon: Heart,
    certImage: '/NSS.jpg',
    certName: 'NSS Regular Service Certificate',
  },
  {
    role: 'Student Mentor (Volunteer)',
    org: 'Aksharadaan — Aksharamaala',
    period: 'November 2024 – February 2025',
    description:
      'Mentored 10th-class government school students in Sangareddy District under the “Aksharamaala – Connect with GEMs” program (Aksharadaan × IIT Hyderabad × SCERT Telangana). Certificate of Appreciation awarded.',
    icon: Users,
    certImage: '/Aksharmala.jpg',
    certName: 'Aksharamaala — Certificate of Appreciation',
  },
];

const achievements = [
  {
    title: 'Adobe India Hackathon',
    detail:
      'Participated in Round 1 — Online MCQ Assessment + Coding as Team Code Wizards (Sreenidhi Institute of Science and Technology). Organised by Adobe via Unstop.',
    year: 'August 2025',
    icon: Trophy,
    href: 'https://unstop.com/certificate-preview/3789e39e-8066-49ea-a283-1e643264cc3b',
  },
  {
    title: 'Coding challenges & assessments',
    detail:
      'Actively participated in coding assessments, technical competitions and aptitude tests to sharpen problem-solving and full-stack skills.',
    year: '2024 – 2025',
    icon: Code2,
    href: 'https://www.linkedin.com/in/datta-sai-sandela-483795330/',
  },
];

/* Final-year project research paper, presented at an international
   conference. Put these two files in /public:
   Datta_conference.jpg (certificate) and help_bridge_research_paper.pdf */
const research = {
  title: 'HelpBridge AI: An AI-Powered Support Platform for Persons with Disabilities',
  kind: 'Final Year Project · Research Paper',
  conference: '15th International Conference on Recent Challenges in Engineering and Technology (ICRCET-2026)',
  organizers: 'Primus School of Management Studies & IFERP Academy',
  date: '22–23 April 2026',
  location: 'Bangalore, India · Hybrid Conference',
  certificateNo: 'IFERP2026_1203_ICRCET_19224',
  cpdHours: '16 CPD Hours',
  certImage: '/Datta_conference.jpg',
  paperFile: '/help_bridge_research_paper.pdf',
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const init = () => {
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        a: Math.random() * 0.5 + 0.15,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - d / 110)})`;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    resize();
    init();
    draw();
    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Global injected styles — keyframes + utility classes for the       */
/*  futuristic / AI-ML visual treatment. Self-contained, no extra CSS  */
/*  file needed.                                                       */
/* ------------------------------------------------------------------ */
function GlobalFX() {
  return (
    <style>{`
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes spin-slow-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.9; } 70% { transform: scale(1.6); opacity: 0; } 100% { opacity: 0; } }
      @keyframes node-pulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.35); } }
      @keyframes scan-y { 0% { transform: translateY(-10%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(110%); opacity: 0; } }
      @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      @keyframes float-chip { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      @keyframes shimmer-sweep { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }
      @keyframes blink-caret { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      @keyframes tab-pop { 0% { transform: scaleX(0.6); opacity: 0.4; } 100% { transform: scaleX(1); opacity: 1; } }

      .grad-text-animated {
        background-size: 200% 200%;
        animation: gradient-shift 6s ease infinite;
      }
      .ring-rotate { animation: spin-slow 14s linear infinite; }
      .ring-rotate-rev { animation: spin-slow-rev 20s linear infinite; }
      .caret-blink { animation: blink-caret 1s step-end infinite; }

      .spotlight-card { position: relative; isolation: isolate; }
      .spotlight-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(320px circle at var(--sx, 50%) var(--sy, 50%), rgba(34,211,238,0.14), transparent 65%);
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
        z-index: 0;
      }
      .spotlight-card:hover::before { opacity: 1; }
      .spotlight-card > * { position: relative; z-index: 1; }

      .shimmer-btn { position: relative; overflow: hidden; }
      .shimmer-btn::after {
        content: '';
        position: absolute;
        top: 0; left: 0; width: 40%; height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
        transform: translateX(-120%) skewX(-15deg);
        pointer-events: none;
      }
      .shimmer-btn:hover::after { animation: shimmer-sweep 1s ease; }

      .tab-pill {
        position: absolute;
        top: 4px;
        bottom: 4px;
        border-radius: 0.6rem;
        background: linear-gradient(135deg, rgba(34,211,238,0.16), rgba(59,130,246,0.16));
        border: 1px solid rgba(34,211,238,0.3);
        box-shadow: 0 0 18px rgba(34,211,238,0.18) inset, 0 0 14px rgba(34,211,238,0.12);
        transition: left 0.35s cubic-bezier(0.65,0,0.35,1), width 0.35s cubic-bezier(0.65,0,0.35,1);
        pointer-events: none;
        z-index: 0;
      }

      .scan-line {
        position: absolute;
        left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, rgba(56,189,248,0.9), transparent);
        animation: scan-y 4.5s ease-in-out infinite;
        pointer-events: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .ring-rotate, .ring-rotate-rev, .grad-text-animated, .scan-line, .caret-blink { animation: none !important; }
      }
    `}</style>
  );
}

/* Typewriter-style rotating role line for the hero — cycles through a
   few real, resume-backed descriptors instead of one static line. */
function TypedRoles() {
  const phrases = [
    'Programmer Analyst Trainee @ Cognizant',
    'Building with Generative AI & LLMs',
    '.NET Full Stack · Angular · SQL Server',
  ];
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const speed = deleting ? 28 : 42;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, sub.length - 1);
        setSub(next);
        if (next === '') { setDeleting(false); setIdx((i) => (i + 1) % phrases.length); }
      }
    }, speed);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sub, deleting, idx]);

  return (
    <span className="font-mono">
      {sub}
      <span className="caret-blink text-cyan-400">▍</span>
    </span>
  );
}

/* AI-core hero visual: rotating rings of orbiting nodes around a
   pulsing core, with a few floating tech chips. Pure CSS/SVG, no
   external assets or libraries. */
function NeuralCore() {
  const chips = [
    { label: 'Gemini API', sub: 'LLM · 200 OK', top: '4%', left: '58%', delay: '0s' },
    { label: 'Neural Net', sub: 'training · stable', top: '38%', left: '82%', delay: '1.1s' },
    { label: 'Agile Sprint', sub: 'Jira · on track', top: '70%', left: '60%', delay: '2.2s' },
    { label: 'deploy.yml', sub: 'build → live ✓', top: '78%', left: '18%', delay: '0.6s' },
  ];
  return (
    <div className="relative w-full h-[420px] hidden lg:block" aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 ring-rotate">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>
          <div className="absolute inset-6 rounded-full border border-blue-500/20 ring-rotate-rev">
            <span className="absolute -bottom-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
          </div>
          <div className="absolute inset-14 rounded-full border border-sky-500/15 ring-rotate" style={{ animationDuration: '9s' }}>
            <span className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.9)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-600/25 border border-cyan-400/40 flex items-center justify-center backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-cyan-300" />
              <span className="absolute inset-0 rounded-2xl border border-cyan-400/40" style={{ animation: 'pulse-ring 2.4s ease-out infinite' }} />
            </div>
          </div>
        </div>
      </div>
      {chips.map((c) => (
        <div
          key={c.label}
          className="absolute px-3 py-2 rounded-xl glass border border-white/10 font-mono text-[11px] text-slate-400 shadow-lg"
          style={{ top: c.top, left: c.left, animation: `float-chip 6s ease-in-out infinite`, animationDelay: c.delay }}
        >
          <b className="block font-sans text-xs text-white mb-0.5 not-italic">{c.label}</b>
          <span className="text-cyan-300">{c.sub}</span>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14 reveal">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{subtitle}</p>
      )}
      <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [certModal, setCertModal] = useState(null);
  const [profileError, setProfileError] = useState(false);
  const active = useScrollSpy(navItems.map((n) => n.id));
  useReveal();

  // "Moving tabs" — sliding pill indicator that glides to the active nav item
  const navRefs = useRef({});
  const navRowRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const measure = () => {
      const el = navRefs.current[active];
      const row = navRowRef.current;
      if (el && row) {
        const elRect = el.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
        setPill({ left: elRect.left - rowRect.left, width: elRect.width, ready: true });
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--sx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--sy', `${e.clientY - rect.top}px`);
  };

  const openCert = (cert) => {
    if (cert?.image) setCertModal(cert);
    else if (cert?.link) window.open(cert.link, '_blank', 'noopener,noreferrer');
  };

  const galleryCerts = certifications.filter((c) => c.gallery);
  const listOnlyCerts = certifications.filter((c) => !c.gallery && c.link);

  return (
    <div className="min-h-screen bg-[#05080f] text-slate-200 font-sans antialiased selection:bg-cyan-500/30">
      <GlobalFX />
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#05080f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="text-lg font-bold tracking-tight text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Datta<span className="text-cyan-400">Sai</span>
          </button>

          <nav ref={navRowRef} className="hidden lg:flex items-center gap-1 relative">
            {pill.ready && (
              <span className="tab-pill" style={{ left: pill.left, width: pill.width }} />
            )}
            {navItems.map((item) => (
              <button
                key={item.id}
                ref={(el) => (navRefs.current[item.id] = el)}
                onClick={() => scrollTo(item.id)}
                className={`relative z-10 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active === item.id ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com/DattaSai13" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/datta-sai-sandela-483795330/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <button className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/5" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#0a0f1a]/98 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                    active === item.id ? 'text-cyan-300 bg-cyan-500/10' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <ParticleField />
        <div className="scan-line" style={{ top: 0 }} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-6 reveal">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to opportunities
              <Zap className="w-3 h-3 text-cyan-300/80" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] reveal">
              Datta Sai{' '}
              <span className="grad-text-animated bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Sandela
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium reveal min-h-[1.75rem]">
              <TypedRoles />
            </p>

            <p className="mt-5 text-slate-400 max-w-xl leading-relaxed reveal">
              B.Tech CSE (AI & ML) graduate building scalable applications at the intersection of
              software engineering, generative AI, and cloud technologies. Passionate about LLMs,
              AI agents, and modern deployment practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 reveal">
              <button
                onClick={() => scrollTo('projects')}
                className="shimmer-btn group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/dattaup_resume.pdf"
                download="dattaup_resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 reveal">
              <a href="https://github.com/DattaSai13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <span className="text-slate-600">·</span>
              <a href="https://www.linkedin.com/in/datta-sai-sandela-483795330/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <span className="text-slate-600">·</span>
              <a href="mailto:datta81069@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          <NeuralCore />
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="About" subtitle="AI & ML engineer focused on building practical, production-ready systems." />
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 reveal flex justify-center md:justify-start">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                <div
                  className="absolute -inset-3 rounded-[1.6rem] ring-rotate opacity-70"
                  style={{ background: 'conic-gradient(from 0deg, transparent, rgba(34,211,238,0.55), transparent 30%)' }}
                />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                {!profileError ? (
                  <img
                    src="/pic5.jpg"
                    alt="Datta Sai Sandela"
                    className="w-full h-full object-cover"
                    onError={() => setProfileError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-5xl font-bold text-white">
                    DS
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="md:col-span-3 reveal">
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/8">
                <p className="text-slate-300 leading-relaxed">
                  I am a B.Tech graduate in Artificial Intelligence and Machine Learning from
                  Sreenidhi Institute of Science and Technology. After completing my internship at
                  Cognizant as a Programmer Analyst Trainee, I now work full-time in the same role,
                  contributing to enterprise solutions with .NET Full Stack technologies.
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  My interests center on generative AI, large language models, AI agents, application
                  deployment, and cloud technologies. I continuously explore new tools and practices
                  to deliver impactful, scalable software.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI & ML', 'Generative AI', 'LLMs', 'AI Agents', 'Cloud', 'Deployment'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Brain, label: 'Generative AI & LLMs', desc: 'Gemini, prompt engineering' },
                  { icon: Cloud, label: 'Cloud & Deployment', desc: 'AWS foundations, delivery' },
                  { icon: Layers, label: 'Full-Stack Engineering', desc: '.NET, Angular, Python' },
                  { icon: Cpu, label: 'Continuous Learning', desc: 'Always exploring new tech' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 p-3 rounded-xl border border-white/6 bg-white/[0.03] hover:border-cyan-500/30 transition-all">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-28 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Experience" subtitle="Professional journey at Cognizant." />
          <div className="relative space-y-8">
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-sky-500/30 to-transparent hidden sm:block" />
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-0 sm:pl-14 reveal">
                <div className="hidden sm:flex absolute left-0 top-6 w-12 justify-center">
                  <div className={`w-3 h-3 rounded-full border-2 ${exp.current ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]' : 'bg-slate-700 border-slate-500'}`} />
                </div>
                <div className={`glass rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:border-cyan-500/30 ${exp.current ? 'border-cyan-500/25 bg-cyan-500/[0.04]' : 'border-white/8'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Current</span>
                        )}
                      </div>
                      <p className="mt-1 text-cyan-400 font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                        <span className="text-slate-500 font-normal">· {exp.type}</span>
                      </p>
                    </div>
                    <span className="text-sm text-slate-400 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-slate-300 border border-white/8">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Skills" subtitle="Organized by domain — no fabricated proficiency percentages." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                onMouseMove={handleSpotlight}
                className="spotlight-card group glass rounded-2xl p-5 border border-white/8 hover:border-cyan-500/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] reveal"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/6 group-hover:border-cyan-500/20 transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-28 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Projects" subtitle="Selected work from GitHub and professional experience." />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <article
                key={proj.title}
                onMouseMove={handleSpotlight}
                className="spotlight-card group glass rounded-2xl border border-white/8 overflow-hidden hover:border-cyan-500/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(34,211,238,0.1)] reveal"
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400/90">{proj.tag}</span>
                      <h3 className="mt-1 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">{proj.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
                      <Code2 className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{proj.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {proj.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-slate-400">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500/70 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-slate-400 border border-white/6">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition-all">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-20 md:py-28 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Research & Publication" subtitle="Final-year project work presented at an international conference." />
          <div className="max-w-4xl mx-auto glass rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-cyan-500/5 p-6 md:p-9 reveal">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {research.kind}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 text-slate-400 border border-white/10">
                {research.cpdHours}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 text-slate-400 border border-white/10">
                Hybrid Conference
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{research.title}</h3>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Conference</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{research.conference}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Organised by</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{research.organizers}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Date</p>
                  <p className="text-sm text-slate-300">{research.date}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-slate-300">{research.location}</p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500 font-mono">Certificate No. {research.certificateNo}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openCert({ name: research.title, org: research.conference, year: research.date, image: research.certImage })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all"
              >
                <Award className="w-4 h-4" /> View Certificate
              </button>
              <a
                href={research.paperFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all"
              >
                <FileText className="w-4 h-4" /> Read Research Paper
              </a>
              <a
                href={research.paperFile}
                download="HelpBridge_AI_Research_Paper.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
              >
                <Download className="w-4 h-4" /> Download Paper
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Certifications" subtitle="Click any certificate to view it full-size or open its credential." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryCerts.map((cert) => (
              <button
                key={cert.name}
                type="button"
                onClick={() => openCert(cert)}
                className="text-left group glass rounded-xl overflow-hidden border border-white/8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 reveal"
              >
                {cert.image ? (
                  <div className="aspect-[4/3] bg-[#0a0f1a] overflow-hidden relative">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                    />
                    <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-white/70 bg-black/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Expand
                    </span>
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 flex flex-col items-center justify-center gap-1.5 relative">
                    <Award className="w-6 h-6 text-cyan-300/90" />
                    <span className="text-[9px] font-mono text-cyan-300/70">View credential</span>
                    <ExternalLink className="w-3 h-3 text-cyan-300/60 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="p-2.5 sm:p-3">
                  <h3 className="font-semibold text-white text-xs leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2">{cert.name}</h3>
                  <p className="mt-1 text-[10px] text-slate-400 truncate">{cert.org} · {cert.year}</p>
                </div>
              </button>
            ))}
          </div>

          {listOnlyCerts.length > 0 && (
            <div className="mt-8 space-y-2 max-w-3xl mx-auto">
              {listOnlyCerts.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 glass rounded-xl px-4 py-3 border border-white/8 hover:border-cyan-500/30 transition-all reveal"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{cert.name}</div>
                    <div className="text-xs text-slate-500">{cert.org} · {cert.year}</div>
                  </div>
                  <span className="text-xs text-cyan-400 font-medium inline-flex items-center gap-1 shrink-0">
                    View <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="volunteering" className="py-20 md:py-28 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Volunteering" subtitle="Click a card to view the certificate." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {volunteering.map((v) => (
              <button
                key={v.org}
                type="button"
                onClick={() => openCert({ name: v.certName, org: v.org, year: v.period, image: v.certImage })}
                className="text-left glass rounded-2xl p-6 border border-white/8 hover:border-cyan-500/35 transition-all duration-300 hover:-translate-y-1 reveal"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{v.role}</h3>
                    <p className="text-sm text-cyan-400 mt-0.5">{v.org}</p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {v.period}
                    </p>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{v.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                      View certificate <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center text-xl font-bold text-white mb-6 reveal">Hackathons &amp; Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {achievements.map((a) => (
                <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 border border-white/8 hover:border-amber-500/30 transition-all reveal block">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                      <a.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{a.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{a.year}</p>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{a.detail}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-400/90">
                        Open link <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Education" />
          <div className="space-y-5 max-w-3xl mx-auto">
            {education.map((edu, i) => (
              <div key={i} className="glass rounded-2xl p-5 md:p-6 border border-white/8 flex gap-4 items-start hover:border-cyan-500/30 transition-all reveal">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-slate-300 mt-0.5">
                    {edu.institution}
                    {edu.location && <span className="text-slate-500"> · {edu.location}</span>}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8">{edu.score}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 p-8 md:p-10 text-center reveal">
            <FileText className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Resume</h2>
            <p className="mt-2 text-slate-400 max-w-md mx-auto text-sm">Download or view the latest version of my resume.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="/dattaup_resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> View Resume
              </a>
              <a href="/dattaup_resume.pdf" download="dattaup_resume.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all">
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 bg-[#070b14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Get in Touch" subtitle="Open to collaboration, opportunities, and interesting conversations." />
          <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="mailto:datta81069@gmail.com" className="glass rounded-2xl p-5 border border-white/8 hover:border-cyan-500/40 text-center group transition-all hover:-translate-y-1 reveal">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="mt-3 font-semibold text-white text-sm">Email</h4>
              <p className="mt-1 text-xs text-slate-400 break-all">datta81069@gmail.com</p>
            </a>
            <a href="tel:+918106950176" className="glass rounded-2xl p-5 border border-white/8 hover:border-cyan-500/40 text-center group transition-all hover:-translate-y-1 reveal">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="mt-3 font-semibold text-white text-sm">Phone</h4>
              <p className="mt-1 text-xs text-slate-400">+91 81069 50176</p>
            </a>
            <a href="https://www.linkedin.com/in/datta-sai-sandela-483795330/" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 border border-white/8 hover:border-cyan-500/40 text-center group transition-all hover:-translate-y-1 reveal">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <h4 className="mt-3 font-semibold text-white text-sm">LinkedIn</h4>
              <p className="mt-1 text-xs text-slate-400">datta-sai-sandela</p>
            </a>
            <a href="https://github.com/DattaSai13" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 border border-white/8 hover:border-cyan-500/40 text-center group transition-all hover:-translate-y-1 reveal">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <h4 className="mt-3 font-semibold text-white text-sm">GitHub</h4>
              <p className="mt-1 text-xs text-slate-400">@DattaSai13</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-white">Datta Sai Sandela</p>
            <p className="text-xs text-slate-500 mt-0.5">Programmer Analyst Trainee (PAT) @ Cognizant</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:datta81069@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/datta-sai-sandela-483795330/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/DattaSai13" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="GitHub"><Github className="w-4 h-4" /></a>
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Datta Sai Sandela. All rights reserved.</p>
        </div>
      </footer>

      {certModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setCertModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={certModal.name}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-4 border-b border-white/10">
              <div>
                <h3 className="font-bold text-white leading-snug">{certModal.name}</h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {certModal.org}{certModal.year ? ` · ${certModal.year}` : ''}
                </p>
              </div>
              <button type="button" onClick={() => setCertModal(null)} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-[#0a0f1a] flex items-center justify-center">
              {certModal.image && (
                <img src={certModal.image} alt={certModal.name} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
              )}
            </div>
            {certModal.link && (
              <div className="p-4 border-t border-white/10">
                <a href={certModal.link} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/25 transition-all">
                  <ExternalLink className="w-4 h-4" /> View credential / link
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}