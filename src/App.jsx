import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMoon,
  FaNode,
  FaPhoneAlt,
  FaReact,
  FaSun,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { DiDocker, DiMysql, DiPostgresql, DiRedis } from "react-icons/di";
import { SiLeetcode, SiMacos, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./App.css";
import Card from "./Components/Card.jsx";
import sid from "./assets/sid.png";
import gatherin from "./assets/gatherin.png";
import vamos from "./assets/vamos.png";
import googleDocs from "./assets/google-docs.png";
import cv from "./assets/cv.png";
import { FaGit } from "react-icons/fa6";

const resumeUrl =
  "https://drive.google.com/file/d/1GAtnetv6fo-wa3CAex8pE5XXv9MKRjk-/view?usp=sharing";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experiences" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth-gautam-iitr2025",
    icon: <FaLinkedinIn />,
  },
  {
    label: "GitHub",
    href: "https://github.com/SidxRengen",
    icon: <FaGithub />,
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/RENGEN02",
    icon: <SiLeetcode />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_si_dharth_02?igsh=cjY4cWh6OTgwODlh",
    icon: <FaInstagram />,
  },
];

const stats = [
  { value: "1750+", label: "LeetCode Rating" },
  { value: "5K+", label: "Users supported" },
  { value: "100+", label: "REST APIs Built" },
];
const projects = [
  {
    title: "VAMOS Mobility",
    description:
      "Real-time E-Rick ride booking platform for IIT Roorkee students with live driver tracking, smart ride allocation, and secure PhonePe payments.",
    image: vamos,
    link: "https://vamos-app-three.vercel.app",
    tags: ["MERN", "WebSockets", "Leaflet", "PhonePe"],
    highlights: [
      "Created a full-stack ride-booking platform handling 500+ ride requests with real-time trip management",
      "Implemented Socket.IO, Leaflet, and Geolocation APIs for sub-second real-time driver and rider location updates",
      "Optimized campus routing using Dijkstra’s algorithm across 100+ nodes with route computation under 100 ms",
    ],
  },
  {
    image: gatherin,
    title: "GatherIn",
    description:
      "Real-time chat system built with Spring Boot, WebSockets, JWT auth, Cloudinary media handling, and WebRTC audio calling.",
    link: "https://gather-in-frontend.vercel.app",
    tags: ["Spring Boot", "JWT", "WebSockets", "WebRTC"],
    highlights: [
      "Engineered a CRDT-based collaborative editor supporting 20+ concurrent users with conflict-free real-time editing",
      "Built 15+ REST APIs and STOMP/WebSocket services for document management and under 200 ms synchronization",
      "Processed 10K+ CRDT insert/delete operations with PostgreSQL persistence and deterministic conflict resolution",
    ],
  },
  {
    image: googleDocs,
    title: "Google Docs",
    description:
      "Google Docs–style collaborative editor built with Spring Boot, CRDTs, WebSockets, PostgreSQL, and React for seamless real-time document editing.",
    link: "https://google-docs-frontend-xi.vercel.app",
    tags: ["Spring Boot", "CRDT", "WebSockets", "PostgreSQL"],
    highlights: [
      "Implemented conflict-free collaborative editing using CRDTs with sub-200ms synchronization",
      "Built secure REST APIs, JWT authentication, and STOMP/WebSocket services for real-time collaboration",
      "Added live cursors, user presence, rich-text editing, and automatic document persistence",
    ],
  },
];

const skills = [
  { label: "Java", icon: <FaJava /> },
  { label: "Spring Boot", icon: <BiLogoSpringBoot /> },
  { label: "React", icon: <FaReact /> },
  { label: "TypeScript", icon: <BiLogoTypescript /> },
  { label: "Node.js", icon: <FaNode /> },
  { label: "MySQL", icon: <DiMysql /> },
  { label: "PostgreSQL", icon: <DiPostgresql /> },
  { label: "MongoDB", icon: <SiMongodb /> },
  { label: "Redis", icon: <DiRedis /> },
  { label: "Docker", icon: <DiDocker /> },
  { label: "Git", icon: <FaGit /> },
  { label: "Next.js", icon: <RiNextjsFill /> },
];

const tools = [
  { label: "macOS", icon: <SiMacos /> },
  { label: "VS Code", icon: <VscVscode /> },
  { label: "GitHub", icon: <FaGithub /> },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Meon Technologies • Noida",
    period: "Sep 2025 – Present",
    description:
      "Engineered 100+ REST APIs for authentication, fintech verification, document processing, and transaction workflows. Integrated KYC services, delivered mutual fund and verification modules handling 1,000+ daily API requests, and resolved 100+ frontend, backend, and API integration issues to improve onboarding reliability by 30%.",
  },
  {
    role: "Software Engineer Intern",
    company: "IoT83 • Gurugram",
    period: "Dec 2023 – Jan 2024",
    description:
      "Developed React-based dashboard modules for an employee management system used by 150+ employees. Integrated Azure MSAL authentication with role-based access control, automated attendance and Excel workflows, and streamlined HR operations by 60%.",
  },
  {
    role: "Web Developer",
    company: "Thomso, IIT Roorkee",
    period: "2022 – 2024",
    description:
      "Built reusable React components and responsive event pages for IIT Roorkee's annual cultural festival, improving development consistency, UI quality, and delivery speed across the web team.",
  },
];

