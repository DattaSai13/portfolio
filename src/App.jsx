import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Cpu, Award, School, Briefcase } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'awards', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Data for reusable components
  const educationData = [
    {
      institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
      degree: "B.Tech in CSE - AIML",
      percentage: "94%",
      period: "Current",
      achievements: []
    },
    {
      institution: "Sri Amogha Junior College, Hyderabad",
      degree: "12th (PCM)",
      percentage: "98%",
      period: "2020-2022",
      achievements: []
    },
    {
      institution: "Covells High School, Sanathnagar",
      degree: "10th",
      percentage: "100%",
      period: "2009-2020",
      achievements: []
    }
  ];

  const experiences = [
    {
      role: "Generative AI Virtual Internship",
      company: "Hyderabad",
      period: "07/2024 - 08/2024",
      description: "Worked on cutting-edge generative AI technologies and applications."
    },
    {
      role: "AI-Machine Learning Engineer",
      company: "PMKVY NSDC Skill India",
      period: "11/2023 - 03/2024",
      description: "Developed machine learning models and AI solutions as part of the Skill India initiative."
    }
  ];

  const awards = [
    {
      title: "Gold Medalist – Tata Essay Competition",
      issuer: "Tata Group",
      year: "2020",
      description: "Received top honors for exceptional writing in a national-level essay competition."
    },
    {
      title: "School Captain",
      issuer: "Covells High School",
      year: "2019-2020",
      description: "Led student council and organized school events, demonstrating leadership and teamwork."
    },
    {
      title: "NSS Volunteer Award",
      issuer: "National Service Scheme",
      year: "2020",
      description: "Recognized for outstanding community service and social impact initiatives."
    }
  ];

  const projects = [
    {
      title: "Website Cloning Templates",
      description: "Responsive clones of Netflix, LinkedIn, Hotstar, and Amazon using HTML, CSS, Bootstrap, and JavaScript.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://github.com/DattaSai13/website-cloning-templates"
    },
    {
      title: "AI-ML Projects",
      description: "Collection of machine learning and AI projects developed during coursework and internships.",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
      link: "https://github.com/DattaSai13/ai-ml-projects"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, Tailwind CSS, and Lucide icons.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/DattaSai13/portfolio"
    },
    {
      title: "1st React App",
      description: "First React application exploring component-based UI development and state management.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/DattaSai13/1streact"
    },
    {
      title: "ArtFrames React",
      description: "E-commerce platform for selling photo frames, built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/DattaSai13/ArtFrames-react"
    },
    {
      title: "React-3 Project",
      description: "Experimental React project focusing on advanced hooks and API integration.",
      technologies: ["React", "JavaScript", "REST API"],
      link: "https://github.com/DattaSai13/react-3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold text-white">Datta Sai</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'education', 'experience', 'awards', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  } transform hover:scale-105`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/DattaSai13" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/datta-sai-sandela-483795330/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in">
              Datta Sai Sandala
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in delay-100">
              B.Tech Student | CSE - AI & ML
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg animate-fade-in delay-200">
              Passionate Computer Science student specializing in AI & ML. Quick learner, strong communicator, and adaptable in fast-paced environments.
            </p>
            <div className="flex space-x-4 animate-fade-in delay-300">
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition-all duration-300 flex items-center transform hover:scale-105"
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 text-white rounded-full hover:bg-gray-600 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="md:flex items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl transition-transform duration-300 hover:scale-105">
                <img
                  src="pic5.jpg"
                  alt="Datta Sai Sandala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning at Sreenidhi Institute of Science and Technology, Hyderabad. With a strong academic background and hands-on experience in AI/ML, I'm constantly exploring new technologies and solving complex problems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start transition-transform duration-300 hover:scale-105">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Cpu className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Technical Skills</h4>
                    <p className="text-gray-600">HTML, CSS, Bootstrap, JavaScript, Python, C, Java</p>
                  </div>
                </div>
                <div className="flex items-start transition-transform duration-300 hover:scale-105">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Cpu className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Interests</h4>
                    <p className="text-gray-600">AI/ML, Web Development, Data Science, Cloud Computing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <School className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                      <p className="text-gray-600">{edu.degree} | {edu.percentage}</p>
                      <span className="text-gray-500 text-sm sm:mt-0 mt-1">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                      <p className="text-gray-600">{exp.company}</p>
                      <span className="text-gray-500 text-sm sm:mt-0 mt-1">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mt-3">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Achievements</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{award.title}</h3>
                    <p className="text-gray-600 mt-1">{award.issuer} | {award.year}</p>
                    <p className="text-gray-600 mt-2">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-200 p-3 rounded-full inline-block mb-4 group-hover:bg-gray-300 transition-colors duration-300">
                  <Code className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-gray-300 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 flex items-center transition-colors duration-300"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out if you're looking for a dedicated AI/ML enthusiast, have a question, or just want to connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-start transition-transform duration-300 hover:scale-105">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:datta81069@gmail.com" className="text-gray-600 hover:text-gray-900">datta81069@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start transition-transform duration-300 hover:scale-105">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/datta-sai-sandela-483795330/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      linkedin.com/in/datta-sai-sandela
                    </a>
                  </div>
                </div>
                <div className="flex items-start transition-transform duration-300 hover:scale-105">
                  <div className="bg-gray-200 p-3 rounded-full mr-4">
                    <Github className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">GitHub</h4>
                    <a
                      href="https://github.com/DattaSai13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      github.com/DattaSai13
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Datta Sai Sandala. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:datta81069@gmail.com" className="hover:text-white transition-colors duration-300">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/datta-sai-sandela-483795330/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/DattaSai13"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;