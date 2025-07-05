"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8">
        <div className="text-xl font-bold tracking-tight">JAMES J. BURRELL</div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => setActiveSection("about")}
            className={`transition-colors ${
              activeSection === "about" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => setActiveSection("work")}
            className={`transition-colors ${
              activeSection === "work" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            WORK
          </button>
          <button
            onClick={() => setActiveSection("research")}
            className={`transition-colors ${
              activeSection === "research" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            RESEARCH
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`transition-colors ${
              activeSection === "contact" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            CONTACT
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-6 md:px-8 max-w-4xl">
        {activeSection === "about" && (
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-gray-400">▶</span>
              <h1 className="text-2xl md:text-3xl font-light">hi, i'm james.</h1>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed max-w-2xl">
              <p>
                I'm a researcher and software engineer with 6 relevant experiences spanning 2 years. Currently pursuing
                a Bachelor's in Economics + Computer Science at the University of San Francisco with a 3.88 GPA.
              </p>

              <p>
                I specialize in machine learning, NLP, and AI research. Currently working as a Machine Learning Engineer
                at Raytheon Technologies, building time-series ML models for predictive maintenance, and as an NLP/AI
                Researcher at MAGICS LAB developing culturally sensitive conversational AI.
              </p>

              <p>
                I'm passionate about responsible AI deployment and have been supporting the Technology Policy Institute
                through the Google Public Policy Fellowship, working on policy briefs and technical input on AI
                oversight.
              </p>

              <p className="text-sm">currently between san francisco and palo alto.</p>

              <p className="text-sm">
                reach me via{" "}
                <Link href="mailto:jjburrell@dons.usfca.edu" className="underline hover:text-white transition-colors">
                  email
                </Link>{" "}
                or connect on{" "}
                <Link
                  href="https://www.linkedin.com/in/james-burrell-6a661324a"
                  className="underline hover:text-white transition-colors"
                >
                  linkedin
                </Link>
              </p>
            </div>
          </div>
        )}

        {activeSection === "work" && (
          <div className="space-y-12">
            <h2 className="text-2xl font-light mb-8">experience</h2>

            <div className="space-y-8">
              <div className="border-l border-gray-800 pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-medium">raytheon technologies</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Machine Learning Engineer • May 2025 – Present</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built time-series ML models (XGBoost, Prophet, LSTM) for predictive maintenance. Applied anomaly
                  detection and forecasting to enable predictive maintenance strategies. Benchmarked models using
                  rolling-window cross-validation across varying forecast horizons.
                </p>
              </div>

              <div className="border-l border-gray-800 pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-medium">lexedge</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Chief Technical Officer, Co-Founder • Aug 2023 – Jul 2024</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Developed an AI-powered legal tool for case brief summarization. Designed a robust system with a
                  vector database containing 6+ million case records, enabling rapid retrieval through RAG architecture.
                </p>
              </div>

              <div className="border-l border-gray-800 pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-medium">google public policy fellowship</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Tech Fellow • Jul 2024 – Present</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Supporting the Technology Policy Institute with policy briefs and technical input on responsible AI
                  deployment and oversight. Analyzing statistical significance of conversational entrainment effects.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "research" && (
          <div className="space-y-12">
            <h2 className="text-2xl font-light mb-8">research & publications</h2>

            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium">magics lab</h3>
                  <span className="text-xs text-gray-400">Jul 2024 – Present</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Developing Transformer-based models for culturally sensitive conversational AI. Engineering feature
                  extraction pipelines combining Wav2Vec2 acoustic features with prosodic and lexical metrics.
                </p>
                <div className="text-xs text-gray-400">NLP/AI Researcher under Dr. David-Guy Brizan</div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">publications</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-300">A Chatbot Sensitive to Conversational Styles</p>
                      <p className="text-gray-400 text-xs">Interspeech (Pending Review) • Feb 2025</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-300">
                        A Conversational Style Labels and Analysis for the Switchboard Dataset
                      </p>
                      <p className="text-gray-400 text-xs">ICNLP (Pending Review) • Oct 2024</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-300">Climate Change and its Effects on Agriculture in Punjab</p>
                      <p className="text-gray-400 text-xs">Stanford Economic Review • Feb 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="space-y-8">
            <h2 className="text-2xl font-light mb-8">get in touch</h2>

            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed max-w-2xl">
                I'm always interested in discussing machine learning, AI research, and potential collaborations. Whether
                you're working on conversational AI, predictive maintenance, or responsible AI deployment, I'd love to
                connect.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <Link href="mailto:jjburrell@dons.usfca.edu" className="hover:text-white transition-colors">
                    jjburrell@dons.usfca.edu
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                  <Link
                    href="https://www.linkedin.com/in/james-burrell-6a661324a"
                    className="hover:text-white transition-colors"
                  >
                    linkedin.com/in/james-burrell-6a661324a
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-gray-400" />
                  <Link href="https://github.com/JBurrell999" className="hover:text-white transition-colors">
                    github.com/JBurrell999
                  </Link>
                </div>
              </div>

              <div className="pt-4 text-sm text-gray-400">
                <p>Based in San Francisco, CA</p>
                <p>Open to research collaborations and consulting opportunities</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Social Links - Fixed Right Side */}
      <div className="fixed right-6 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </Link>
        <Link href="https://github.com/JBurrell999" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/james-burrell-6a661324a"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4">
        <div className="flex justify-around text-xs">
          <button
            onClick={() => setActiveSection("about")}
            className={`transition-colors ${activeSection === "about" ? "text-white" : "text-gray-400"}`}
          >
            ABOUT
          </button>
          <button
            onClick={() => setActiveSection("work")}
            className={`transition-colors ${activeSection === "work" ? "text-white" : "text-gray-400"}`}
          >
            WORK
          </button>
          <button
            onClick={() => setActiveSection("research")}
            className={`transition-colors ${activeSection === "research" ? "text-white" : "text-gray-400"}`}
          >
            RESEARCH
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`transition-colors ${activeSection === "contact" ? "text-white" : "text-gray-400"}`}
          >
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  )
}