const contactCards = [
  {
    label: "Email",
    value: "gautamsiddharth226@gmail.com",
    href: "mailto:gautamsiddharth226@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "9958150694",
    href: "tel:+919958150694",
    icon: <FaPhoneAlt />,
  },
  {
    label: "Location",
    value: "IIT Roorkee, India",
    href: "https://www.google.com/maps/search/IIT+Roorkee",
    icon: <FaMapMarkerAlt />,
  },
];

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem("portfolio-theme") === "dark"
    ? "dark"
    : "light";
};

function App() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const isDarkTheme = theme === "dark";

  const closeMenu = () => setMenu(false);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="main" data-theme={theme}>
      <nav className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          Siddharth <span>Gautam</span>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
            aria-pressed={isDarkTheme}
            onClick={toggleTheme}
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
            <span>{isDarkTheme ? "Light" : "Dark"}</span>
          </button>
          <button
            className="phone-menu"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenu((currentMenu) => !currentMenu)}
          >
            {menu ? <IoClose size={26} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
        {menu && (
          <div className="menu">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="home section-shell" id="home">
        <div className="home-left">
          <p className="eyebrow">
            Software Engineer | Java Backend | Full Stack
          </p>
          <h1>
            Building scalable backend systems and modern web applications.
          </h1>

          <h3 className="text-animation">
            I build with <span></span>
          </h3>

          <p className="hero-copy">
            I am Siddharth Gautam, a Software Engineer and IIT Roorkee graduate
            specializing in Java, Spring Boot, React, and scalable backend
            development. I build secure REST APIs, real-time applications, and
            intuitive user interfaces that solve real-world problems with clean
            architecture and high performance.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Work <FaArrowRight />
            </a>
            <a
              className="button button-secondary"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume <FaDownload />
            </a>
          </div>
          <div className="icons" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                target="_blank"
                rel="noreferrer"
                href={social.href}
                className="icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="home-right">
          <div className="profile-card">
            <img src={sid} className="sid" alt="Siddharth Gautam" />
            <div className="profile-summary">
              <span>Available for SDE roles</span>
              <strong>React | Node | Spring Boot</strong>
            </div>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>
            Projects with real users, payments, maps, and real-time flows.
          </h2>
        </div>
        <div className="project-card-container">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Technical toolkit</p>
          <h2>Comfortable across frontend, backend, databases, and tooling.</h2>
        </div>
        <div className="skills-panel">
          <div>
            <h3>Skills</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.label} className="skill-circle">
                  <span>{skill.icon}</span>
                  <p>{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Tools</h3>
            <div className="skills-list tools-list">
              {tools.map((tool) => (
                <div key={tool.label} className="skill-circle">
                  <span>{tool.icon}</span>
                  <p>{tool.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experiences section-shell" id="experiences">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Hands-on engineering experience across internships and teams.</h2>
        </div>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.role}-${experience.company}`}
            >
              <div className="experience-period">{experience.period}</div>
              <div>
                <h3>{experience.role}</h3>
                <p className="company">{experience.company}</p>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cv section-shell" id="cv">
        <div className="section-heading">
          <p className="eyebrow">Resume preview</p>
          <h2>Quick scan of my latest software development resume.</h2>
        </div>
        <div className="cv-layout">
          <div className="cv-copy">
            <h3>Siddharth Gautam</h3>

            <p>
              Software Engineer and IIT Roorkee graduate specializing in Java,
              Spring Boot, React, and scalable backend development. Experienced
              in building secure REST APIs, real-time applications,
              authentication systems, and production-ready web platforms.
            </p>

            <ul>
              <li> B.Tech, IIT Roorkee (2021 – 2025)</li>
              <li> Built 100+ REST APIs & real-time systems</li>
              <li> 500+ LeetCode problems • 1750+ peak rating</li>
              <li> 2nd Place – Techshila IIT Roorkee Hackathon</li>
            </ul>

            <a
              className="button button-primary"
              style={{marginTop:"10px"}}
              target="_blank"
              rel="noreferrer"
              href={resumeUrl}
            >
              Download Resume <FaDownload />
            </a>
          </div>
          <a
            className="my_cv"
            target="_blank"
            rel="noreferrer"
            href={resumeUrl}
            aria-label="Open resume"
          >
            <img src={cv} alt="Resume preview for Siddharth Gautam" />
          </a>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let us discuss an internship, SDE role, or product idea.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-cards">
            {contactCards.map((contact) => (
              <a
                key={contact.label}
                className="contact-card"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{contact.icon}</span>
                <div>
                  <p>{contact.label}</p>
                  <strong>{contact.value}</strong>
                </div>
              </a>
            ))}
          </div>
          <form
            action="mailto:gautamsiddharth226@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input type="text" placeholder="Full Name" name="Name" required />
            <input type="email" placeholder="Email" name="Email" required />
            <input type="text" placeholder="Subject" name="Subject" />
            <textarea name="description" placeholder="Your Message" required />
            <div className="contact-buttons">
              <button className="button button-primary" type="submit">
                Send Message
              </button>
              <button className="button button-secondary" type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="icons">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              target="_blank"
              rel="noreferrer"
              href={social.href}
              className="icon"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>Siddharth Gautam | All Rights Reserved 2026</p>
      </footer>
    </div>
  );
}

export default App;
