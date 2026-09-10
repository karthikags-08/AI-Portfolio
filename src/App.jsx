import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const projects = [
    {
      title: "Smart Canteen Ordering System",
      description:
        "A web-based canteen ordering system with scanner integration to read student ID card register numbers and simplify the ordering process.",
      technologies: "HTML, CSS, Scanner Integration"
    },
    {
      title: "AI-Based Social Media Usage Prediction",
      description:
        "An AI-based system that analyzes application usage sequences to identify habitual behaviour and predict the next application a user is likely to open.",
      technologies:
        "Python, TensorFlow/Keras, PyTorch, Pandas, NumPy, Scikit-learn, LSTM, Transformer, FastAPI, PostgreSQL"
    }
  ]

  const certifications = [
    {
      title: "Oracle Java Foundations Certification",
      organization: "Oracle"
    },
    {
      title: "Deloitte Technology Job Simulation",
      organization: "Deloitte"
    },
    {
      title: "Career Essentials in Data Analysis",
      organization: "Microsoft & LinkedIn Learning"
    },
    {
      title: "Web Development Training",
      organization: "IDM Company, Erode"
    },
    {
      title: "Data Analytics Training",
      organization: "ETS Academy, Erode"
    },
    {
      title: "Full Stack Java Development Internship",
      organization: "The Developers Arena"
    }
  ]

  return (
    <>
      <Preloader />

      <Navbar />

      <Hero />

      <About />

      <Expertise />

      <Skills />

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative bg-white py-24 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="mb-14">
            <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
              My Work
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              Projects
            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
              Practical projects where I apply programming, web development,
              and AI/ML concepts to build useful digital solutions.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 border border-gray-200 rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >

                {/* Number */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-black text-[#8ECAE6]">
                    0{index + 1}
                  </span>

                  <span className="text-xs font-semibold text-gray-400">
                    PROJECT
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Technologies
                  </p>

                  <p className="text-sm font-semibold text-gray-700">
                    {project.technologies}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-7 right-7 h-1 bg-[#8ECAE6] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="relative bg-gray-50 py-24 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="mb-14">
            <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
              Credentials
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              Certifications
            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
              Certifications and training that support my learning in
              software development, Java, web development, and data analytics.
            </p>
          </div>

          {/* Certification List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {certifications.map((certificate, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:border-[#8ECAE6] hover:shadow-lg transition-all duration-300"
              >

                {/* Certificate Number */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#8ECAE6]/10 flex items-center justify-center">
                  <span className="text-sm font-black text-[#8ECAE6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Certificate Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8ECAE6] transition-colors">
                    {certificate.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {certificate.organization}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      <Contact />

      <Footer />
    </>
  )
}

export default App