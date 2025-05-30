import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedinIn,
  FaNode,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import "./App.css";
import Card from "./Components/Card.jsx";
import {
  SiCplusplus,
  SiExpo,
  SiExpress,
  SiMacos,
  SiMongodb,
} from "react-icons/si";
import { VscCode, VscCodeOss, VscVscode } from "react-icons/vsc";
import { RiNextjsLine } from "react-icons/ri";
import sid from "./assets/sid.png";
import prompto from "./assets/prompto.png";
import md from "./assets/md.png";
import vamos from "./assets/vamos.png";
import cv from "./assets/cv.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
// import ReactTooltip from "react-tooltip";
function App() {
  const [menu, setmenu] = useState(false);
  const projects = [
    {
      title: "VAMOS Mobility",
      description:
        "During my internship at VAMOS Mobility (May–July 2024), I developed a real-time E-Rickshaw Ride Booking Application using the MERN stack, designed to serve over 5,000 students at IIT Roorkee. The platform included two separate apps—one for users and one for drivers—each with a dedicated interface and features. I integrated OpenStreetMap with Leaflet.js to enable dynamic, real-time map rendering, and used WebSockets for live driver location tracking. I also built a smart Ride Allocation System leveraging Graph-Based Data Structures, ensuring that rides were automatically assigned within 2 minutes. Additionally, I implemented the PhonePe Payment Gateway to support secure and seamless digital transactions. This experience strengthened my skills in full-stack development, real-time systems, and scalable application design.",
      image: vamos,
      link: "https://www.vamosiitr.com",
    },
    {
      title: "Prompto",
      description:
        "Led the architectural design of the project, prioritizing modular components and routing utilizing Next.js' file-based routing system. Orchestrated a responsive and visually captivating user interface employing Tailwind CSS, enforcing consistency across the design system. Leveraged Next.js' inherent server-side rendering (SSR) capabilities to bolster SEO performance through server-side page rendering, thereby optimizing page load times. Implemented robust user authentication and authorization mechanisms for authors and administrators, safeguarding sensitive functionalities with Google authentication, demonstrating proficiency in security integration and frontend development.",
      image: prompto,
      link: "https://share-prompt-peach.vercel.app",
    },
    {
      title: "Mountdiggers",
      description:
        "I have collaborated for the development of a dynamic and visually engaging Mountain Trekking Website using the MERN stack, built with professional, scalable code architecture. The platform offers a smooth and modern user experience with animated trek cards, intuitive navigation, and a beautiful design that highlights India’s top trekking destinations. Users can explore both featured treks and a full trek listing, with smart filters to choose between batches, months, and sharing options. Each trek includes detailed information, user reviews, and itinerary breakdowns to help users make informed decisions. I also integrated the Razorpay payment gateway for secure and seamless bookings. This project showcases my skills in building real-world applications with a focus on both performance and user-centric design.",
      image: md,
      link: "https://www.mountdiggers.com",
    },
  ];
  const skills = [
    <FaHtml5 fontSize={50} />,
    <FaCss3 fontSize={50} />,
    <FaJs fontSize={50} />,
    <SiCplusplus fontSize={50} />,
    <FaReact fontSize={50} />,
    <RiNextjsLine fontSize={50} />,
    <FaNode fontSize={50} />,
    <SiExpress fontSize={50} />,
    <SiMongodb fontSize={50} />,
    <SiExpo fontSize={50} />,
  ];
  const tools = [
    <SiMacos fontSize={50} />,
    <VscVscode fontSize={50} />,
    <FaGithub fontSize={50} />,
  ];

  return (
    <>
      <div className="main">
        {/* <img src={background} alt="" className="background"/> */}
        <nav className="nav">
          <h3>
            Siddharth <span className="last_name">Gautam</span>
          </h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#cv">My CV</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <div className="phone-menu">
            <GiHamburgerMenu
              size={25}
              onClick={() => {
                setmenu(!menu);
              }}
            />
            {menu && (
              <div className="menu">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#experiences">Experiences</a>
                <a href="#cv">My CV</a>
                <a href="#contact">Contact Me</a>
              </div>
            )}
          </div>
        </nav>
        <section className="home" id="home">
          <div className="home-left">
            <h1>
              Hi, it's <span className="first-name">Siddharth</span>
            </h1>
            <h3 className="text-animation">
              I'm a <span></span>
            </h3>
            <p>
              Hi, I’m Siddharth Gautam, a final-year B.Tech Graduate from IIT
              Roorkee and a passionate Full Stack Developer. I love building
              user-friendly, high-performance web applications that solve
              real-world problems. With strong knowledge of React.js, Node.js,
              Express.js, MongoDB, and experience in React Native, I have
              developed several full-stack projects including ride-booking
              platforms, real-time dashboards, and delivery systems. My
              internships at IoT83 and VAMOS Mobility allowed me to work on
              scalable systems involving live tracking, authentication, and
              secure payments. Always curious and driven by growth, I enjoy
              learning new technologies, working in collaborative teams, and
              creating clean, efficient code that delivers real impact.
            </p>
            <div className="icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/siddharth-gautam-aa4ba61a0/"
                className="icon"
              >
                <FaLinkedinIn fontSize={25} />
              </a>
              <a
                target="_blank"
                href="https://github.com/SidxRengen"
                className="icon"
              >
                <FaGithub fontSize={25} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/_si_dharth_02?igsh=cjY4cWh6OTgwODlh"
                className="icon"
              >
                <FaInstagram fontSize={25} />
              </a>
              <a
                target="_blank"
                href="https://x.com/siddharth646406?t=bhxetLMMm7QTg2QLp1db5g&s=08"
                className="icon"
              >
                <FaTwitter fontSize={25} />
              </a>
            </div>
            <div className="buttons">
              <a className="button button1" href="#cv">
                CV
              </a>
              <a className="button button2" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home-right">
            <img src={sid} className="sid" alt="my photo" />
          </div>
        </section>
        <section className="projects" id="projects">
          <h1>My Projects</h1>
          <div className="project-card-container">
            {projects.map((project, index) => (
              <>
                <Card key={index} project={project} />
              </>
            ))}
          </div>
        </section>
        <section className="skills" id="skills">
          {" "}
          <h1>Skills</h1>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-circle">
                <p>{skill}</p>
              </div>
            ))}
          </div>
          <h1>Tools I use</h1>
          <div className="skills-list">
            {tools.map((skill, index) => (
              <div key={index} className="skill-circle">
                <p>{skill}</p>
              </div>
            ))}
            {/* <ReactTooltip /> */}
          </div>
        </section>
        <section className="experiences" id="experiences">
          <h1>Experiences</h1>
          <div className="experince-list">
            <div className="exp-left">
              <div className="box1">
                <h3>Junior Web Developer - Thomso, IIT Roorkee</h3>
                <p>
                  I had the privilege of collaborating closely with seasoned
                  professionals in the field. My primary focus was on ReactJS
                  projects, where I specialized in crafting small-scale
                  components. I actively contributed to the design and
                  implementation phases, enhancing the overall user experience.
                </p>
              </div>
              <div className="box1" style={{ marginTop: "100px" }}>
                <h3>Frontend Internship - IOT83, Gurugram</h3>
                <p>
                  During my internship, I developed the frontend of an employee
                  dashboard featuring a leave management system for the company.
                  Leveraging React's component-based architecture, I ensured
                  reusability, simplicity, and scalability in application
                  development. The implementation of MSAL/Azure for employee
                  login streamlined authentication processes, providing secure
                  access to Azure services with robust identity management.
                </p>
              </div>
            </div>
            <div className="exp-center">
              <div className="dot-year">2022</div>
              <div className="dot-year">2023</div>
              <div className="dot-year">2024</div>
            </div>
            <div className="exp-right">
              <div className="box1" style={{ marginTop: "180px" }}>
                <h3>Senior Web Developer - Thomso, IIT Roorkee</h3>
                <p>
                  I took charge of project and web strategic planning, ensuring
                  alignment with organizational objectives. This involved
                  coordinating meetings with clients to meticulously capture
                  their design preferences and requirements, fostering
                  transparent communication channels throughout the development
                  lifecycle. To enhance user engagement and security, I
                  integrated a robust payment gateway through Razorpay,
                  providing seamless transactions for ticket purchases and
                  merchandise acquisition
                </p>
              </div>
              <div className="box1" style={{ marginTop: "0px" }}>
                <h3>Software Developer Intern - VAMOS MOBILITY, Hybrid</h3>
                <p>
                  Developed E-Rick Ride Booking App using the MERN stack for
                  5,000+ students at IIT Roorkee, integrating Web-Sockets for
                  live driver location updates, Engineered a Ride Allocation
                  System leveraging Graph-Based Data Structures, achieving ride
                  confirmation within 2 minutes and Implemented PhonePe Payment
                  Gateway for safe and reliable transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cv" id="cv">
          <h1>My CV</h1>
          <div className="my_cv">
            <img src={cv} alt="" />
          </div>
          <a
            className="cv-btn"
            target="_blank"
            href="https://drive.google.com/file/d/1GAtnetv6fo-wa3CAex8pE5XXv9MKRjk-/view?usp=sharing"
          >
            Download
          </a>
        </section>
        <section className="contact" id="contact">
          <h1>Contact Me</h1>
          <form
            action="mailto:gautamsiddharth226@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="form-left">
              <input type="text" placeholder="Full Name" name="Name" />
              <input type="text" placeholder="Email" name="Email" />
              <input
                type="text"
                placeholder="Phone Number"
                name="Phone Number"
              />
              <input type="text" placeholder="Subject" name="Subject" />
            </div>
            <div className="form-right">
              {" "}
              <textarea name="description" placeholder="Your Message" />
              <div className="contact-buttons">
                <input className="button button1" type="submit" value="Send" />
                <input className="button" type="reset" value="Reset" />
              </div>
            </div>
          </form>
        </section>
        <section className="footer">
          <div className="icons" style={{ width: "300px" }}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/siddharth-gautam-aa4ba61a0/"
              className="icon"
            >
              <FaLinkedinIn fontSize={25} />
            </a>
            <a
              target="_blank"
              href="https://github.com/SidxRengen"
              className="icon"
            >
              <FaGithub fontSize={25} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_si_dharth_02?igsh=cjY4cWh6OTgwODlh"
              className="icon"
            >
              {" "}
              <FaInstagram fontSize={25} />
            </a>
            <a
              target="_blank"
              href="https://x.com/siddharth646406?t=bhxetLMMm7QTg2QLp1db5g&s=08"
              className="icon"
            >
              {" "}
              <FaTwitter fontSize={25} />
            </a>
          </div>
          <p>@Siddharth Gautam | All Rights Reserved 2024</p>
        </section>
      </div>
    </>
  );
}

export default App;
